<template>
  <div class="product">
    <div class="left">
      <div class="image">
        <img src="@/assets/img/ordered-1.jpg" alt="Название продукта" />
      </div>

      <div class="info">
        <h3 class="title">Сумка Heart Wings</h3>
        <p class="color">Черный</p>
        <p class="sku">115-75-34</p>
      </div>
    </div>

    <div class="price">{{ 226 }} BYN</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.product {
  display: flex;
  align-items: stretch;
}

.left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.price {
  margin-left: auto;
  align-self: center;
}

.image {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 8px;

  img {
    display: block;
    object-fit: cover;
  }
}

.info {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.title {
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
}

.color {
  margin-top: 4px;
  color: rgba(#000, 0.5);
  font-size: 14px;
}

.sku {
  margin-top: auto;
  color: rgba(#000, 0.3);
  font-size: 12px;
  line-height: 150%;
}
</style>
