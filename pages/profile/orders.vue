<template>
  <main class="profile-main">
    <section class="top">
      <div class="container">
        <UiProfileBackLink />
      </div>
    </section>

    <section class="search">
      <div class="container">
        <h2 class="title">
          История заказов <span>({{ 2 }})</span>
        </h2>

        <div class="search-form">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill-opacity=".5"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
            />
          </svg>
          <input type="text" placeholder="Найти заказ" />
        </div>
      </div>
    </section>

    <section class="orders">
      <div class="container">
        <div class="orders-wrap">
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </section>

    <Spacer />
  </main>
</template>

<script setup>
import OrderItem from "~/components/ui/Profile/Orders/OrderItem.vue";
</script>

<style lang="scss" scoped>
.profile-main {
  background: #f5f5f5;
}
.top {
  margin-top: 100px;
}

.orders-wrap {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.search {
  margin-top: 16px;
}

.title {
  font-size: 20px;
  line-height: 150%;
  span {
    color: rgba(#000000, 0.3);
  }
}

.search-form {
  margin-top: 16px;
  padding: 0 16px;
  border-radius: 12px;
  background: $bgWhite;
  gap: 8px;
  border: 1px solid rgba(#000, 0.1);
  display: flex;
  align-items: center;
  input {
    padding: 14px 0;
    width: 100%;
  }
}
</style>
