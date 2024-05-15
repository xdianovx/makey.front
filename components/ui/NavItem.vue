<script setup>
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "vue";

const store = useIsHomeStore();

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

    tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.2,
      },
    });

    tl.to(menu, {
      y: 0,
    })
      .from(link, {
        y: -20,
        opacity: 0,
        stagger: 0.02,
      })
      .from(
        linkCollection,
        {
          y: -20,
          opacity: 0,
          stagger: 0.02,
        },
        "<",
      );
  }, header.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="nav-item" ref="header" @mouseleave="hideMenu">
    <NuxtLink
      :to="data.slug"
      class="header__link"
      :class="{ active: isActive }"
      @mouseenter="showMenu"
    >
      {{ data.title }}
    </NuxtLink>

    <div class="megamenu" :class="{ white: !store.isHome }">
      <div class="container">
        <div class="megamenu__wrap">
          <nav class="megamenu__list">
            <NuxtLink
              class="link link-anim"
              :to="link.slug"
              v-for="link in data.links"
              :key="link.id"
              >{{ link.title }}
            </NuxtLink>
          </nav>

          <div class="megamenu__collections_wrap">
            <NuxtLink to="/collections" class="link-collection-anim"
              >Коллекции</NuxtLink
            >
            <nav class="megamenu__collections">
              <NuxtLink
                class="link-collection link-collection-anim"
                :to="link.slug"
                v-for="link in data.collections"
                :key="link.id"
                >{{ link.title }}
              </NuxtLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.megamenu {
  background: #0c0c0c;
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  transform: translate(0, -100%);
  z-index: 1;

  &.white {
    background: #fff;

    .link {
      color: $textBlack;
    }

    .link-collection {
      color: $textBlack;
    }

    .link-collection-anim {
      color: $textBlack;
    }
  }

  // filter: blur(2px);
}

.megamenu__wrap {
  padding: 86px 0 120px;
  display: flex;
  gap: 80px;
  padding-left: calc(10% + 84px);
}

.link {
  font-weight: 600;

  // opacity: 1;
  color: $textWhite;
  transition: color $trans ease-in-out;

  &:hover {
    color: $textGray;
  }
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
  color: $textWhite;
}

.megamenu__collections {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 92px);
  gap: 20px 0;
}

.link-collection-anim {
  color: $textWhite;
  transition: color $trans ease-in-out;

  &:hover {
    color: $textGray;
  }
}
</style>
