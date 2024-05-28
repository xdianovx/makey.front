<template>
  <main class="cart-page">
    <section class="top">
      <div class="container">
        <h1 class="h1 cart-page-title">
          Корзина<span class="cart-count">{{ cartCount }}</span>
        </h1>
      </div>
    </section>

    <section class="cart-list">
      <div class="container">
        <div class="cart-list__wrap">
          <div class="products">
            <CartProduct />
            <div class="div"></div>
            <CartProduct />
          </div>

          <div class="checkout-aside">
            <CheckoutCart />

            <NuxtLink class="checkout-btn" to="/checkout"
              >Перейти к оформлению</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>

    <SectionsSimilarProducts title="Добавьте товары в избранное" />

    <section style="margin-top: 140px"></section>
  </main>
</template>

<script setup>
const cartCount = ref(3);
</script>

<style lang="scss" scoped>
.top {
  margin-top: 100px;
}

.cart-page-title {
  font-size: 24px;
  line-height: 120%;
}

.cart-count {
  color: $textGray;
  margin-left: 16px;
}

.cart-list {
  margin-top: 32px;
}

.cart-list__wrap {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: flex-start;
  gap: 64px;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 32px;
  .div {
    display: block;
    background: #e6e6e6;
    width: 100%;
    height: 1px;
    margin: 0 8px;
  }
}

.checkout-aside {
  position: sticky;
  top: 78px;
}

.checkout-btn {
  text-align: center;
  background: $bgBLack;
  width: 100%;
  display: block;
  margin-top: 8px;
  border-radius: 12px;
  color: $textWhite;
  padding: 17px;
  line-height: 100%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #434343;
  }
  &:active {
    background: #727272;
  }
}
</style>
