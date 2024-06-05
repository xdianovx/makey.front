<script setup>
import CartBtn from "./ui/Header/CartBtn.vue";
import SearchBtn from "./ui/Header/SearchBtn.vue";
import LikeBtn from "./ui/Header/LikeBtn.vue";
import UserBtn from "./ui/Header/UserBtn.vue";
import { useIsHomeStore } from "../stores/isHome";
import { useNavOpen } from "~/stores/navOpen.js";
import MobileNav from "~/components/MobileNav.vue";
import { useNavigationLinks } from "~/stores/navigationLinks.js";

const linksStore = useNavigationLinks();
const { links } = storeToRefs(linksStore);
const route = useRoute();
const store = useIsHomeStore();

const { isHome } = storeToRefs(store);

onMounted(() => {
  if (route.path === "/") {
    store.setIsHome();
  } else {
    store.setIsNotHome();
  }
});

watch(
  () => route.path,
  () => {
    if (route.path === "/") {
      store.setIsHome();
    } else {
      store.setIsNotHome();
    }
  }
);

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;
let tl;

onMounted(() => {
  // ctx = gsap.context((self) => {
  //   const header = self.selector(".header");
  //   tl = gsap.timeline({
  //     defaults: { ease: "none" },
  //     scrollTrigger: {
  //       trigger: header,
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //   });
  //   tl.to(header, {
  //     yPercent: 0,
  //     opacity: 0,
  //   });
  // }, main.value); // <- Scope!
});

onUnmounted(() => {
  // ctx.revert(); // <- Easy Cleanup!
});

const activeNavCategory = ref("");
const isMainMobileOpen = ref(true);
</script>

<template>
  <header class="header" ref="main" :class="{ black: !isHome }">
    <MobileNav />
    <div class="container">
      <div class="header__wrap">
        <UiHeaderLogo />
        <nav class="header__nav">
          <UiNavItem v-for="item in links" :key="item.id" :data="item" />
        </nav>

        <div class="header__btns">
          <SearchBtn />
          <CartBtn />
          <div class="div" :class="{ black: !isHome }"></div>
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

<style lang="scss" scoped>
.header {
  padding: 8px 0;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  color: $textWhite;
  z-index: 5;

  &.black {
    color: $textBlack;
    background: $bgWhite;
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

  &.black {
    background: $bgBLack;
  }
}

@media screen and (max-width: 1280px) {
  .header {
    padding: 14px 0;
  }
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
