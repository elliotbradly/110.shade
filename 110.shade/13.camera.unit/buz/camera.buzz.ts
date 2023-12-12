import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActVsg from "../../01.visage.unit/visage.action";
import * as ActCam from "../../13.camera.unit/camera.action";

var bit, val, idx, dex, lst, dat;

export const initCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
    debugger
    return cpy;
};

export const updateCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {

 // var tween = gsap.to(mountains, { y: mountains.y + 50, x: mountains.x + 10, duration: 6, ease: "linear", repeat: 133 });

    return cpy;
};

export const readCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCam.CREATE_CAMERA })
    bal.slv({ canBit: { idx: "read-camera", dat: bit.clcBit.dat } });

    return cpy;
};

export const writeCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCam.CREATE_CAMERA })
    ste.hunt(ActCam.UPDATE_CAMERA, { idx: bal.idx })

    if (bal.slv != null) bal.slv({ canBit: { idx: "write-camera", dat: bit.clcBit.dat } });

    return cpy;
};
export const removeCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
    debugger
    return cpy;
};
export const createCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
    debugger
    return cpy;
};

import { CameraModel } from "../camera.model";
import CameraBit from "../fce/camera.bit";
import State from "../../99.core/state";
import gsap from "gsap";
