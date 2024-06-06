<script setup>
const props = defineProps(["data"]);
import { Navigation } from "swiper/modules";

const prev = ref(null);
const next = ref(null);

const activeOption = ref(0);

const setActiveOption = (i) => {
  activeOption.value = i;
};
</script>

<template>
  <div class="card">
    <div class="new-tag">NEW</div>

    <button class="like-btn">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#a9a9a9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20.3254C11.7667 20.3254 11.5292 20.2837 11.2875 20.2004C11.0458 20.1171 10.8333 19.9837 10.65 19.8004L8.925 18.2254C7.15833 16.6087 5.5625 15.0046 4.1375 13.4129C2.7125 11.8212 2 10.0671 2 8.15039C2 6.58372 2.525 5.27539 3.575 4.22539C4.625 3.17539 5.93333 2.65039 7.5 2.65039C8.38333 2.65039 9.21667 2.83789 10 3.21289C10.7833 3.58789 11.45 4.10039 12 4.75039C12.55 4.10039 13.2167 3.58789 14 3.21289C14.7833 2.83789 15.6167 2.65039 16.5 2.65039C18.0667 2.65039 19.375 3.17539 20.425 4.22539C21.475 5.27539 22 6.58372 22 8.15039C22 10.0671 21.2917 11.8254 19.875 13.4254C18.4583 15.0254 16.85 16.6337 15.05 18.2504L13.35 19.8004C13.1667 19.9837 12.9542 20.1171 12.7125 20.2004C12.4708 20.2837 12.2333 20.3254 12 20.3254ZM11.05 6.75039C10.5667 6.06706 10.05 5.54622 9.5 5.18789C8.95 4.82956 8.28333 4.65039 7.5 4.65039C6.5 4.65039 5.66667 4.98372 5 5.65039C4.33333 6.31706 4 7.15039 4 8.15039C4 9.01706 4.30833 9.93789 4.925 10.9129C5.54167 11.8879 6.27917 12.8337 7.1375 13.7504C7.99583 14.6671 8.87917 15.5254 9.7875 16.3254C10.6958 17.1254 11.4333 17.7837 12 18.3004C12.5667 17.7837 13.3042 17.1254 14.2125 16.3254C15.1208 15.5254 16.0042 14.6671 16.8625 13.7504C17.7208 12.8337 18.4583 11.8879 19.075 10.9129C19.6917 9.93789 20 9.01706 20 8.15039C20 7.15039 19.6667 6.31706 19 5.65039C18.3333 4.98372 17.5 4.65039 16.5 4.65039C15.7167 4.65039 15.05 4.82956 14.5 5.18789C13.95 5.54622 13.4333 6.06706 12.95 6.75039C12.8333 6.91706 12.6917 7.04206 12.525 7.12539C12.3583 7.20872 12.1833 7.25039 12 7.25039C11.8167 7.25039 11.6417 7.20872 11.475 7.12539C11.3083 7.04206 11.1667 6.91706 11.05 6.75039Z"
        />
      </svg>
    </button>

    <div class="image">
      <Swiper
        class="swiper"
        :modules="[Navigation]"
        :speed="400"
        :spaceBetween="20"
        :loop="true"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
      >
        <SwiperSlide
          class="product-image-slide"
          v-for="img in data.product_options[activeOption]?.product_files"
        >
          <ClientOnly>
            <NuxtLink
              class="product-slide-link"
              :to="`/product/${data.product_options[activeOption]?.slug}`"
            >
              <img
                :src="img.file"
                v-if="useGetFileExtention(img.file) == 'webp'"
                alt=""
              />

              <video v-else playsinline autoplay loop muted>
                <source :src="img.file" type="video/mp4" />
              </video>
            </NuxtLink>
          </ClientOnly>
        </SwiperSlide>
      </Swiper>

      <div class="colors">
        <div
          class="color-item"
          @click="setActiveOption(idx)"
          :class="{ active: idx === activeOption }"
          :style="{ background: color.colors[0]?.code }"
          v-for="(color, idx) in data.product_options"
        ></div>
      </div>

      <button class="btn-prev" ref="prev">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.69997 8.00105L10.6 12.9011C10.7666 13.0677 10.8472 13.2622 10.8416 13.4844C10.8361 13.7066 10.75 13.9011 10.5833 14.0677C10.4166 14.2344 10.2222 14.3177 9.99997 14.3177C9.77774 14.3177 9.5833 14.2344 9.41663 14.0677L4.2833 8.95105C4.14997 8.81772 4.04997 8.66772 3.9833 8.50105C3.91663 8.33438 3.8833 8.16772 3.8833 8.00105C3.8833 7.83438 3.91663 7.66772 3.9833 7.50105C4.04997 7.33438 4.14997 7.18438 4.2833 7.05105L9.41663 1.91772C9.5833 1.75105 9.78052 1.67049 10.0083 1.67605C10.2361 1.68161 10.4333 1.76772 10.6 1.93438C10.7666 2.10105 10.85 2.29549 10.85 2.51772C10.85 2.73994 10.7666 2.93438 10.6 3.10105L5.69997 8.00105Z"
          />
        </svg>
      </button>
      <button class="btn-next" ref="next">
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

    <div class="info">
      <h3 class="title">{{ data?.title }}</h3>
      <div class="price">
        {{ data?.product_options[activeOption]?.price }} BYN
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  &:hover {
    .image img {
      transform: scale(1.05);
    }

    .colors {
      bottom: 10px;
    }

    .btn-prev {
      left: 0;
    }
    .btn-next {
      right: 0;
    }
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.product-slide-link {
  display: block;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
}

.btn-prev {
  position: absolute;
  width: 32px;
  height: 100%;
  display: flex;
  left: -32px;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}
.btn-next {
  position: absolute;
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  right: -32px;
  transition: all 0.2s ease-in-out;
}

.colors {
  position: absolute;
  transition: all 0.2s ease-in-out;
  left: 10px;
  bottom: -32px;
  display: flex;
  gap: 10px;
  z-index: 2;
}

.color-item {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    border-radius: 100px;
    width: 16px;
    height: 16px;
    border: 2px solid #c2c2c2;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  &.active {
    &:before {
      content: "";
      opacity: 1;
      position: absolute;
      border-radius: 100px;
      width: 16px;
      height: 16px;
      border: 2px solid #c2c2c2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.black {
    background: #000;
  }
  &.red {
    background: red;
  }
  &.gray {
    background: gray;
  }
}

.like-btn {
  position: absolute;
  right: 4px;
  top: 4px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: transparent;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  svg {
    display: block;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background: #e6e6e6;

    svg {
      fill: #ff2d55;
    }
  }
}

.new-tag {
  position: absolute;
  top: 8px;
  left: 8px;
  background: $bgWhite;
  text-transform: uppercase;
  color: $textBlack;
  z-index: 1;
  padding: 6px 8px;
  line-height: 100%;
  border-radius: 4px;
  font-size: 12px;
}
.image {
  position: relative;
  aspect-ratio: 6/7;
  background: #f2f2f2;
  border-radius: 12px;
  overflow: hidden;

  img {
    transition: all 0.3s ease-in-out;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.title {
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
}

.price {
  font-size: 14px;
  line-height: 150%;
  margin-top: 8px;
}
</style>
