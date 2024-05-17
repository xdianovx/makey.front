<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="feature-item">
    <div v-html="data.icon" />
    <h3 class="feature-item-title">{{ data.title }}</h3>
    <p class="feature-item-text">{{ data.text }}</p>

    <div class="feature-label" v-if="data.label">{{ data.label }}</div>
  </div>
</template>

<style scoped lang="scss">
.feature-item {
}

.feature-item-title {
  margin-top: 12px;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px; /* 120.833% */
}

.feature-item-text {
  margin-top: 16px;
}

.feature-label {
  margin-top: 32px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  padding: 16px 32px;
  background: #f3f3f3;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
}
</style>
