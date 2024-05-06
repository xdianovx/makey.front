<script setup>
import { useProductInfoOpen } from "~/stores/productInfo";

let ctx;
let tl;

const materials = [
  {
    id: 1,
    title: "Материал",
    material: "Кожа",
  },
  {
    id: 2,
    title: "Подкладка",
    material: "Полиэстер",
  },
  {
    id: 3,
    title: "Цвет",
    material: "Коричневый",
  },
  {
    id: 4,
    title: "Застежка",
    material: "Молния",
  },
  {
    id: 5,
    title: "Отделений",
    material: "3",
  },
  {
    id: 6,
    title: "Наплечный ремень",
    material: "Съемный",
  },
  {
    id: 7,
    title: "Длинна наплечного ремня",
    material: "Регулируемая",
  },
  {
    id: 8,
    title: "Вес",
    material: "650 г",
  },
  {
    id: 9,
    title: "Тип",
    material: "Большая сумка",
  },
  {
    id: 10,
    title: "Артикул",
    material: "115-07-59",
  },
];

const overflow = ref(null);
const aside = ref(null);
const store = useProductInfoOpen();
const { isOpen } = storeToRefs(store);

const { $gsap: gsap } = useNuxtApp();

onMounted(() => {
  ctx = gsap.context((self) => {
    tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power2.inOut",
        duration: 0.2,
      },
    });

    tl.to(overflow, {
      right: 0,
    });
  }, overflow.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div
    class="overflow"
    :class="{ active: isOpen }"
    @click="store.close"
    ref="overflow"
  ></div>
  <aside class="info" ref="aside" :class="{ active: isOpen }">
    <div class="info-wrap">
      <div class="aside__top">
        <h4 class="aside__title">Описание и детали</h4>
        <button class="aside__close" @click="store.close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9998 13.3969L7.0998 18.2969C6.91647 18.4802 6.68314 18.5719 6.3998 18.5719C6.11647 18.5719 5.88314 18.4802 5.6998 18.2969C5.51647 18.1135 5.4248 17.8802 5.4248 17.5969C5.4248 17.3135 5.51647 17.0802 5.6998 16.8969L10.5998 11.9969L5.6998 7.09688C5.51647 6.91354 5.4248 6.68021 5.4248 6.39688C5.4248 6.11354 5.51647 5.88021 5.6998 5.69688C5.88314 5.51354 6.11647 5.42188 6.3998 5.42188C6.68314 5.42188 6.91647 5.51354 7.0998 5.69688L11.9998 10.5969L16.8998 5.69688C17.0831 5.51354 17.3165 5.42188 17.5998 5.42188C17.8831 5.42188 18.1165 5.51354 18.2998 5.69688C18.4831 5.88021 18.5748 6.11354 18.5748 6.39688C18.5748 6.68021 18.4831 6.91354 18.2998 7.09688L13.3998 11.9969L18.2998 16.8969C18.4831 17.0802 18.5748 17.3135 18.5748 17.5969C18.5748 17.8802 18.4831 18.1135 18.2998 18.2969C18.1165 18.4802 17.8831 18.5719 17.5998 18.5719C17.3165 18.5719 17.0831 18.4802 16.8998 18.2969L11.9998 13.3969Z"
            />
          </svg>
        </button>
      </div>

      <p class="aside__text">
        Шикарная сумка EVOLUTION LARGE в классическом коричневом цвете от бренда
        Makey - это идеальный выбор для стильных и деловых людей, которые ценят
        качество и функциональность. Эта сумка сочетает в себе элегантный дизайн
        и практичность, делая ее незаменимым аксессуаром для повседневного
        использования. Изготовленная из натуральной кожи, сумка EVOLUTION LARGE
        обладает высокой степенью надежности и долговечности. Благодаря своим
        размерам и удобной конструкции, она поможет вам организовать все
        необходимые вещи и документы так, чтобы они всегда были под рукой.
        Особенности этой сумки включают в себя удобные ручки для переноски, а
        также регулируемый плечевой ремень, который позволит вам комфортно
        носить сумку на плече. Внутреннее пространство сумки разделено на
        несколько отделений, что обеспечит удобную организацию ваших вещей.
        EVOLUTION LARGE идеально подойдет как для работы, так и для повседневных
        прогулок или деловых встреч. Ее стильный дизайн и практичность делают ее
        универсальным аксессуаром, который дополнит любой образ и подчеркнет ваш
        безупречный вкус.
      </p>

      <div class="div"></div>

      <UiHandCrafted />

      <div class="dimentions">
        <div class="dimentions-item">
          <p>12 см</p>
          <span>(Высота)</span>
        </div>

        <div class="dimentions-div">
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.04545 8.09091L0.636364 1.68182L1.5 0.818182L7.90909 7.22727L7.04545 8.09091ZM1.5 8.09091L0.636364 7.22727L7.04545 0.818182L7.90909 1.68182L1.5 8.09091Z"
            />
          </svg>
        </div>

        <div class="dimentions-item">
          <p>43 см</p>
          <span>(Ширина)</span>
        </div>

        <div class="dimentions-div">x</div>

        <div class="dimentions-item">
          <p>30 см</p>
          <span>(Глубина)</span>
        </div>
      </div>

      <ul class="materials">
        <li class="material-item" v-for="item in materials" :key="item.id">
          <p class="material-title">{{ item.title }}</p>
          <p class="material-value">{{ item.material }}</p>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.overflow {
  position: fixed;
  background: rgba(#000000, 0.2);
  width: 100%;
  height: 120vh;
  right: -100%;
  top: -100px;
  z-index: 50;
  transition: all 0.3s ease-in-out;

  &.active {
    right: 0;
  }
}

.info {
  position: fixed;
  height: 100vh;
  right: -100%;
  transition: all 0.3s ease-in-out;
  transition-delay: 50ms;
  top: 0;
  bottom: 0;
  z-index: 51;
  padding: 40px 8px 40px 80px;
  background: $bgWhite;
  overflow-y: initial !important;
  max-width: 760px;
  width: 100%;
  &.active {
    right: 0;
  }
}

.info-wrap {
  overflow-y: auto;
  height: 100%;
  padding-right: 68px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(#000000, 0.3);
    border-radius: 8px;
  }
}
.aside__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.aside__text {
  margin-top: 32px;
  font-size: 14px;
  line-height: 150%;
}

.div {
  margin: 24px 8px;
  height: 1px;
  background: rgba(#000, 0.1);
}

.dimentions {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  border-radius: 12px;
  background: #f5f5f5;
}

.dimentions-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;

  p {
    font-size: 16px;
    line-height: 150%;
  }

  span {
    font-size: 12px;
    line-height: 150%;
    color: rgba(#000000, 0.3);
  }
}

.dimentions-div {
  font-size: 16px;
  line-height: 20px;
}

.materials {
  margin-top: 16px;
}

.material-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 4px;
}

.material-title {
  font-weight: 600;
  font-size: 14px;
}

.material-value {
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .info {
    padding: 40px 8px 40px 16px;
  }

  .info-wrap {
    padding-right: 16px;
  }
}
</style>
