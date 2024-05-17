<script setup>
import ManagerCallback from "~/components/Forms/ManagerCallback.vue";

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

const contacts = [
  {
    id: 1,
    title: "г. Гродно, ул. Горького, 87Б, 230015, абонентский ящик 20",
    phones: [
      { id: 1, title: "+375 (29) 577-22-77", link: "+375 (29) 577-22-77" },
      { id: 2, title: "+375 (33) 301-70-17", link: "+375 (33) 301-70-17" },
      { id: 3, title: "+375 (29) 577-22-77", link: "+375 (29) 577-22-77" },
    ],

    emails: [{ id: 1, title: "art@makey.by", link: "art@makey.by" }],
    time: [
      { id: 1, title: "Пн-Пт", time: "9:00-17:30", dayoff: false },
      { id: 2, title: "Cб-Вс", time: "Выходной", dayoff: true },
    ],
  },

  {
    id: 2,
    title: "г. Минск, ул.Чкалова, 20",
    phones: [
      { id: 1, title: "+375 (29) 577-22-77", link: "+375 (29) 577-22-77" },
      { id: 2, title: "+375 (33) 301-70-17", link: "+375 (33) 301-70-17" },
    ],

    emails: [],
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
          <div v-for="item in links" class="top-contacts-item">
            <h4>{{ item.title }}</h4>

            <div class="phones">
              <NuxtLink :to="`tel:${tel.link}`" v-for="tel in item.phones"
                >{{ tel.title }}
              </NuxtLink>
            </div>

            <div class="emails">
              <NuxtLink
                :to="`mailto:${email.link}`"
                v-for="email in item.emails"
                >{{ email.title }}
              </NuxtLink>
            </div>

            <div class="work --mob">
              <h5 class="work-title">Время работы</h5>
              <div class="days">
                <div class="day" v-for="day in item.time">
                  <div class="day-title">{{ day.title }}:</div>
                  <div class="day-text">{{ day.time }}</div>
                </div>
              </div>
            </div>
            <div class="div"></div>
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

    <section class="official">
      <div class="container">
        <div class="title">Официальные представительства</div>
        <div class="top-contacts">
          <div v-for="item in contacts" class="contacts-item top-contacts-item">
            <h4>{{ item.title }}</h4>

            <div class="phones">
              <NuxtLink :to="`tel:${tel.link}`" v-for="tel in item.phones"
                >{{ tel.title }}
              </NuxtLink>
            </div>

            <div class="emails">
              <NuxtLink
                :to="`mailto:${email.link}`"
                v-for="email in item.emails"
                >{{ email.title }}
              </NuxtLink>
            </div>

            <div class="work --mob">
              <h5 class="work-title">Время работы</h5>
              <div class="days">
                <div class="day" v-for="day in item.time">
                  <div class="day-title">{{ day.title }}:</div>
                  <div class="day-text">{{ day.time }}</div>
                </div>
              </div>
            </div>
            <div class="div"></div>
          </div>
        </div>

        <div class="top-worktime">
          <div class="work" v-for="item in contacts">
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

    <section class="form-section">
      <div class="container">
        <ManagerCallback
          class="form"
          title="Есть вопрос? Напишите нам и с вами свяжется наш менеджер"
          textareaTitle="Что бы вы хотели узнать?"
          buttonText="Отправить"
        />
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
  &.--mob {
    display: none;
  }
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

.official {
  margin-top: 120px;
}

.contacts-item {
  max-width: 320px;
  width: 100%;
}

.form-section {
  margin-top: 80px;
}

.form {
  max-width: 780px;
  width: 100%;
}

.div {
  display: none;
}

@media screen and (max-width: 1200px) {
  .top-contacts {
    gap: 32px;
  }

  .top-worktime {
    gap: 32px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 20px;
  }

  .official {
    margin-top: 80px;
  }
  .top-contacts {
    margin-top: 32px;
    gap: 64px 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  .top-contacts-item {
    display: flex;
    flex-direction: column;
    max-width: none;
  }

  .contacts-item {
    max-width: none;
  }

  .work {
    margin-top: auto;
    padding-top: 24px;

    &.--mob {
      display: block;
    }
  }
  .top-worktime {
    display: none;
  }
}

@media screen and (max-width: 550px) {
  .top-contacts {
    grid-template-columns: repeat(1, 1fr);
    //gap: 40px;
    gap: 0;
  }

  .top-worktime {
    grid-template-columns: repeat(1, 1fr);
  }

  .div {
    display: block;
    height: 1px;
    margin: 40px 8px;
    background: rgba(#000, 0.1);
  }
}
</style>
