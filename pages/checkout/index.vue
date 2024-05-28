<template>
  <main class="gray">
    <section class="top">
      <div class="container">
        <div class="top-wrap">
          <h1 class="title">Оформление заказа</h1>
        </div>
      </div>
    </section>

    <section class="checkout-section">
      <div class="container">
        <div class="checkout-wrap">
          <div class="checkout-options">
            <div class="checkout-option">
              <h4>Способ оплаты</h4>
              <div class="checkout-option-wrap">
                <div>rfhnf</div>
              </div>
            </div>
            <div class="checkout-option">
              <h4>Способ доставки</h4>
              <div class="checkout-option-wrap">
                <div>rfhnf</div>
              </div>
            </div>
          </div>
          <div>
            <CheckoutTotal />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped lang="scss">
.top {
  margin-top: 100px;
}

.top-wrap {
  margin-top: 40px;
  display: flex;
  align-items: center;
}

.title {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px; /* 120.833% */
}

.checkout-section {
  margin-top: 40px;
}

.checkout-wrap {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.checkout-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.checkout-option {
  gap: 16px;
}

.checkout-option-wrap {
  margin-top: 16px;
  background: $bgWhite;
  border-radius: 12px;
  padding: 24px;
}
</style>
