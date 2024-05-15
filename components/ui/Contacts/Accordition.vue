<script setup>
const props = defineProps(["data", "title"]);
</script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Часто задаваемые вопросы</h2>

      <div class="accordition">
        <UiContactsAccorditionItem v-for="item in data" :data="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  line-height: 150%;
}

.accordition {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
