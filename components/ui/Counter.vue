<template>
  <div class="counter">
    <p class="counter__title">Количество</p>
    <div class="inner">
      <button class="decrement">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="#D9D9D9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99984 10.8332C4.76373 10.8332 4.56581 10.7533 4.40609 10.5936C4.24637 10.4339 4.1665 10.2359 4.1665 9.99984C4.1665 9.76373 4.24637 9.56581 4.40609 9.40609C4.56581 9.24636 4.76373 9.1665 4.99984 9.1665H14.9998C15.2359 9.1665 15.4339 9.24636 15.5936 9.40609C15.7533 9.56581 15.8332 9.76373 15.8332 9.99984C15.8332 10.2359 15.7533 10.4339 15.5936 10.5936C15.4339 10.7533 15.2359 10.8332 14.9998 10.8332H4.99984Z"
          />
        </svg>
      </button>
      <div class="div"></div>
      <div class="number">1</div>
      <div class="div"></div>
      <button class="increment">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="#D9D9D9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.1665 10.8332H4.99984C4.76373 10.8332 4.56581 10.7533 4.40609 10.5936C4.24637 10.4339 4.1665 10.2359 4.1665 9.99984C4.1665 9.76373 4.24637 9.56581 4.40609 9.40609C4.56581 9.24636 4.76373 9.1665 4.99984 9.1665H9.1665V4.99984C9.1665 4.76373 9.24636 4.56581 9.40609 4.40609C9.56581 4.24637 9.76373 4.1665 9.99984 4.1665C10.2359 4.1665 10.4339 4.24637 10.5936 4.40609C10.7533 4.56581 10.8332 4.76373 10.8332 4.99984V9.1665H14.9998C15.2359 9.1665 15.4339 9.24636 15.5936 9.40609C15.7533 9.56581 15.8332 9.76373 15.8332 9.99984C15.8332 10.2359 15.7533 10.4339 15.5936 10.5936C15.4339 10.7533 15.2359 10.8332 14.9998 10.8332H10.8332V14.9998C10.8332 15.2359 10.7533 15.4339 10.5936 15.5936C10.4339 15.7533 10.2359 15.8332 9.99984 15.8332C9.76373 15.8332 9.56581 15.7533 9.40609 15.5936C9.24636 15.4339 9.1665 15.2359 9.1665 14.9998V10.8332Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.counter {
}

.counter__title {
  font-size: 14px;
  line-height: 150%;
}

.inner {
  margin-top: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;

  .div {
    width: 1px;
    height: 24px;
    background: #dcdcdc;
  }

  button {
    width: 40px;
    height: 40px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.number {
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  line-height: 150%;
}
</style>
