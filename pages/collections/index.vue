<script setup lang="ts">
import ProductsSortDropdown from "~/components/ui/ProductsSortDropdown.vue";
import CollectionBannerSlider from "~/components/pages/Collections/CollectionBannerSlider.vue";
import SimilarProducts from "~/components/sections/SimilarProducts.vue";

const collections = [
  {
    id: 1,
    title: "LE LIN NEW SEASON",
    slug: "le-lin",
    text: "Le Lin — это сочетание натуральной кожи и экологичного льна, придающее каждому изделию уникальный стиль и текстуру. Эта коллекция, вдохновленная стремлением к эстетике и функциональности, делает акцент на качестве и ответственном подходе к выбору материалов.",
    slider: [
      {
        id: 1,
        slug: "",
        image: "/img/collections/lelin/1.jpg",
      },
      {
        id: 2,
        slug: "",
        image: "/img/collections/lelin/2.jpg",
      },
      {
        id: 3,
        slug: "",
        image: "/img/collections/lelin/3.jpg",
      },
      {
        id: 4,
        slug: "",
        image: "/img/collections/lelin/4.jpg",
      },
      {
        id: 5,
        slug: "",
        image: "/img/collections/lelin/5.jpg",
      },
      {
        id: 6,
        slug: "",
        image: "/img/collections/lelin/6.jpg",
      },
      {
        id: 7,
        slug: "",
        image: "/img/collections/lelin/7.jpg",
      },
      {
        id: 8,
        slug: "",
        image: "/img/collections/lelin/8.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "EVOLUTION COLLECTION",
    slug: "le-lin",
    text: "EVOLUTION — коллекция, отражающая атмосферу города. Благодаря строгому и минималистичному дизайну, она открывает простор для творчества, позволяя создавать бесконечное множество вариантов стилизации. В коллекции представлены 3 модели: SMALL, MEDIUM и LARGE, что даёт возможность каждому клиенту выбрать сумку, соответствующую его стилю жизни.",
    slider: [
      {
        id: 1,
        slug: "",
        image: "/img/collections/evolution/1.jpg",
      },
      {
        id: 2,
        slug: "",
        image: "/img/collections/evolution/2.jpg",
      },
      {
        id: 3,
        slug: "",
        image: "/img/collections/evolution/3.jpg",
      },
      {
        id: 4,
        slug: "",
        image: "/img/collections/evolution/4.jpg",
      },
      {
        id: 5,
        slug: "",
        image: "/img/collections/evolution/5.jpg",
      },
      {
        id: 6,
        slug: "",
        image: "/img/collections/evolution/6.jpg",
      },
      {
        id: 7,
        slug: "",
        image: "/img/collections/evolution/7.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "CARGO BAG",
    slug: "heart-shopper",
    slider: [
      {
        id: 1,
        slug: "",
        image: "/img/collections/cargo/1.jpg",
      },
      {
        id: 2,
        slug: "",
        image: "/img/collections/cargo/2.jpg",
      },
      {
        id: 3,
        slug: "",
        image: "/img/collections/cargo/3.jpg",
      },
      {
        id: 4,
        slug: "",
        image: "/img/collections/cargo/4.jpg",
      },
      {
        id: 5,
        slug: "",
        image: "/img/collections/cargo/5.jpg",
      },
      {
        id: 6,
        slug: "",
        image: "/img/collections/cargo/6.jpg",
      },
      {
        id: 7,
        slug: "",
        image: "/img/collections/cargo/7.jpg",
      },
      {
        id: 8,
        slug: "",
        image: "/img/collections/cargo/8.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "HEART SHOPPER",
    slug: "evolution",
    slider: [
      {
        id: 1,
        slug: "",
        image: "/img/collections/heart/1.jpg",
      },
      {
        id: 2,
        slug: "",
        image: "/img/collections/heart/2.jpg",
      },
      {
        id: 3,
        slug: "",
        image: "/img/collections/heart/3.jpg",
      },
      {
        id: 4,
        slug: "",
        image: "/img/collections/heart/4.jpg",
      },
      {
        id: 5,
        slug: "",
        image: "/img/collections/heart/5.jpg",
      },
      {
        id: 6,
        slug: "",
        image: "/img/collections/heart/6.jpg",
      },
      {
        id: 7,
        slug: "",
        image: "/img/collections/heart/7.jpg",
      },
    ],
  },
  // { id: 4, title: "Trio", slug: "trio" },
  // { id: 5, title: "Teddy", slug: "teddy" },
  // { id: 6, title: "Turtle", slug: "turtle" },
  // { id: 7, title: "Tie", slug: "tie" },
  // { id: 8, title: "Bubbles", slug: "bubbles" },
  // { id: 9, title: "Texture", slug: "texture" },
  // { id: 10, title: "Fleur", slug: "fleur" },
  // { id: 11, title: "Classic", slug: "classic" },
  // { id: 12, title: "Waves", slug: "waves" },
  // { id: 13, title: "Key", slug: "key" },
  // { id: 14, title: "Royal", slug: "royal" },
  // { id: 15, title: "Geometry", slug: "geometry" },
  // { id: 16, title: "Venice", slug: "venice" },
  // { id: 17, title: "City", slug: "city" },
];
</script>

<template>
  <main>
    <section class="top">
      <div class="container">
        <h1 class="title">Коллекции</h1>
        <div class="top-wrap">
          <div class="collections-wrap">
            <NuxtLink
              v-for="item in collections"
              :to="`/collections/${item.slug}`"
              :key="item.id"
              >{{ item.title }}
            </NuxtLink>
          </div>

          <div class="top-filters">
            <ProductsSortDropdown />
            <div class="div"></div>
            <UiProductFilterBtn />
          </div>
        </div>
      </div>
    </section>

    <section class="collection-item" v-for="item in collections">
      <CollectionBannerSlider :data="item" :key="item.id" />
      <SimilarProducts class="collection-item-products" />
    </section>

    <SectionsCatalogSeo />

    <Spacer />

    <button class="mobile-filter-btn">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8337 13.5C11.1337 13.5 10.542 13.2583 10.0587 12.775C9.57533 12.2917 9.33366 11.7 9.33366 11C9.33366 10.3 9.57533 9.70833 10.0587 9.225C10.542 8.74167 11.1337 8.5 11.8337 8.5C12.5337 8.5 13.1253 8.74167 13.6087 9.225C14.092 9.70833 14.3337 10.3 14.3337 11C14.3337 11.7 14.092 12.2917 13.6087 12.775C13.1253 13.2583 12.5337 13.5 11.8337 13.5ZM11.8337 12.1667C12.1559 12.1667 12.4309 12.0528 12.6587 11.825C12.8864 11.5972 13.0003 11.3222 13.0003 11C13.0003 10.6778 12.8864 10.4028 12.6587 10.175C12.4309 9.94722 12.1559 9.83333 11.8337 9.83333C11.5114 9.83333 11.2364 9.94722 11.0087 10.175C10.7809 10.4028 10.667 10.6778 10.667 11C10.667 11.3222 10.7809 11.5972 11.0087 11.825C11.2364 12.0528 11.5114 12.1667 11.8337 12.1667ZM7.33366 11.6667H3.33366C3.14477 11.6667 2.98644 11.6028 2.85866 11.475C2.73088 11.3472 2.66699 11.1889 2.66699 11C2.66699 10.8111 2.73088 10.6528 2.85866 10.525C2.98644 10.3972 3.14477 10.3333 3.33366 10.3333H7.33366C7.52255 10.3333 7.68088 10.3972 7.80866 10.525C7.93644 10.6528 8.00033 10.8111 8.00033 11C8.00033 11.1889 7.93644 11.3472 7.80866 11.475C7.68088 11.6028 7.52255 11.6667 7.33366 11.6667ZM4.16699 7.5C3.46699 7.5 2.87533 7.25833 2.39199 6.775C1.90866 6.29167 1.66699 5.7 1.66699 5C1.66699 4.3 1.90866 3.70833 2.39199 3.225C2.87533 2.74167 3.46699 2.5 4.16699 2.5C4.86699 2.5 5.45866 2.74167 5.94199 3.225C6.42533 3.70833 6.66699 4.3 6.66699 5C6.66699 5.7 6.42533 6.29167 5.94199 6.775C5.45866 7.25833 4.86699 7.5 4.16699 7.5ZM4.16699 6.16667C4.48921 6.16667 4.76421 6.05278 4.99199 5.825C5.21977 5.59722 5.33366 5.32222 5.33366 5C5.33366 4.67778 5.21977 4.40278 4.99199 4.175C4.76421 3.94722 4.48921 3.83333 4.16699 3.83333C3.84477 3.83333 3.56977 3.94722 3.34199 4.175C3.11421 4.40278 3.00033 4.67778 3.00033 5C3.00033 5.32222 3.11421 5.59722 3.34199 5.825C3.56977 6.05278 3.84477 6.16667 4.16699 6.16667ZM12.667 5.66667H8.66699C8.4781 5.66667 8.31977 5.60278 8.19199 5.475C8.06421 5.34722 8.00033 5.18889 8.00033 5C8.00033 4.81111 8.06421 4.65278 8.19199 4.525C8.31977 4.39722 8.4781 4.33333 8.66699 4.33333H12.667C12.8559 4.33333 13.0142 4.39722 13.142 4.525C13.2698 4.65278 13.3337 4.81111 13.3337 5C13.3337 5.18889 13.2698 5.34722 13.142 5.475C13.0142 5.60278 12.8559 5.66667 12.667 5.66667Z"
        />
      </svg>
      <p>Фильтры</p>
    </button>
  </main>
</template>

<style scoped lang="scss">
.top {
  margin-top: 100px;
}

.title {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
}

.top-wrap {
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  justify-content: space-between;
}

.top-filters {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-shrink: 0;
}

.div {
  background: rgba(#000, 0.1);
  height: 24px;
  width: 1px;
}

.collections-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 28px;
  margin-top: 8px;
}

.collection-item {
  margin-top: 32px;
  margin-bottom: 80px;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.collection-item-products {
  margin-top: 0;
}

.mobile-filter-btn {
  display: none;
}

@media screen and (max-width: 1200px) {
  .top-wrap {
    flex-direction: column;
    gap: 8px;
  }

  .top-filters {
    justify-content: space-between;
    width: 100%;
  }

  .div {
    display: none;
  }

  .collections-wrap {
    //overflow-x: scroll;
    //white-space: nowrap;
    //-ms-overflow-style: none;
    //flex-wrap: nowrap;
    //scrollbar-width: none;
  }
}

@media screen and (max-width: 768px) {
  .top-filters {
    margin-top: 24px;
  }
  .mobile-filter-btn {
    display: flex;
    align-items: center;
    position: fixed;
    gap: 8px;
    background: $bgBLack;
    bottom: 48px;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    border-radius: 1000px;
    font-weight: 600;
    font-size: 16px;
    padding: 18px 28px;
    line-height: 20px;
  }
}
</style>
