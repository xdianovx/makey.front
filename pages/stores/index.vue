<script setup>
const cities = [
  { id: 1, title: "Гродно", slug: "grodno", cards: 4 },
  { id: 2, title: "Минск", slug: "minks", cards: 6 },
  { id: 3, title: "Брест", slug: "brest", cards: 2 },
  { id: 4, title: "Гомель", slug: "gomel", cards: 8 },
  { id: 5, title: "Витебск", slug: "vitebsk", cards: 2 },
];
</script>

<template>
  <main class="gray">
    <section class="top">
      <div class="container">
        <h1 class="title">Фирменные магазины</h1>
        <div class="cities">
          <button class="city-item active">Все магазины</button>
          <button v-for="item in cities" class="city-item">
            {{ item.title }}
          </button>
        </div>
      </div>
    </section>

    <section class="cards">
      <div class="container">
        <div class="cards-wrap">
          <UiStoresGroup
            :city="city.title"
            v-for="city in cities"
            :data="city.cards"
          />
        </div>
      </div>
    </section>

    <Spacer />
  </main>
</template>

<style lang="scss" scoped>
.top {
  margin-top: 100px;
}

.title {
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
}

.cities {
  margin-top: 32px;
  gap: 28px;
  display: flex;
}

.city-item {
  line-height: 150%;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    border-radius: 2px;
    bottom: -2px;
    left: auto;
    background: rgba(#000, 0.5);
    right: 0;
    transition: all $trans ease-in-out;
  }

  &.active {
    &:before {
      width: 100%;
      left: 0;
      right: auto;
    }
  }

  &:hover {
    &:before {
      width: 100%;
      left: 0;
      right: auto;
    }
  }
}

.cards {
  margin-top: 64px;
}

.cards-wrap {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
