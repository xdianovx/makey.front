<template>
  <div class="top-nav-sort">
    <p>Cортировка:</p>
    <div class="top-nav-sort__selector">по новизне</div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.top-nav-sort {
  display: flex;
  gap: 4px;
  align-items: center;
}

.top-nav-sort__selector {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .top-nav-sort {
    justify-content: space-between;
    width: 100%;
  }
}
</style>
