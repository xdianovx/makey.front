<script setup>
import CartBtn from "./ui/Header/CartBtn.vue";
import SearchBtn from "./ui/Header/SearchBtn.vue";
import LikeBtn from "./ui/Header/LikeBtn.vue";
import UserBtn from "./ui/Header/UserBtn.vue";

const route = useRoute();
const isHome = ref(true);

watch(
  () => route.path,
  () => {
    console.log(route.path);
    if (route.path === "/") {
      isHome.value = true;
    } else {
      isHome.value = false;
    }
  }
);

const links = [
  {
    id: 1,
    title: "Каталог",
    slug: "/",
    links: [
      {
        id: 1,
        title: "Сумки",
        slug: "/bags",
        sublinks: [
          { id: 1, title: "Все сумки", slug: "/collection/teddy" },
          { id: 1, title: "Средние сумки", slug: "/collection/teddy" },
          { id: 1, title: "Мини-сумки", slug: "/collection/teddy" },
        ],
      },
      { id: 2, title: "Кошельки", slug: "/bags" },
      { id: 3, title: "Косметички", slug: "/bags" },
      { id: 4, title: "Рюкзаки", slug: "/bags" },
      { id: 5, title: "Аксессуары", slug: "/bags" },
      { id: 6, title: "Ремни", slug: "/bags" },
      { id: 7, title: "Духи", slug: "/bags" },
      { id: 8, title: "Для дома", slug: "/bags" },
    ],
    collections: [
      { id: 1, title: "Teddy", slug: "/collection/teddy" },
      { id: 2, title: "Key", slug: "/collection/teddy" },
      { id: 3, title: "Tie", slug: "/collection/teddy" },
      { id: 4, title: "Waves", slug: "/collection/teddy" },
      { id: 5, title: "Trio", slug: "/collection/teddy" },
      { id: 6, title: "Classic", slug: "/collection/teddy" },
      { id: 7, title: "Bubbles", slug: "/collection/teddy" },
      { id: 8, title: "Royal", slug: "/collection/teddy" },
      { id: 9, title: "Le Lin", slug: "/collection/teddy" },
      { id: 10, title: "Geometry", slug: "/collection/teddy" },
      { id: 11, title: "Texture", slug: "/collection/teddy" },
      { id: 12, title: "Venice", slug: "/collection/teddy" },
      { id: 13, title: "Fleur", slug: "/collection/teddy" },
      { id: 14, title: "Italy", slug: "/collection/teddy" },
    ],
  },
  {
    id: 2,
    title: "Оплата и доставка",
    slug: "/",
    links: [
      { id: 1, title: "Сумки", slug: "/bags" },
      { id: 2, title: "Кошельки", slug: "/bags" },
      { id: 3, title: "Косметички", slug: "/bags" },
      { id: 4, title: "Рюкзаки", slug: "/bags" },
      { id: 5, title: "Аксессуары", slug: "/bags" },
      { id: 6, title: "Ремни", slug: "/bags" },
      { id: 7, title: "Духи", slug: "/bags" },
      { id: 8, title: "Для дома", slug: "/bags" },
    ],
    collections: [
      { id: 1, title: "Teddy", slug: "/collection/teddy" },
      { id: 2, title: "Key", slug: "/collection/teddy" },
      { id: 3, title: "Tie", slug: "/collection/teddy" },
      { id: 4, title: "Waves", slug: "/collection/teddy" },
      { id: 5, title: "Trio", slug: "/collection/teddy" },
      { id: 6, title: "Classic", slug: "/collection/teddy" },
      { id: 7, title: "Bubbles", slug: "/collection/teddy" },
      { id: 8, title: "Royal", slug: "/collection/teddy" },
      { id: 9, title: "Le Lin", slug: "/collection/teddy" },
      { id: 10, title: "Geometry", slug: "/collection/teddy" },
      { id: 11, title: "Texture", slug: "/collection/teddy" },
      { id: 12, title: "Venice", slug: "/collection/teddy" },
      { id: 13, title: "Fleur", slug: "/collection/teddy" },
      { id: 14, title: "Italy", slug: "/collection/teddy" },
    ],
  },
  {
    id: 3,
    title: "Гарантия и возврат",
    slug: "/",
  },
  {
    id: 4,
    title: "Магазины",
    slug: "/",
  },
  {
    id: 5,
    title: "Контакты",
    slug: "/",
  },
];
</script>

<template>
  <header class="header" :class="{ black: !isHome }">
    <div class="container">
      <div class="header__wrap">
        <NuxtLink to="/" class="header__logo">
          <img src="/assets/img/logo.svg" alt="Makey shop" />
        </NuxtLink>

        <nav class="header__nav">
          <UiNavItem v-for="item in links" :key="item.id" :data="item" />
        </nav>

        <div class="header__btns">
          <SearchBtn />
          <CartBtn />
          <div class="div"></div>
          <LikeBtn />
          <UserBtn />
        </div>

        <div class="header__btns-mob">
          <SearchBtn />
          <UiBurger />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  padding: 8px 0;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  color: $textWhite;
  z-index: 5;

  &.black {
    color: $textBlack;
  }

  .container {
    // z-index: 2;
    // position: relative;
  }
}

.header__wrap {
  display: flex;
  align-items: center;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 56px;
  margin-left: 10%;
}

.header__logo {
  position: relative;
  z-index: 2;
}

.header__btns {
  margin-left: auto;
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.header__btns-mob {
  display: none;
}

.div {
  width: 1px;
  height: 24px;
  background: $bgGray;
}

//////

@media screen and (max-width: 1280px) {
  .header__nav {
    display: none;
  }

  .header__btns {
    display: none;
  }

  .header__btns-mob {
    display: flex;
    margin-left: auto;
    gap: 24px;
  }
}
</style>
