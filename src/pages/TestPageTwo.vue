<template>
  <q-layout>

    <Inventory/>

  </q-layout>
</template>


<script>
import { defineComponent, ref } from 'vue'
import Inventory from 'components/Inventory.vue'

export default defineComponent({
  name: 'TestPageTwo',

  components: {
    Inventory
  },


 // setup () {
 //   const leftDrawerOpen = ref(false)

 //   return {
 //     essentialLinks: linksList,
 //     leftDrawerOpen,
 //     toggleLeftDrawer () {
 //       leftDrawerOpen.value = !leftDrawerOpen.value
 //     }
 //   }
  //}
})
</script>


<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { Mouse, Keyboard, Gamepad, or, and } from 'contro'

const router = useRouter()
const route = useRoute()

const instance = getCurrentInstance();
const SHADE = inject('SHADE')

const keyboard = new Keyboard()
const gamepad = new Gamepad()

onMounted(async () => {

  //const controls = {
  //jump: or(gamepad.button('A').trigger, keyboard.key('Space').trigger),
  //menu: or(gamepad.button('Back').trigger, keyboard.key('Esc').trigger),
  //inventory: or(gamepad.button('LB').trigger, keyboard.key('E').trigger),
  //map: or(gamepad.button('RB').trigger, keyboard.key('M').trigger),
  //statusOverlay: or(gamepad.button('RB'), keyboard.key('Tab')),
//}

//function gameLoop() {

  //console.log("looping")
  // Update the UI to reflect the player's input device(s)
  //game.jumpButton.text = controls.jump.label
  //game.menuButton.text = controls.menu.label
  // ...

  // Query the controls and do something
  //if (controls.jump.query()) alert("jump")
  //if (controls.menu.query()) alert("menu")
  //game.statusOverlay.visible = controls.statusOverlay.query()
  // ...

  //requestAnimationFrame(gameLoop)
//}


//gameLoop()


  instance?.proxy?.$forceUpdate();

  //alert(window.electron.store.get('foo'));
})

onUpdated(async () => {

})

onUnmounted(async () => {

})


</script>


