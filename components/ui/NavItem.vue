<template>
  <div class="nav-item" ref="header" @mouseleave="hideMenu">
    <div
      class="header__link"
      :class="{ active: isActive }"
      @mouseenter="showMenu"
    >
      {{ data.title }}
    </div>

    <div class="megamenu">
      <div class="container">
        <div class="megamenu__wrap">
          <nav class="megamenu__list">
            <NuxtLink
              class="link link-anim"
              :to="link.slug"
              v-for="link in data.links"
              :key="link.id"
              >{{ link.title }}</NuxtLink
            >
          </nav>

          <div class="megamenu__collections_wrap">
            <h4 class="link-collection-anim">Коллекции</h4>
            <nav class="megamenu__collections">
              <NuxtLink
                class="link-collection link-collection-anim"
                :to="link.slug"
                v-for="link in data.collections"
                :key="link.id"
                >{{ link.title }}</NuxtLink
              >
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "vue";

const isActive = ref(false);
const props = defineProps(["data"]);

const header = ref();
let ctx;
let tl;

const showMenu = () => {
  isActive.value = true;
  tl.play();
};

const hideMenu = () => {
  isActive.value = false;
  tl.reverse();
};

onMounted(() => {
  ctx = gsap.context((self) => {
    const menu = self.selector(".megamenu");
    const link = self.selector(".link-anim");
    const linkCollection = self.selector(".link-collection-anim");
    // gsap.set(menu, {
    //   yPercent: -100,
    // });
    tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.2,
      },
    });

    tl.to(menu, {
      y: 0,
    })
      .from(
        link,
        {
          y: -20,
          opacity: 0,
          stagger: 0.02,
        }
        // "-=.2"
      )
      .from(
        linkCollection,
        {
          y: -20,
          opacity: 0,
          stagger: 0.02,
        },
        "<"
      );
  }, header.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<style lang="scss" scoped>
.megamenu {
  background: rgba(#000000, 0.7);
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  transform: translate(0, -100%);
  z-index: 1;
}

.megamenu__wrap {
  padding: 86px 0 120px;
  display: flex;
  gap: 64px;
  padding-left: calc(10% + 84px);
}

.link {
  font-weight: 600;
}

.header__link {
  position: relative;
  z-index: 2;
  line-height: 150%;
  cursor: pointer;
  transition: opacity $trans ease-in-out;
  &:hover {
    opacity: 0.4;
  }

  &.active {
    opacity: 0.4;
  }
}

.megamenu__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.megamenu__collections {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 92px);
  gap: 20px 0;
}
</style>
