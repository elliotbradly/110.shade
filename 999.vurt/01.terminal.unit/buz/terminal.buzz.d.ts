export declare const initTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => Promise<TerminalModel>;
export declare const rootTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const focusTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const clearTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const closeTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const inputTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => Promise<TerminalModel>;
export declare const tableTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const openTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const writeTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const contentTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const updateTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const addPort: (cpy: TerminalModel, bal: TerminalBit, ste: State) => Promise<TerminalModel>;
import { TerminalModel } from "../terminal.model";
import TerminalBit from "../fce/terminal.bit";
import State from "../../99.core/state";
