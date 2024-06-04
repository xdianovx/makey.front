<script setup lang="ts">
import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/vue";
import { useGetProductsStore } from "~/stores/getProducts";

// const data = [
//   { id: 1, title: "", text: "", image: "" },
//   { id: 2, title: "", text: "", image: "" },
//   { id: 3, title: "", text: "", image: "" },
//   { id: 4, title: "", text: "", image: "" },
// ];
</script>

<template>
  <main>
    <section class="top">
      <Swiper :modules="[Pagination]" :pagination="true" class="corp-swiper">
        <SwiperSlide v-for="item in 4">
          <div class="banner">
            <div class="overflow"></div>
            <div class="image">
              <img src="@/assets/img/corp-1.jpg" alt="Заголовок" />
            </div>

            <div class="info">
              <div class="container">
                <div class="info-wrap">
                  <h2 class="banner-title">Корпоративные заказы</h2>
                  <p class="banner-text">
                    Makey предлагает эксклюзивные кожаные изделия ручной работы,
                    которые станут отличным дополнением к вашему корпоративному
                    стилю. Наши мастера готовы создать уникальные аксессуары,
                    которые подчеркнут статус и индивидуальность вашей компании.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section class="top">
      <div class="container">
        <FormsHelpCorp
          title="Хотите сделать корпоративный заказ? Заполните форму и наш менеджер свяжется с Вами"
        />
      </div>
    </section>
    <Spacer />
  </main>
</template>

<style scoped lang="scss">
.top {
  margin-top: 60px;
}

.banner {
  position: relative;
}

.overflow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}

.image {
  aspect-ratio: 4/1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.info {
  position: absolute;
  bottom: 24px;
  left: 0;
  color: $textWhite;
  width: 100%;

  .container {
    position: relative;
  }
}

.info-wrap {
  max-width: 780px;
  width: 100%;
}

.banner-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.banner-text {
  margin-top: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

@media screen and (max-width: 1024px) {
  .top {
    margin-top: 54px;
  }
  .banner-title {
    font-size: 20px;
  }

  .banner-text {
    font-size: 14px;
    margin-top: 8px;
  }

  .image {
    height: 400px;
    img {
      display: block;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    bottom: 48px;
  }
}
</style>
