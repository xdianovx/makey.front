<script lang="ts" setup>
import ApplePayBtn from "~/components/ui/ApplePayBtn.vue";
import { useProductInfoOpen } from "~/stores/productInfo";

const infoStore = useProductInfoOpen();
</script>

<template>
  <main>
    <section class="section">
      <ProductInfo />

      <div class="images">
        <a
          :href="`/img/product-page/${idx + 1}.jpg`"
          data-fancybox="a"
          v-for="(item, idx) in 6"
        >
          <img :src="`/img/product-page/${idx + 1}.jpg`" alt="" />
        </a>
      </div>

      <div class="info">
        <div class="info-wrap">
          <UiBreadcrumbs />

          <div class="info__title">
            <h1 class="product-title">Сумка Evolution Large</h1>
          </div>

          <div class="price">260 BYN</div>

          <div class="color">
            <p><b>Цвет:</b> черный</p>
            <div class="color-picker__wrap">
              <div class="color-picker --brown"></div>
              <div class="color-picker --black"></div>
            </div>
          </div>

          <div class="info-btns">
            <button class="favorite-btn">Добавить в корзину</button>
            <ApplePayBtn class="apple-btn" />
          </div>

          <div class="div"></div>

          <div class="info-links">
            <button class="info-link">
              <p>Наличие в магазинах</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
                />
              </svg>
            </button>

            <button class="info-link" @click="infoStore.open">
              <p>Описание и детали</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
                />
              </svg>
            </button>

            <button class="info-link">
              <p>Отзвы <span>3</span></p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="div page-div"></div>
    </div>

    <SectionsSimilarProducts title="Смотрите также" />

    <Spacer />
  </main>
</template>

<style scoped lang="scss">
.section {
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  // gap: 16px;
  padding-right: 48px;
  position: relative;
}

.screen {
  height: 100%;
}

.images {
  width: 49%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    display: block;
    width: 100%;
    img {
      width: 100%;
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 49%;
  justify-content: center;
  height: calc(100vh - 100px);
  position: sticky;
  top: 104px;
  right: 0;
}

.info-wrap {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 440px;
  width: 100%;
}

.info__title {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.product-title {
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
}

.price {
  margin-top: 12px;
}

.color {
  margin-top: 32px;
}

.info-btns {
  width: 100%;
  margin-top: 56px;
}

.apple-btn {
  width: 100%;
  margin-top: 8px;
}

.favorite-btn {
  border-radius: 12px;
  color: $textWhite;
  background: $bgBLack;
  width: 100%;
  padding: 15px 32px;
}

.div {
  height: 1px;
  // width: 100%;
  background: rgba($bgBLack, 0.1);
  margin: 28px 8px;

  &.page-div {
    margin-top: 80px;
  }
}

.info-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-link {
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;

  span {
    color: rgba($textBlack, 0.3);
  }
}
</style>
