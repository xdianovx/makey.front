<template>
  <main>
    <section class="top">
      <div class="container">
        <div class="top-wrap">
          <div class="left">
            <h3 class="title">
              Нужна помощь? Напишите нам и с вами свяжется наш менеджер
            </h3>
            <form action="" class="form">
              <div class="form-row">
                <Input title="Имя" placeholder="Как к вам обращаться" />
                <Input title="Номер телефона" type="tel" placeholder="+375" />
                <Input
                  title="e-mail"
                  type="email"
                  placeholder="example@mail.com"
                />
              </div>
              <div class="form-textarea">
                <label for="">Опишите свою проблему</label>
                <textarea></textarea>
              </div>

              <button type="submit" class="form-btn">Отправить запрос</button>
            </form>
          </div>

          <div class="div"></div>

          <div class="right">
            <h3 class="title">
              Или свяжитесь с нами <br />
              любым удобным вам способом
            </h3>

            <div class="contacts">
              <NuxtLink to="tel:+375 (29) 580-13-78">
                +375 (29) 580-13-78
              </NuxtLink>
              <NuxtLink to="tel:+375 (29) 580-13-78">
                +375 (29) 580-13-78
              </NuxtLink>

              <NuxtLink to="mailto:tmanager@makey.by">
                tmanager@makey.by
              </NuxtLink>
              <NuxtLink to="mailto:dovnar7@mail.ru">dovnar7@mail.ru</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UiContactsAccordition class="faq" :data="data" />

    <Spacer />
  </main>
</template>

<script setup>
import Input from "~/components/auth/Input.vue";

const data = [
  {
    id: 1,
    title: "  1. Как купить изделия в вашем интернет-магазине?",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
  {
    id: 2,
    title: "2. На сайте актуальные цены?",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
  {
    id: 3,
    title: "3.Что означают различные состояния заказа?",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
  {
    id: 4,
    title:
      "4. Статус моего заказа уже неделю как 'Отправлено', а я до сих пор ничего не получил.",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
  {
    id: 5,
    title: "5. Как сделать отмену заказа в интернет-магазине?",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
];
</script>

<style scoped lang="scss">
.top {
  margin-top: 100px;
  font-size: 16px;
  font-weight: 600;
}

.top-wrap {
  display: flex;
  align-items: stretch;
}

.title {
  font-size: 20px;
  line-height: 150%;
  font-weight: 600;
}

.div {
  // height: 100%;
  width: 1px;
  background: rgba(#000000, 0.1);
  margin: 0 64px;
}

.form {
  margin-top: 32px;
}

.form-row {
  display: flex;
  gap: 8px;
}

.form-textarea {
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  textarea {
    border: 1px solid rgba(#000000, 0.1);
    border-radius: 8px;
    resize: none;
    height: 120px;
  }
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 28px;
}

.form-btn {
  margin-top: 16px;
  width: 100%;
  background: $bgBLack;
  color: $textWhite;
  border-radius: 12px;
  padding: 15px;
  display: block;
}

.faq {
  margin-top: 80px;
}
</style>
