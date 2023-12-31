export declare const initDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => DiskModel;
export declare const updateDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => Promise<DiskModel>;
export declare const writeDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => Promise<any>;
export declare const readDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => Promise<DiskModel>;
export declare const listDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => Promise<DiskModel>;
export declare const load_listDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => Promise<DiskModel>;
export declare const copyDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => Promise<any>;
export declare const frameDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => Promise<DiskModel>;
export declare const batchDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => DiskModel;
export declare const trashDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => Promise<DiskModel>;
export declare const ensureDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => Promise<DiskModel>;
export declare const deleteDisk: (cpy: DiskModel, bal: DiskBit, ste: State) => DiskModel;
import { DiskModel } from "../disk.model";
import DiskBit from "../fce/disk.bit";
import State from "../../99.core/state";
