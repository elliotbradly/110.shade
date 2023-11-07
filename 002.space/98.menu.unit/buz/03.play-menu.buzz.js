"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusPlayMenu = void 0;
const ActMnu = require("../menu.action");
const ActFoc = require("../../01.focus.unit/focus.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, idx, dat, src;
const focusPlayMenu = async (cpy, bal, ste) => {
    var focMod = ste.value.focus;
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Play Menu" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.hunt(ActFoc.LIST_FOCUS);
    lst = bit.focBit.lst;
    debugger;
    bit = await ste.hunt(ActMnu.FOCUS_MENU, {});
    //updateMenu(cpy, bal, ste);
    return cpy;
};
exports.focusPlayMenu = focusPlayMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=03.play-menu.buzz.js.map