"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forwardFocus = void 0;
const ActFoc = require("../focus.action");
var bit, val, idx, dex, lst, dat;
const forwardFocus = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var spot = bit.focBit.dat;
    //bit = await ste.hunt(ActFoc.CENTER_FOCUS, {idx:spot.idx, dat: spot } )
    var x = spot.x;
    var y = spot.y;
    var face = spot.face;
    var bonds = spot.bonds;
    if (bonds == null) {
        //nothing happens
        bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: bal.idx, src: face });
        var bonds = bit.focBit.dat;
        spot.bonds = bonds;
        debugger;
    }
    else {
        const now = bonds[face];
        x = now.x;
        y = now.y;
        debugger;
    }
    bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: bal.idx, src: face });
    var bonds = bit.focBit.dat;
    spot.bonds = bonds;
    spot;
    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: spot.idx, src: spot.src, dat: { x, y, bonds, face } });
    //debugger
    //bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: bal.idx, src:face })
    //var bonds = bit.focBit.dat
    //spot.bonds = bonds
    //spot
    //bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, dat: { x, y, bonds, face } })
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "forward-focus", dat } });
};
exports.forwardFocus = forwardFocus;
//# sourceMappingURL=forward-focus.buzz.js.map