<template>
  <button class="burger">
    <span class="top"></span>
    <span class="bottom"></span>
  </button>
</template>

<script setup></script>

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
}

.top {
  top: 7px;
}
.bottom {
  bottom: 7px;
}
</style>
