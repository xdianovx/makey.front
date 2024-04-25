<template>
  <div class="picker">
    <div class="color">
      <div class="circle"></div>
      <div class="title">Черный</div>
    </div>

    <button class="button">Изменить цвет</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.picker {
  display: flex;
  align-items: center;
  gap: 24px;
}

.button {
  color: $textGray;
  font-size: 14px;
  line-height: 130%;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: $textGray;
    bottom: 0;
  }
}

.color {
  display: flex;
  align-items: center;
  gap: 8px;
}

.circle {
  width: 10px;
  height: 10px;
  background: $bgBLack;
  border-radius: 100%;
}
</style>
