<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

const props = defineProps(["data", "button"]);
</script>

<template>
  <section>
    <swiper :pagination="true" :modules="[Pagination]" class="banner-swiper">
      <swiper-slide v-for="item in data.slider">
        <div class="banner">
          <div class="image">
            <div class="overflow"></div>
            <img :src="item.image" alt="Evolution collection" />
          </div>

          <div class="info">
            <div class="container">
              <h2 class="banner-title">{{ data.title }}</h2>
              <!-- <p class="banner-text">
                3 модели разных сумок, которые объединяет только одно – стиль.
                Каждая модель передает главную идею – эволюцию стиля и
                индивидуальности. Это объединение новейших тенденций в моде с
                классическими элементами, символизируя развитие и трансформацию
                стиля.
              </p> -->

              <NuxtLink
                v-if="button !== false"
                :to="`/collections/teddy`"
                class="banner-btn"
              >
                Смотреть всю коллекцию
              </NuxtLink>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped lang="scss">
.banner {
  position: relative;
}

.image {
  width: 100%;
  position: relative;
  aspect-ratio: 16 /9;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
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

.info {
  position: absolute;
  left: 0;
  bottom: 48px;
  color: $textWhite;
  max-width: 524px;
  width: 100%;
}

.banner-title {
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}

.banner-text {
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}

.banner-btn {
  margin-top: 24px;
  display: inline-block;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  color: $textWhite;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  backdrop-filter: blur(15px);
  background: linear-gradient(
      0deg,
      rgba(128, 128, 128, 0.3) 0%,
      rgba(128, 128, 128, 0.3) 100%
    ),
    rgba(255, 255, 255, 0.2);
  background-blend-mode: luminosity, normal;
}

@media screen and (max-width: 768px) {
  .image {
    aspect-ratio: 4/6;

    img {
      height: 100%;
    }
  }
}
</style>
