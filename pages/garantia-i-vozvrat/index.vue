<script setup>
const payData = [
  {
    id: 1,
    title: "1. Банковской картой онлайн",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
  {
    id: 2,
    title: "2. Приложение «Оплати»",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
  {
    id: 3,
    title: "3. Карты рассрочки",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
  {
    id: 4,
    title: "4. Apple Pay",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
];
</script>

<template>
  <main>
    <section class="top">
      <div class="container">
        <h2 class="title">Гарантия на изделия</h2>
      </div>
    </section>

    <section class="accordition">
      <div class="container">
        <div class="accordition-wrap">
          <UiContactsAccorditionItem v-for="item in payData" :data="item" />
        </div>

        <div class="div"></div>

        <h2 class="title">Условия возврата</h2>

        <div class="accordition-wrap">
          <UiContactsAccorditionItem v-for="item in payData" :data="item" />
        </div>
      </div>
    </section>

    <section class="section section-form">
      <div class="container">
        <FormsHelp />
      </div>
    </section>
    <Spacer />
  </main>
</template>

<style scoped lang="scss">
.top {
  margin-top: 100px;
}

.title {
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
}

.accordition {
  margin-top: 32px;
}

.div {
  height: 1px;
  margin: 64px 8px;
  background: rgba(#000, 0.3);
}

.accordition-wrap {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-form {
  margin-top: 120px;
}
</style>
