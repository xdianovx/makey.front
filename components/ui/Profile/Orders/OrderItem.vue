<template>
  <div class="item">
    <div class="top">
      <div class="top-left">
        <p class="title">Заказ от 12.05.2024</p>
        <div class="sku">№234532</div>
      </div>

      <UiProfileOrderStatus status="null" />
    </div>

    <div class="info">
      <div class="price">
        <div class="price-title">Стоимость заказа</div>
        <div class="price-sum">{{ 452 }} BYN</div>
      </div>

      <div class="div"></div>

      <div class="pay-type">
        <p>Оплата через Apple Pay</p>
      </div>

      <div class="div"></div>

      <div class="delivery">
        <div class="delivery-left">
          <div class="delivery-type">Доставка в отделение «Белпочты»</div>
          <p class="delivery-address">Гродно, 246046, улица Дубко 20, кв. 39</p>
        </div>
        <div class="delivery-cost">{{ 0 }} BYN</div>
      </div>

      <div class="div"></div>

      <div class="products">
        <UiProfileOrderedProduct />
        <div class="products-div"></div>
        <UiProfileOrderedProduct />
      </div>

      <div class="div"></div>

      <div class="comments">
        <h3 class="comments-title">Комментарий к заказу</h3>
        <p class="comments-text">Код от домофона — 781</p>
      </div>

      <button class="btn-review">Оставить отзыв</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.item {
  background: $bgWhite;
  padding: 24px 49px;
  border-radius: 12px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.title {
  font-weight: 600;
  line-height: 22px;
}

.sku {
  margin-top: 8px;
  color: rgba(#000, 0.5);
}

.info {
  margin-top: 32px;
}

.div {
  margin: 20px 0;
  height: 1px;
  background: rgba(#000, 0.2);
}

.products-div {
  background: rgba(#000, 0.1);
  height: 1px;
}

.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  line-height: 20px;
}

.delivery {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.delivery-type {
  font-size: 14px;
}
.delivery-address {
  margin-top: 4px;
  font-size: 14px;
  color: rgba(#000, 0.5);
}

.products {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comments {
  margin-top: 20px;
}

.comments-title {
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
}

.comments-text {
  color: rgba(#000000, 0.5);
  font-size: 14px;
  margin-top: 4px;
}

.btn-review {
  color: $textWhite;
  background: $bgBLack;
  padding: 15px;
  display: block;
  width: 100%;
  margin-top: 48px;
  border-radius: 8px;
}
</style>
