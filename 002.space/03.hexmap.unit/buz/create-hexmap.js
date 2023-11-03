"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHexmap = void 0;
var bit, idx, lst, dat, val, src;
const createHexmap = async (cpy, bal, ste) => {
    var clone = require("clone-deep");
    var dat = { idx: bal.idx, typ: SPACE.HEXMAP };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    dat;
    const Hex = Honeycomb.extendHex({
        size: Number(1),
        orientation: "pointy",
    });
    const Grid = Honeycomb.defineGrid(Hex);
    var copied = clone(dat.bit.grid);
    dat.grid = Grid(copied);
    if (dat.bit == null) {
        if (bal.slv != null)
            bal.slv({ mapBit: { idx: "create-hexmap-error", src: "no bit present" } });
        return;
    }
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "create-hexmap", dat } });
    return cpy;
};
exports.createHexmap = createHexmap;
const Honeycomb = require("honeycomb-grid");
const SPACE = require("../../val/space");
//# sourceMappingURL=create-hexmap.js.map