<script setup>
const links = [
  {
    id: 1,
    title: "Интернет-магазин",
    phones: [
      { id: 1, title: "+375 (29) 577-22-77", link: "+375 (29) 577-22-77" },
      { id: 2, title: "+375 (33) 301-70-17", link: "+375 (33) 301-70-17" },
    ],

    emails: [{ id: 1, title: "shop@makey.by", link: "shop@makey.by" }],
    time: [
      { id: 1, title: "Пн-Пт", time: "9:00-17:30", dayoff: false },
      { id: 2, title: "Cб-Вс", time: "Выходной", dayoff: true },
    ],
  },

  {
    id: 2,
    title: "Корпоративные заказы",
    phones: [
      { id: 1, title: "+375 (29) 577-22-77", link: "+375 (29) 577-22-77" },
      { id: 2, title: "+375 (33) 301-70-17", link: "+375 (33) 301-70-17" },
    ],

    emails: [
      { id: 1, title: "shop@makey.by", link: "shop@makey.by" },
      { id: 2, title: "dovnar7@mail.ru", link: "dovnar7@mail.ru" },
    ],
    time: [
      { id: 1, title: "Пн-Пт", time: "9:00-17:30", dayoff: false },
      { id: 2, title: "Cб-Вс", time: "Выходной", dayoff: true },
    ],
  },

  {
    id: 3,
    title: "Оптовый отдел",
    phones: [
      { id: 1, title: "+375 (29) 577-22-77", link: "+375 (29) 577-22-77" },
      { id: 2, title: "+375 (33) 301-70-17", link: "+375 (33) 301-70-17" },
    ],

    emails: [{ id: 1, title: "shop@makey.by", link: "shop@makey.by" }],
    time: [
      { id: 1, title: "Пн-Пт", time: "9:00-17:30", dayoff: false },
      { id: 2, title: "Cб-Вс", time: "Выходной", dayoff: true },
    ],
  },
  {
    id: 4,
    title: "Оптовый отдел в Минске",
    phones: [
      { id: 1, title: "+375 (29) 577-22-77", link: "+375 (29) 577-22-77" },
    ],

    emails: [
      { id: 1, title: "shop@makey.by", link: "shop@makey.by" },
      { id: 2, title: "dovnar7@mail.ru", link: "dovnar7@mail.ru" },
    ],
    time: [
      { id: 1, title: "Пн-Пт", time: "9:00-17:30", dayoff: false },
      { id: 2, title: "Cб-Вс", time: "Выходной", dayoff: true },
    ],
  },
];
</script>

<template>
  <main>
    <section class="top">
      <div class="container">
        <h1 class="title">Контакты</h1>

        <div class="top-contacts">
          <div v-for="item in links">
            <h4>{{ item.title }}</h4>

            <div class="phones">
              <NuxtLink :to="`tel:${tel.link}`" v-for="tel in item.phones">{{
                tel.title
              }}</NuxtLink>
            </div>

            <div class="emails">
              <NuxtLink
                :to="`mailto:${email.link}`"
                v-for="email in item.emails"
                >{{ email.title }}</NuxtLink
              >
            </div>
          </div>
        </div>

        <div class="top-worktime">
          <div class="work" v-for="item in links">
            <h5 class="work-title">Время работы</h5>
            <div class="days">
              <div class="day" v-for="day in item.time">
                <div class="day-title">{{ day.title }}:</div>
                <div class="day-text">{{ day.time }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

.top-contacts {
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.phones {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.emails {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.top-worktime {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.work {
}

.work-title {
  font-size: 14px;
  font-weight: 500;
  color: rgba(#000000, 0.5);
}

.days {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.day {
  display: flex;
  gap: 8px;
}

.day-title {
  font-weight: 500;
}
</style>
