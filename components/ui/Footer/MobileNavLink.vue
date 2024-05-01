<script setup>
import gsap from 'gsap'
import {onUnmounted, onMounted} from "vue";

const props = defineProps(['data'])
const isOpen = ref(false)

let ctx
let tl
const container = ref()

onMounted(() => {
  ctx = gsap.context((self) => {
    const item = self.selector(".nav-item-mobile");
    const chevron = self.selector('.nav-item-mobile__head svg')
    const content = self.selector('.content')

    tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.2,
      },
    });

    tl.to(content, {
      height: 'auto'
    }).to(chevron, {
      rotate: 180
    }, '<')
  }, container.value)
})

onUnmounted(() => {
  ctx.revert();
});

const toggleContent = () => {
  if (isOpen.value) {
    isOpen.value = false
    tl.reverse()
  } else {
    isOpen.value = true
    tl.play()
  }
}

</script>

<template>
  <div class="nav-item-mobile" ref="container">
    <!--  Head -->
    <div class="nav-item-mobile__head" @click="toggleContent">
      <div class="nav-item-mobile__title">{{ data.title }}</div>
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.0001 14.95C11.8668 14.95 11.7418 14.9291 11.6251 14.8875C11.5084 14.8458 11.4001 14.775 11.3001 14.675L6.70011 10.075C6.51678 9.89163 6.42094 9.66246 6.41261 9.38746C6.40428 9.11246 6.50011 8.87496 6.70011 8.67496C6.88344 8.49163 7.11678 8.39996 7.40011 8.39996C7.68344 8.39996 7.91678 8.49163 8.10011 8.67496L12.0001 12.55L15.9001 8.67496C16.0834 8.49163 16.3126 8.3958 16.5876 8.38746C16.8626 8.37913 17.1001 8.47496 17.3001 8.67496C17.4834 8.8583 17.5751 9.09163 17.5751 9.37496C17.5751 9.6583 17.4834 9.89163 17.3001 10.075L12.7001 14.675C12.6001 14.775 12.4918 14.8458 12.3751 14.8875C12.2584 14.9291 12.1334 14.95 12.0001 14.95Z"
        />
      </svg>
    </div>

    <!-- Content -->
    <div class="content">
      <nav class="content-nav">
        <NuxtLink v-for="link in data.links" class="content-link">{{ link.title }}</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-item-mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .nav-item-mobile {
    display: block;
  }


  .nav-item-mobile__head {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      fill: $bgWhite;
    }
  }

  .nav-item-mobile__title {
    font-size: 16px;
    line-height: 20px;
  }

  .content-nav {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
  }

  .content-link {
    padding: 4px 0;
    font-size: 16px;
    line-height: 150%;
    display: block;
    color: rgba($textWhite, .7);
  }

  .content {
    height: 0;
    overflow: hidden;
  }
}
</style>