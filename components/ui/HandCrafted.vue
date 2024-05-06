<template>
  <div class="item">
    <div class="image">
      <img src="/assets/img/icons/handcrafted.svg" alt="Ручная работа" />
    </div>
    <p>Ручная работа</p>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
}

.image {
  border-radius: 10px;
  background: #f5f5f5;
  padding: 10px;
  img {
    display: block;
  }
}
</style>
