import { Action } from "../99.core/interface/action.interface";
import  ChromeBit  from "./fce/chrome.bit";

// Chrome actions

export const INIT_CHROME = "[Chrome action] Init Chrome";
export class InitChrome implements Action {
 readonly type = INIT_CHROME;
 constructor(public bale: ChromeBit) {}
}

export const UPDATE_CHROME = "[Chrome action] Update Chrome";
export class UpdateChrome implements Action {
 readonly type = UPDATE_CHROME;
 constructor(public bale: ChromeBit) {}
}

export type Actions = | InitChrome | UpdateChrome ;
