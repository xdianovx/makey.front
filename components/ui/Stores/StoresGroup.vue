<template>
  <div class="stores">
    <h2>{{ city }}</h2>

    <div class="cards">
      <StoreCard v-for="item in data" :key="item.id" />
    </div>
  </div>
</template>

<script setup>
import StoreCard from "./StoreCard.vue";

const props = defineProps(["city", "data"]);
</script>

<style scoped lang="scss">
.cards {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media screen and (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 550px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
