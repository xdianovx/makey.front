<template>
  <div class="order-item">
    <div class="order-item__top">
      <h3 class="">Заказ от 5 апреля</h3>
      <div class="order-num">№234532</div>
    </div>

    <div class="order-item__wrap">
      <div class="order-item__wrap-top">
        <OrderStatus status="ready" />
        <div class="order-date">
          <p>Ожидаемая дата доставки:</p>
          <div>10 апреля 2024</div>
        </div>
      </div>

      <div class="order-item__price">
        <div>Стоимость заказа</div>
        <div>{{ 550 }} BYN</div>
      </div>

      <div class="div"></div>

      <div class="order-item__pay-method">
        <div>Оплата через Apple Pay</div>
        <div>pay-status component</div>
      </div>

      <div class="div"></div>

      <div class="order-item__delivery">
        <div class="order-item__delivery-left">
          <div class="order-item__delivery-title">Оплата через Apple Pay</div>
          <div class="order-item__delivery-subtitle">
            Гродно, 246046, улица Дубко 20, кв. 39
          </div>
        </div>

        <div>{{ 550 }} BYN</div>
      </div>

      <div class="div"></div>

      <div class="order-item__product-list">
        <UiProfileOrderedProduct />
        <div class="products-div"></div>
        <UiProfileOrderedProduct />
      </div>

      <div class="div"></div>

      <div class="comments">
        <h3 class="comments-title">Комментарий к заказу</h3>
        <p class="comments-text">Код от домофона — 781</p>
      </div>

      <button class="red-btn">
        <svg
          width="20"
          height="20"
          fill="#FF3B30"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0002 11.1654L5.91683 15.2487C5.76405 15.4015 5.56961 15.4779 5.3335 15.4779C5.09739 15.4779 4.90294 15.4015 4.75016 15.2487C4.59738 15.0959 4.521 14.9015 4.521 14.6654C4.521 14.4293 4.59738 14.2348 4.75016 14.082L8.8335 9.9987L4.75016 5.91536C4.59738 5.76259 4.521 5.56814 4.521 5.33203C4.521 5.09592 4.59738 4.90148 4.75016 4.7487C4.90294 4.59592 5.09739 4.51953 5.3335 4.51953C5.56961 4.51953 5.76405 4.59592 5.91683 4.7487L10.0002 8.83203L14.0835 4.7487C14.2363 4.59592 14.4307 4.51953 14.6668 4.51953C14.9029 4.51953 15.0974 4.59592 15.2502 4.7487C15.4029 4.90148 15.4793 5.09592 15.4793 5.33203C15.4793 5.56814 15.4029 5.76259 15.2502 5.91536L11.1668 9.9987L15.2502 14.082C15.4029 14.2348 15.4793 14.4293 15.4793 14.6654C15.4793 14.9015 15.4029 15.0959 15.2502 15.2487C15.0974 15.4015 14.9029 15.4779 14.6668 15.4779C14.4307 15.4779 14.2363 15.4015 14.0835 15.2487L10.0002 11.1654Z"
          />
        </svg>
        <span>Отменить заказ</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import OrderStatus from "./OrderStatus.vue";
</script>

<style lang="scss" scoped>
.order-item {
}

.order-item__top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.order-item__wrap-top {
  display: flex;
  align-items: center;
  gap: 16px;
}

.order-date {
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-weight: 500;
  }
}

.order-item__wrap {
  margin-top: 16px;
  background: $bgWhite;
  padding: 24px 40px;
  border-radius: 12px;
}

.order-item__price {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.order-item__pay-method {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.order-item__delivery {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-item__delivery-title {
  font-size: 14px;
  line-height: 150%;
}

.order-item__delivery-subtitle {
  font-size: 14px;
  line-height: 150%;
  color: $textGray;
}

.div {
  height: 1px;
  margin-top: 20px;
  background: rgba(#000000, 0.2);
}

.order-item__product-list {
  margin-top: 20px;
}
.products-div {
  margin: 16px 0;
  height: 1px;
  background: rgba(#000000, 0.1);
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
  line-height: 150%;
}

.red-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  color: $textRed;
  padding: 16px;
  font-weight: 600;
  border: 1px solid $bgRed;
  margin-top: 20px;
  width: 100%;
  transition: all $trans ease-in-out;

  &:hover {
    background: rgba(#000000, 0.1);
  }
}
</style>
