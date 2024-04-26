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
            <NuxtLink class="cart-empty__link" to="/">Акции</NuxtLink>
            <NuxtLink class="cart-empty__link" to="/">Новинки</NuxtLink>
            <NuxtLink class="cart-empty__link" to="/">Для неё</NuxtLink>
            <NuxtLink class="cart-empty__link" to="/">Для него</NuxtLink>
            <NuxtLink class="cart-empty__link" to="/">Сумки</NuxtLink>
            <NuxtLink class="cart-empty__link" to="/">Ремни</NuxtLink>
            <NuxtLink class="cart-empty__link" to="/">Кошельки</NuxtLink>
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
  padding: 160px 0 0 0;
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

.cart-empty__link {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: $textBlack;
    left: 0;
    bottom: 0;
  }
}
</style>
