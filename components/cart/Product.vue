<template>
  <div class="product">
    <div class="image">
      <img src="/img/product/1.jpg" alt="Product Title" />
    </div>
    <div class="info">
      <div class="info-top">
        <h3>Сумка HEART WINGS</h3>
        <UiLinkArrow link="/">Страница товара</UiLinkArrow>
      </div>

      <div class="sku">115-07-01</div>

      <UiColorPicker class="picker" />

      <UiCounter class="counter" />
      <div class="bottom">
        <p>226 BYN</p>
        <UiDeleteBtn />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
  align-items: flex-start;
}

.info-top {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.image {
  background: #f2f2f2;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 6 / 7;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.info {
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.picker {
  margin-top: 32px;
}

.sku {
  margin-top: 8px;
  font-size: 14px;
  color: $textGray;
}

.counter {
  margin-top: 48px;
}

.bottom {
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
}
</style>
