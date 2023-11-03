"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yieldMenu = void 0;
const ActFoc = require("../../01.focus.unit/focus.action");
const ActMap = require("../../03.hexmap.unit/hexmap.action");
const ActTrm = require("../../act/terminal.action");
var bit, lst, dex, idx, dat;
const yieldMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActTrm.CLEAR_TERMINAL, { src: "-----------" });
    var idxMap = 'map00';
    var frm = SHAPE.RECTANGLE;
    var w = 10;
    var h = 10;
    bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx: idxMap, dat: { frm, w, h } });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "YIELDING...", val: 9 });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.hunt(ActMap.SELECT_HEXMAP, { idx });
    var idxFoc = 'foc00';
    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: idxFoc });
    bit = await ste.hunt(ActFoc.SELECT_FOCUS, { idx: idxFoc });
    bit = await ste.hunt(ActMap.FOCUSING_HEXMAP, { idx: idxMap, src: idxFoc });
    bal.slv({ intBit: { idx: "yield-menu" } });
    return cpy;
};
exports.yieldMenu = yieldMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const SHAPE = require("../../val/shape");
//# sourceMappingURL=yield-menu.buzz.js.map