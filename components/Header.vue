<script setup>
import CartBtn from "./ui/Header/CartBtn.vue";
import SearchBtn from "./ui/Header/SearchBtn.vue";
import LikeBtn from "./ui/Header/LikeBtn.vue";
import UserBtn from "./ui/Header/UserBtn.vue";

const route = useRoute().path;

const links = [
  {
    id: 1,
    title: "Каталог",
    slug: "/",
  },
  {
    id: 2,
    title: "Оплата и доставка",
    slug: "/",
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
  <header class="header">
    <div class="container">
      <div class="header__wrap" :class="{ white: route !== '/' }">
        <NuxtLink to="/" class="header__logo">
          <img src="/assets/img/logo.svg" alt="Makey shop" />
        </NuxtLink>

        <nav class="header__nav">
          <NuxtLink
            :to="link.slug"
            :key="link.id"
            v-for="link in links"
            class="header__link"
          >
            {{ link.title }}
          </NuxtLink>
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

  &.white {
    color: $textBlack;
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
  // position: absolute;
  // left: 50%;
  // transform: translateX(-50%);
}

.header__link {
  line-height: 150%;
  transition: opacity $trans ease-in-out;
  &:hover {
    opacity: 0.4;
  }

  &.active {
    opacity: 0.4;
  }
}

.header__btns {
  margin-left: auto;
  display: flex;
  gap: 24px;
  align-items: center;
}

.header__btns-mob {
  display: none;
}

.div {
  width: 1px;
  height: 24px;
  background: $bgGray;
}

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
