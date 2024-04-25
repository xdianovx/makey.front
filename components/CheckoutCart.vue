<template>
  <aside class="checkout">
    <div class="head">
      <h5 class="title">Ваш заказ</h5>
      <div>{{ cartCount }} товара</div>
    </div>

    <ol class="list">
      <li class="list-item" :key="item.id" v-for="item in list">
        <h4 class="list-item__title">{{ item.title }}</h4>
        <div class="list-item__price">{{ item.price }} BYN</div>
      </li>
    </ol>

    <div class="div"></div>

    <div class="stock">
      <div class="stock-item">
        <div class="stock-item__left">
          <div class="stock-item__title">Скидка 7 апреля</div>
          <div class="stock-item__tag">−7%</div>
        </div>
        <div class="stock-item__price">−30 BYN</div>
      </div>
      <div class="stock-item">
        <div class="stock-item__left">
          <div class="stock-item__title">День рождения</div>
          <div class="stock-item__tag">−20%</div>
        </div>
        <div class="stock-item__price">−136 BYN</div>
      </div>
    </div>

    <UiPromocodeInput class="promocode" />

    <div class="bottom">
      <div>Итого</div>
      <div class="bottom-price">
        <div class="old-price">712 BYN</div>
        <div>520 BYN</div>
      </div>
    </div>
  </aside>
</template>

<script setup>
const cartCount = ref(3);
const list = [
  { id: 1, title: "Сумка HEART WINGS", price: 226 },
  { id: 2, title: "Сумка HEART WINGS", price: 226 },
  { id: 3, title: "Сумка EVOLUTION MEDIUM", price: 400 },
];
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
}
.checkout {
  background: #000;
  border-radius: 12px;
  border: 1px solid $bgGray;
  padding: 32px 24px;
  background: #f5f5f5;
  border: 1px solid #e9e9e9;
  position: sticky;

  .div {
    width: 100%;
    height: 1px;
    background: #e9e9e9;
    margin: 24px 8px;
  }
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.list-item {
  font-size: 14px;
  line-height: 150%;
  display: flex;

  justify-content: space-between;
}

.list-item__title {
  font-weight: 400;
}

.stock {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stock-item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 150%;
  color: #7a7a7a;
  align-items: center;
}

.stock-item__left {
  display: flex;
  gap: 8px;
  align-items: center;
}

.stock-item__tag {
  background: #fef0f4;
  border: 1px solid #fbb1c4;
  color: #d50b3e;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 8px;
  line-height: 120%;
}

.stock-item__price {
  color: #d50b3e;
}

.promocode {
  margin-top: 24px;
}

.bottom {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom-price {
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 700;

  .old-price {
    font-weight: 400;
    color: $textGray;
    font-size: 14px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: #7a7a7a;
      top: 50%;
      transform: rotate(-12deg);
      left: 0;
    }
  }
}
</style>
