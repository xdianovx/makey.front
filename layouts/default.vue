<template>
  <div class="wrap">
    <Header />
    <slot />

    <Footer />
  </div>
</template>

<script setup>
import { useNavOpen } from "~/stores/navOpen.js";
import devServerLogs from "#app/plugins/dev-server-logs.js";
import { useProductInfoOpen } from "~/stores/productInfo";

const isNavOpenState = useNavOpen();
const isProductInfoOpenState = useProductInfoOpen();

const { isNavOpen } = storeToRefs(isNavOpenState);
const { isOpen: isProductInfoOpen } = storeToRefs(isProductInfoOpenState);

useHead({
  bodyAttrs: {
    class: () => {
      if (isNavOpen.value || isProductInfoOpen.value) {
        return "active";
      } else {
        return "";
      }
    },
  },
});
</script>

<style lang="scss">
body {
  overflow-x: hidden;
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
