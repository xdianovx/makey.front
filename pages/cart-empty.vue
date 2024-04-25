<template>
  <main class="cart-page">
    <section class="cart-empty">
      <div class="container">
        <div class="cart-empty__wrap">
          <h1 class="cart-empty__title">
            В вашей корзине пока <br />
            ничего нет
          </h1>
          <nav class="cart-empty__links">
            <NuxtLink to="/">Акции</NuxtLink>
            <NuxtLink to="/">Новинки</NuxtLink>
            <NuxtLink to="/">Для неё</NuxtLink>
            <NuxtLink to="/">Для него</NuxtLink>
            <NuxtLink to="/">Сумки</NuxtLink>
            <NuxtLink to="/">Ремни</NuxtLink>
            <NuxtLink to="/">Кошельки</NuxtLink>
          </nav>
        </div>
      </div>
    </section>

    <SectionsSimilarProducts />

    <section style="margin-top: 140px"></section>
  </main>
</template>

<script setup>
const cartCount = ref(3);
</script>

<style lang="scss" scoped>
.cart-empty {
  padding: 160px 0;
}

.cart-empty__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.cart-empty__title {
  font-size: 24px;
  line-height: 130%;
  text-align: center;
}

.cart-empty__links {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
