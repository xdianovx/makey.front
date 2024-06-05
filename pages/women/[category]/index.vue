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

await getProduct("woman", pageData.value.id);
</script>

<template>
  <main>
    <section class="hero">
      <div class="container">
        <h2 class="h2">Женские {{ pageData.title }}</h2>

        <div class="hero-filters">
          <nav class="hero-categories">
            <NuxtLink
              class="hero-filters-link"
              :to="`/women/${item.slug}`"
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
</style>
