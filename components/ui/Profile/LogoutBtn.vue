<template>
  <button class="btn">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      stroke="#FF3B30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1034 5.31034L14 8L11.1034 10.6897M13.7931 8H6.96552M10.6897 2H3.65517C2.74105 2 2 2.74105 2 3.65517V12.3448C2 13.259 2.74105 14 3.65517 14H10.6897"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span>Выйти</span>
  </button>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  border: 1px solid $bgRed;
  padding: 12px 16px;
  border-radius: 8px;
  color: $textRed;
  font-weight: 500;
  gap: 4px;
  transition: all $trans ease-in-out;

  &:hover {
    background: rgba(#000000, 0.1);
  }
}
</style>
