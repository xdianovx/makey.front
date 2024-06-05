<script setup>
const { getByCategory: getProduct } = useGetProductsStore();
const { products } = storeToRefs(useGetProductsStore());
const { all: getCategories } = useCategoriesStore();
const { categories } = storeToRefs(useCategoriesStore());
const pageData = ref();

const route = useRoute();
const slug = route.params.category;
await getCategories();

// pageData.value = categories.value.filter((i) => i == slug);
pageData.value = categories.value.filter((i) => i.slug == slug)[0];

await getProduct("man", pageData.value.id);
</script>

<template>
  <main>
    <section class="hero">
      <div class="container">
        <h2 class="h2">Мужские {{ pageData.title }}</h2>

        <div class="hero-filters">
          <nav class="hero-categories">
            <NuxtLink
              class="hero-filters-link"
              :to="`/men/${item.slug}`"
              active-class="active"
              :key="item.id"
              v-for="item in categories"
              >{{ item.title }}
            </NuxtLink>
          </nav>
          <div class="hero-btns">
            <UiProductsSortDropdown />
            <div class="div"></div>
            <UiProductFilterBtn />
          </div>
        </div>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <div class="products">
          <ProductCard1 v-for="item in products" :key="item.id" :data="item" />
        </div>

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
      </div>
    </section>

    <SectionsCatalogSeo />
    <Spacer />
  </main>
</template>

<style lang="scss" scoped>
.hero {
  margin-top: 100px;
}

.hero-filters {
  margin-top: 24px;
  display: flex;
  align-self: start;
}

.hero-categories {
  display: flex;
  align-items: center;
  gap: 28px;
}

.hero-filters-link {
  line-height: 150%;
  cursor: pointer;
  font-size: 16px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 1px;
    right: 0;
    transition: width 0.3s ease-in-out;
    left: auto;
    background: $bgBLack;
  }

  &:hover {
    &::before {
      width: 100%;
      left: 0;
      right: auto;
    }
  }

  &.active {
    &::before {
      width: 100%;
    }
  }
}

.hero-btns {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 16px;
  flex-shrink: 0;
}

.div {
  background: rgba($bgBLack, 0.1);
  width: 1px;
  height: 24px;
}

.products-section {
  margin-top: 48px;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 16px;
}

.mobile-filter-btn {
  display: none;
}

@media screen and (max-width: 1200px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 16px;
  }
}

@media screen and (max-width: 1024px) {
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
  .products {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 16px;
  }

  .hero-btns {
    display: none;
  }

  .h2 {
    font-size: 20px;
  }

  .hero {
    margin-top: 80px;
  }

  .hero-filters {
    margin-top: 16px;
  }

  .products-section {
    margin-top: 24px;
  }

  .hero-categories {
    background: #fff;
    display: flex;
    gap: 28px;
    overflow-x: scroll;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    position: relative;
  }
}
</style>
