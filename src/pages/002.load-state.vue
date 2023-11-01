<template>
  <q-page class="flex flex-center">
    <canvas id="indexCanvas"> </canvas>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const instance = getCurrentInstance();
const SHADE = inject('SHADE')

onMounted(async () => {


  var bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 720 } });
  instance?.proxy?.$forceUpdate();


})

onUpdated(async () => {
  // text content should be the same as current `count.value`

  var bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
  bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 720 } })

  bit = await SHADE.hunt(SHADE.ActVsg.READ_VISAGE, { idx: "vsg00" })

  bit = await SHADE.hunt(SHADE.ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
  bit = await SHADE.hunt(SHADE.ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });

  //bit = await SHADE.hunt(SHADE.ActShd.TEST_SHADE, {});

  setTimeout(() => {

    router.push('/index')

  }, 4444);

})

onUnmounted(async () => {


  console.log("unmounted..")
  var bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })

})




</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TitlePage'
})
</script>
