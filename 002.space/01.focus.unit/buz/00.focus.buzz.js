"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelFocus = exports.openFocus = exports.selectFocus = exports.locateFocus = exports.centerFocus = exports.cornerFocus = exports.listFocus = exports.deleteFocus = exports.removeFocus = exports.writeFocus = exports.readFocus = exports.initFocus = void 0;
const ActFoc = require("../focus.action");
const ActMap = require("../../03.hexmap.unit/hexmap.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat;
const initFocus = (cpy, bal, ste) => {
    var lst = [ActFoc.OPEN_FOCUS];
    bal.slv({ intBit: { idx: "init-focus", lst } });
    return cpy;
};
exports.initFocus = initFocus;
const readFocus = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = "foc00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActFoc.CREATE_FOCUS });
    if (slv != null)
        slv({ focBit: { idx: "read-focus", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readFocus = readFocus;
const writeFocus = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = "foc00";
    if (bal.val != 1)
        ste.hunt(ActFoc.UPDATE_FOCUS, { idx: bal.idx });
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFoc.CREATE_FOCUS });
    var spot = bit.clcBit.dat;
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "write-focus", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeFocus = writeFocus;
const removeFocus = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeFocus = removeFocus;
const deleteFocus = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteFocus = deleteFocus;
const listFocus = async (cpy, bal, ste) => {
    dat = null;
    bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActFoc.CREATE_FOCUS });
    if (bit.clcBit.dat == null)
        lst = [];
    else
        dat = bit.clcBit.dat;
    if (dat != null) {
        dat.bitList.forEach((a) => {
            lst = [];
            lst.push((a.idx));
        });
    }
    if (bal.slv != null)
        bal.slv({ focBit: { idx: 'list-focus', lst } });
    return cpy;
};
exports.listFocus = listFocus;
const cornerFocus = async (cpy, bal, ste) => {
    var spot = bal.dat;
    var grid;
    bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: bal.idx });
    grid = bit.mapBit.dat.grid;
    var hex = grid.get({ x: spot.x, y: spot.y });
    const point = hex.toPoint();
    lst = hex.corners().map((corner) => corner.add(point));
    spot.corners = lst;
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "corner-focus", lst, dat: spot } });
    return cpy;
};
exports.cornerFocus = cornerFocus;
const centerFocus = async (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "center-focus", dat } });
};
exports.centerFocus = centerFocus;
const locateFocus = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var spot = bit.focBit.dat;
    bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: spot.map });
    var map = bit.mapBit.dat;
    var grid = map.dat;
    var hex = grid.get({ x: spot.x, y: spot.y });
    var idx = spot.map + "-" + spot.x + "-" + spot.y;
    spot.loc = hex;
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "locate-focus", dat: spot } });
    return cpy;
};
exports.locateFocus = locateFocus;
const selectFocus = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var spot = bit.focBit.dat;
    cpy.select = spot;
    //bit = await ste.hunt( ActFoc.VISION_FOCUS, { idx: bal.idx })
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "select-focus", dat: cpy.select } });
    return cpy;
};
exports.selectFocus = selectFocus;
const openFocus = (cpy, bal, ste) => {
    //var slv = bal.slv;
    //bal.slv = null;
    //var bit: FocusBit = { idx:'idx' , src:'hmm', x:0, y:0, };
    //if (cpy.focusBits[bit.idx] != null) {
    //  var dat = cpy.focusBitList[cpy.focusBits[bit.idx]];
    //  if (bal.slv != null) bal.slv({ focBit: { idx: "open-focus", dat } });
    //  return cpy;
    //}
    //bit.x = Number(bit.x);
    // bit.y = Number(bit.y);
    // bit.src = bal.src;
    //if (bit.src == null) bit.src = "none";
    //if (isNaN(bit.x)) bit.x = 0;
    //if (isNaN(bit.y)) bit.y = 0;
    //if (bit.x == null) bit.x = 0;
    //if (bit.y == null) bit.y = 0;
    //if (bit.face == null) bit.face = "E";
    //if (bit.past == null) bit.past = [];
    //if (bit.update == null) bit.update = 0;
    //if (bit.clock == null) bit.clock = 0;
    //if (bit.updateSpeed == null) bit.updateSpeed = 11;
    //if (bit.turnSpeed == null) bit.turnSpeed = 11;
    //if (bit.creation == null) bit.creation = Math.floor(Date.now() / 1000);
    //if (bit.camX == null) bit.camX = 0.5;
    //if (bit.camY == null) bit.camY = 0.5;
    //if (bit.spin == null) bit.spin = true;
    //cpy.focusBits[bit.idx] = cpy.focusBitList.length;
    //cpy.focusBitList.push(bit);
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "open-focus", dat: {} } });
    return cpy;
};
exports.openFocus = openFocus;
//grab all the model data 
const modelFocus = async (cpy, bal, ste) => {
    if (bal.src == null)
        bal.src = 'GET';
    switch (bal.src) {
        case 'GET':
            bit = await ste.hunt(ActCol.GET_COLLECT, { idx: 'focus' });
            dat = bit.clcBit.dat;
            break;
        case 'PUT':
            break;
    }
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "model-focus", dat } });
    return cpy;
};
exports.modelFocus = modelFocus;
//# sourceMappingURL=00.focus.buzz.js.map