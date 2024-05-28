<template>
  <div class="checkout-product">
    <div class="image"></div>
    <div class="info">
      <h4 class="title">Сумка HEART WINGS</h4>
      <p class="color">Черный</p>
    </div>

    <div class="price">226 BYN</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.checkout-product {
  display: flex;
}

.image {
  width: 40px;
  height: 40px;
  background: #000;
  margin-right: 10px;
  border-radius: 8px;
}

.title {
  font-size: 14px;
  line-height: 150%;
}

.color {
  color: rgba(#000, 0.5);
  font-size: 12px;
}
.price {
  margin-left: auto;
  color: rgba(#000, 0.5);
  font-size: 14px;
}
</style>
