<template>
  <div class="wrap">
    <Header />
    <slot />

    <Footer />
  </div>
</template>

<script setup></script>

<style lang="scss">
.wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
}
</style>
