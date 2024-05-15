<template>
  <main>
    <section class="hero">
      <div class="container">
        <h2 class="h2">Женские сумки</h2>
        <div class="hero-filters">
          <nav class="hero-categories">
            <NuxtLink
              class="hero-filters-link"
              :to="item.slug"
              :key="item.id"
              v-for="item in links"
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
          <ProductCard v-for="item in 16" />
        </div>
      </div>
    </section>

    <SectionsCatalogSeo />
    <Spacer />
  </main>
</template>

<script setup>
const links = [
  { id: 1, slug: "/men/sumki/", title: "Смотреть всё" },
  { id: 2, slug: "/men/sumki/asd", title: "Большие сумки" },
  { id: 3, slug: "/men/sumki/asd", title: "Средние сумки" },
  { id: 4, slug: "/men/sumki/asd", title: "Мини-сумки" },
  { id: 5, slug: "/men/sumki/asd", title: "Футляры" },
  { id: 6, slug: "/men/sumki/asd", title: "Клатчи" },
];
</script>

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
