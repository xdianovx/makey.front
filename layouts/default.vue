<template>
  <div class="wrap">
    <Header/>
    <slot/>

    <Footer/>
  </div>
</template>

<script setup>
import {useNavOpen} from "~/stores/navOpen.js";
import devServerLogs from "#app/plugins/dev-server-logs.js";

const isNavOpenState = useNavOpen()
const {isNavOpen} = storeToRefs(isNavOpenState)
console.log(isNavOpen.value)

useHead({
  bodyAttrs: {
    class: () => {
      if (isNavOpen.value) {
        return 'active'
      } else {
        return ''
      }
    }
  }
})
</script>

<style lang="scss">
body {
  //overflow: hidden;
}

.wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
}
</style>
