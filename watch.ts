import ts = require("typescript");
import {compileProgram, CompilerOptions} from "./compile";
import {basename, dirname} from "path";
import fs from "fs";
import {assemble} from "./assembler";
import {ObjectToDesyncedString} from "./dsconvert";

Promise.all([
    import("clipboardy")
]).then(([{default: clipboard}]) => {
    const formatHost: ts.FormatDiagnosticsHost = {
        getCanonicalFileName: path => path,
        getCurrentDirectory: ts.sys.getCurrentDirectory,
        getNewLine: () => ts.sys.newLine
    };

    function compile(filename: string, program: ts.SemanticDiagnosticsBuilderProgram) {
        const asm = compileProgram(filename, program.getProgram());

        const dir = dirname(filename);
        const asmFilename = dir + "/out/" + basename(filename) + ".asm";
        fs.writeFileSync(asmFilename, asm);

        const obj = assemble(asm);
        fs.writeFileSync(asmFilename + ".json", JSON.stringify(obj, undefined, 2));

        let typ = "C";
        if ("frame" in obj) {
            typ = "B";
        }

        const str = ObjectToDesyncedString(obj, typ);
        clipboard.writeSync(str);
        fs.writeFileSync(asmFilename + ".txt", str, {
            flush: true,
        });
    }

    function watchMain() {
        // const configPath = ts.findConfigFile(
        //     /*searchPath*/ "./behaviors",
        //     ts.sys.fileExists,
        //     "tsconfig.json"
        // );
        // if (!configPath) {
        //     throw new Error("Could not find a valid 'tsconfig.json'.");
        // }

        // TypeScript can use several different program creation "strategies":
        //  * ts.createEmitAndSemanticDiagnosticsBuilderProgram,
        //  * ts.createSemanticDiagnosticsBuilderProgram
        //  * ts.createAbstractBuilder
        // The first two produce "builder programs". These use an incremental strategy
        // to only re-check and emit files whose contents may have changed, or whose
        // dependencies may have changes which may impact change the result of prior
        // type-check and emit.
        // The last uses an ordinary program which does a full type check after every
        // change.
        // Between `createEmitAndSemanticDiagnosticsBuilderProgram` and
        // `createSemanticDiagnosticsBuilderProgram`, the only difference is emit.
        // For pure type-checking scenarios, or when another tool/process handles emit,
        // using `createSemanticDiagnosticsBuilderProgram` may be more desirable.
        const createProgram = ts.createSemanticDiagnosticsBuilderProgram;

        // Note that there is another overload for `createWatchCompilerHost` that takes
        // a set of root files.
        const filename = process.argv[2];
        const files = [filename, `${__dirname}/behavior.d.ts`];

        const host = ts.createWatchCompilerHost(
            files,
            CompilerOptions,
            ts.sys,
            createProgram,
            reportDiagnostic,
            reportWatchStatusChanged
        );
        //
        // // You can technically override any given hook on the host, though you probably
        // // don't need to.
        // // Note that we're assuming `origCreateProgram` and `origPostProgramCreate`
        // // doesn't use `this` at all.
        // const origCreateProgram = host.createProgram;
        // host.createProgram = (rootNames: ReadonlyArray<string>, options, host, oldProgram) => {
        //     console.log("** We're about to create the program! **");
        //     return origCreateProgram(rootNames, options, host, oldProgram);
        // };
        const origPostProgramCreate = host.afterProgramCreate;

        host.afterProgramCreate = program => {
            try {
                compile(filename, program);
                console.log("** We finished making the program! **");
            } catch(e) {
                console.error(e);
            }

            origPostProgramCreate!(program);
        };

        // `createWatchProgram` creates an initial program, watches files, and updates
        // the program over time.
        ts.createWatchProgram(host);
    }

    function reportDiagnostic(diagnostic: ts.Diagnostic) {
        console.error("Error", diagnostic.code, ":", ts.flattenDiagnosticMessageText(diagnostic.messageText, formatHost.getNewLine()));
    }

    /**
     * Prints a diagnostic every time the watch status changes.
     * This is mainly for messages like "Starting compilation" or "Compilation completed".
     */
    function reportWatchStatusChanged(diagnostic: ts.Diagnostic) {
        console.info(ts.formatDiagnostic(diagnostic, formatHost));
    }

    watchMain();

});