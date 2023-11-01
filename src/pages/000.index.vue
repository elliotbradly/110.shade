<template>

<q-page class="home-page window-height window-width row justify-center items-center">



        <div class="col-12 text-center self-center">


          <q-img src="gif/000.open.gif" class="self-center" style="max-width: 300px; height: 150px;">
          </q-img>

      </div>


         </q-page>

</template>

<style scoped>
body {
  background-color: lightblue;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { Terminal } from 'xterm';

const router = useRouter()
const route = useRoute()

const instance = getCurrentInstance();
const SHADE = inject('SHADE')

onMounted(async () => {


  //alert(window.electron.store.get('foo'));

  //where we get the data needed to begin the game
  //const filePath = await window.electronAPI.initGame()

  var bit = await window.electronAPI.openGame()
  console.log(JSON.stringify(bit))

  instance?.proxy?.$forceUpdate();


})

onUpdated(async () => {
  // text content should be the same as current `count.value`




  //router.push('./gameTest')


})

onUnmounted(async () => {

  console.log("unmounted..")
  var bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })

})




</script>



<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
