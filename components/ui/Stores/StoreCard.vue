<template>
  <div class="card">
    <div class="image">
      <img src="@/assets/img/store.jpg" alt="Навзание магазина" />
    </div>

    <div class="info">
      <h2 class="title">г. Гродно, ул. Горького, 87Б</h2>

      <div class="contacts">
        <NuxtLink href="tel:+375 (29) 577-22-77">+375 (29) 577-22-77</NuxtLink>
        <NuxtLink href="tel:+375 (29) 577-22-77">+375 (29) 577-22-77</NuxtLink>
        <NuxtLink href="mailto:shop@makey.by">shop@makey.by</NuxtLink>
      </div>

      <div class="div"></div>

      <div class="hours">
        <div class="hours-item">
          <p class="hours-days">Пн-Пт</p>
          <p>9:00-17:30</p>
        </div>
        <div class="hours-item">
          <p class="hours-days">Cб-Вс</p>
          <p class="hours-dayoff">Выходной</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
  background: $bgWhite;
  padding: 4px;
}

.div {
  height: 1px;
  margin: 0 8px;
  background: rgba(#000000, 0.1);
  border-radius: 1px;
  margin-top: 38px;
}

.image {
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  // height: 164px;
  aspect-ratio: 4/2;
  img {
    display: block;
    object-fit: cover;
    width: 100%;
  }
}

.info {
  padding: 12px;
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: 600;
  line-height: 22px;
  font-size: 16px;
}

.contacts {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 8px;
}

.hours {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hours-item {
  display: flex;
  justify-content: space-between;
}

.hours-days {
  font-weight: 500;
}

.hours-dayoff {
  color: rgba(#000000, 0.5);
}
</style>
