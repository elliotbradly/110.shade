import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'

import * as ActVsg from '../110.shade/01.visage.unit/visage.action'
import * as ActCan from '../110.shade/03.container.unit/container.action'
import * as ActTxt from '../110.shade/05.text.unit/text.action'



export type HelloWorld = string | number


export const mount = async (value: HelloWorld) => {
    console.log('sampleFunc:: ', value)

    const instance = getCurrentInstance();
    const SHADE = inject('SHADE')

    var bit = await SHADE['hunt']( ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { } });
    instance?.proxy?.$forceUpdate();

    return value
}

export const update = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  var bit = await SHADE['hunt']( ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
  bit = await SHADE['hunt']( ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { } })

  bit = await SHADE['hunt']( ActVsg.READ_VISAGE, { idx: "vsg00" })

  bit = await SHADE['hunt']( ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
  bit = await SHADE['hunt']( ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });

  bit = await SHADE['hunt']( ActTxt.WRITE_TEXT, { idx:'txt00', src:'vsg00', can: 'can00', txt: "vsg00" });

  return value
}

export const unmount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  var bit = await SHADE['hunt']( ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: {} });
  instance?.proxy?.$forceUpdate();

  return value
}

export type Shade <Type> = {
  hunt: Function;
} & Type

