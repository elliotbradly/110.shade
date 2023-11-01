"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteGraphic = exports.createGraphic = exports.removeGraphic = exports.writeGraphic = exports.readGraphic = exports.updateGraphic = exports.initGraphic = void 0;
var ActCol = __importStar(require("../../97.collect.unit/collect.action"));
var ActGph = __importStar(require("../../04.graphic.unit/graphic.action"));
var ActVsg = __importStar(require("../../01.visage.unit/visage.action"));
var bit, val, idx, dex, lst, dat;
var initGraphic = function (cpy, bal, ste) {
    return cpy;
};
exports.initGraphic = initGraphic;
var updateGraphic = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var graphic;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ste.hunt(ActGph.READ_GRAPHIC, { idx: bal.idx })];
            case 1:
                bit = _a.sent();
                dat = bit.gphBit.dat;
                graphic = dat.bit;
                graphic.clear();
                switch (dat.frm) {
                    case GRAPHIC.CIRCLE:
                        graphic.beginFill(dat.clr); // Red
                        graphic.drawCircle(dat.x, dat.y, dat.w); //
                        break;
                    case GRAPHIC.RECTANGLE:
                        graphic.beginFill(dat.clr);
                        graphic.lineStyle(3, dat.clr);
                        graphic.drawRect(dat.x, dat.y, dat.w, dat.h);
                        break;
                    case GRAPHIC.ROUNDED_RECTANGLE:
                        graphic.beginFill(dat.clr);
                        graphic.lineStyle(3, dat.clr);
                        graphic.drawRoundedRect(dat.x, dat.y, dat.w, dat.h, dat.crv);
                        break;
                }
                if (bal.slv != null)
                    return [2 /*return*/, bal.slv({ gphBit: { idx: "update-graphic", dat: dat } })];
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.updateGraphic = updateGraphic;
var readGraphic = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var slv;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                slv = bal.slv;
                if (bal.idx == null)
                    bal.idx = "gph00";
                return [4 /*yield*/, ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActGph.CREATE_GRAPHIC })];
            case 1:
                bit = _a.sent();
                if (slv != null)
                    slv({ gphBit: { idx: "read-graphic", dat: bit.clcBit.dat } });
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.readGraphic = readGraphic;
var writeGraphic = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (bal.idx == null)
                    bal.idx = "gph00";
                return [4 /*yield*/, ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActGph.CREATE_GRAPHIC })];
            case 1:
                bit = _a.sent();
                ste.hunt(ActGph.UPDATE_GRAPHIC, { idx: bal.idx });
                if (bal.slv != null)
                    bal.slv({ gphBit: { idx: "write-graphic", dat: bit.clcBit.dat } });
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.writeGraphic = writeGraphic;
var removeGraphic = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActGph.DELETE_GRAPHIC })];
            case 1:
                bit = _a.sent();
                if (bal.slv != null)
                    bal.slv({ vsgBit: { idx: "remove-graphic", dat: bit.clcBit } });
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.removeGraphic = removeGraphic;
var createGraphic = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var dat, key;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dat = { idx: bal.idx, src: bal.src, typ: SHADE.GRAPHIC };
                for (key in bal.dat) {
                    dat[key] = bal.dat[key];
                }
                try {
                    dat.bit = new PIXI.Graphics();
                    ;
                }
                catch (e) {
                    dat.dat = {};
                }
                if (dat.frm == null)
                    dat.frm = GRAPHIC.ROUNDED_RECTANGLE;
                if (dat.w == null)
                    dat.w = 333;
                if (dat.h == null)
                    dat.h = 333;
                if (dat.x == null)
                    dat.x = 0;
                if (dat.y == null)
                    dat.y = 0;
                if (dat.a == null)
                    dat.a = 1;
                if (dat.clr == null)
                    dat.clr = 0x00FF00;
                if (dat.crv == null)
                    dat.crv = 13;
                if (!(bal.src != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, ste.hunt(ActVsg.NEST_VISAGE, { src: bal.src, dat: dat })];
            case 1:
                bit = _a.sent();
                _a.label = 2;
            case 2:
                if (bal.slv != null)
                    return [2 /*return*/, bal.slv({ gphBit: { idx: "create-graphic", dat: dat } })];
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.createGraphic = createGraphic;
var deleteGraphic = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var dat, graphic;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (typeof window != "object")
                    return [2 /*return*/, bal.slv({ fceBit: { idx: "error-delete-graphic", dat: {} } })];
                return [4 /*yield*/, ste.hunt(ActGph.READ_GRAPHIC, { idx: bal.idx })];
            case 1:
                bit = _a.sent();
                dat = bit.gphBit.dat;
                graphic = dat.bit;
                graphic.destroy();
                dat.bit = null;
                if (bal.slv != null)
                    return [2 /*return*/, bal.slv({ vsgBit: { idx: "delete-graphic", dat: dat } })];
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.deleteGraphic = deleteGraphic;
var PIXI = __importStar(require("pixi.js-legacy"));
var GRAPHIC = __importStar(require("../../val/graphic"));
var SHADE = __importStar(require("../../val/shade"));
//# sourceMappingURL=graphic.buzz.js.map