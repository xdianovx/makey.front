<script setup>
import {useNavOpen} from "~/stores/navOpen.js";

const state = useNavOpen()
const {isNavOpen} = storeToRefs(state)


</script>

<template>
  <button class="burger" :class="{active: isNavOpen}" @click="state.toggleNav">
    <span class="top"></span>
    <span class="bottom"></span>
  </button>
</template>


<style lang="scss" scoped>
.burger {
  width: 24px;
  height: 24px;
  position: relative;

  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 18px;
    height: 2px;
    background: $bgWhite;
    border-radius: 2px;
  }

  &.active {
    .top {
      top: 18px;
      transform: rotate(45deg) translateX(-50%);
    }

    .bottom {

      bottom: 17px;
      transform: rotate(-45deg) translateX(-50%);
    }
  }
}

.top {
  top: 7px;
  transition: all .2s ease-in-out;
}

.bottom {
  bottom: 7px;
  transition: all .2s ease-in-out;

}
</style>
