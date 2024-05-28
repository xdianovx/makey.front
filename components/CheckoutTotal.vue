<template>
  <div class="item">
    <div class="top">
      <div class="title">Ваш заказ</div>
      <p>3 товара</p>
    </div>

    <div class="products">
      <CheckoutProductItem />
      <CheckoutProductItem />
      <CheckoutProductItem />
    </div>

    <div class="div"></div>
    <div>Выберите способ оплаты</div>
    <div class="div"></div>

    <DeliverItem class="order-setting" />
    <div class="div"></div>

    <div>Заполните контактную информацию</div>
    <div class="div"></div>

    <UiPromocodeInput class="promocode" />
  </div>
</template>

<script setup>
import DeliverItem from "./checkout/DeliverItem.vue";
</script>

<style lang="scss" scoped>
.item {
  background: $bgWhite;
  padding: 24px 40px;
  border-radius: 12px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}

.products {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.div {
  height: 1px;
  margin-top: 24px;
  background: rgba(#000, 0.1);
}

.promocode {
  margin-top: 24px;
}

.order-setting {
  margin-top: 24px;
}
</style>
