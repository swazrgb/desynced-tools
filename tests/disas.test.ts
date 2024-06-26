import { Disassembler } from "../decompile/disasm";
import { DesyncedStringToObject } from "../dsconvert";
import { expect, test } from "@jest/globals";
import * as fs from "fs";
import { globSync } from "glob";
import path from "path";

for (const filename of globSync(`${__dirname}/*.txt`)) {
  const code = fs.readFileSync(filename, "utf8");
  const codeObj = DesyncedStringToObject(code);
  const asm = new Disassembler(codeObj as any).code();
  test(path.basename(filename), () => expect(asm).toMatchSnapshot());
}
