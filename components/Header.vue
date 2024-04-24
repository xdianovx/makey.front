<script setup>
import CartBtn from "./ui/Header/CartBtn.vue";
import SearchBtn from "./ui/Header/SearchBtn.vue";
import LikeBtn from "./ui/Header/LikeBtn.vue";
import UserBtn from "./ui/Header/UserBtn.vue";

const links = [
  {
    id: 1,
    title: "Women",
    slug: "/",
  },
  {
    id: 2,
    title: "Men",
    slug: "/",
  },
  {
    id: 3,
    title: "New",
    slug: "/",
  },
  {
    id: 4,
    title: "Gifts",
    slug: "/",
  },
  {
    id: 5,
    title: "Sale",
    slug: "/",
  },
];
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
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
  padding: 24px 0;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  color: $textWhite;
}

.header__wrap {
  display: flex;
  align-items: center;
}

.header__nav {
  //margin-left: 356px;
  display: flex;
  align-items: center;
  gap: 56px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.header__link {
  line-height: 150%;
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
