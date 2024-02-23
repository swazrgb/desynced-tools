import { Instruction } from "./instruction";

export interface Pass {
    reverse?: boolean;
    (instr: Instruction, ip: number, program:Code): boolean | void;
}

export class Code {
    code: Instruction[] = [];

    add(instr: Instruction) {
        this.code.push(instr);
    }

    apply(pass: Pass) {
        if (pass.reverse) {
            this.#applyReverse(pass);
            return;
        }
        for (let i = 0; i < this.code.length; i++) {
            const instr = this.code[i];
            if(pass(instr, i, this) === false) {
                this.code.splice(i, 1);
                i--;
            }
        }
    }

    #applyReverse(pass: Pass) {
        for (let i = this.code.length - 1; i >= 0; i--) {
            const instr = this.code[i];
            pass(instr, i, this);
        }
    }

    // TODO: moveInstruction
}

export function reversePass(pass: Pass): Pass {
    pass.reverse = true;
    return pass;
}