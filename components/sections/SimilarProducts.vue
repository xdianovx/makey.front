<template>
  <section class="section">
    <div class="container">
      <h2 class="h2">Добавьте товары избранного</h2>

      <div class="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  margin-top: 140px;
}

.products {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
</style>
