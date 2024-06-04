<script setup lang="ts">
import Input from "~/components/auth/Input.vue";

const data = defineProps(["title"]);
</script>

<template>
  <div class="top-wrap">
    <div class="left">
      <h3 class="title">
        {{
          title
            ? title
            : "Нужна помощь? Напишите нам и с вами свяжется наш менеджер"
        }}
      </h3>
      <form action="" class="form">
        <div class="form-row">
          <Input title="Имя" placeholder="Как к вам обращаться" />
          <Input title="Номер телефона" type="tel" placeholder="+375" />
          <Input title="e-mail" type="email" placeholder="example@mail.com" />
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
        <NuxtLink to="tel:+375 (29) 580-13-78"> +375 (29) 580-13-78</NuxtLink>
        <NuxtLink to="tel:8 (0152) 44-20-20"> 8 (0152) 44-20-20</NuxtLink>
        <NuxtLink to="tel:+375 (29) 388-03-26"> +375 (29) 388-03-26</NuxtLink>
        <NuxtLink to="tel:+375 (29) 700-22-17 "> +375 (29) 700-22-17 </NuxtLink>

        <NuxtLink to="mailto:tmanager@makey.by"> tmanager@makey.by</NuxtLink>
        <NuxtLink to="mailto:art@makey.by">art@makey.by</NuxtLink>
        <NuxtLink to="mailto:dovnar7@mail.ru">dovnar7@mail.ru</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
    margin-top: 4px;
    resize: none;
    height: 120px;
  }
  label {
    font-size: 14px;
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

@media screen and (max-width: 1440px) {
  .right {
    max-width: 438px;
    width: 100%;
    flex-shrink: 0;
  }
}

@media screen and (max-width: 1200px) {
  .left {
    max-width: 70%;
  }
  .right {
    max-width: 30%;

    flex-shrink: 1;
  }

  .div {
    margin: 0 54px;
  }

  .form-row {
    flex-direction: column;
  }
}

@media screen and (max-width: 1024px) {
  .form {
    margin-top: 24px;
  }

  .title {
    font-size: 16px;
  }

  .top-wrap {
    flex-direction: column;
  }
  .left {
    max-width: none;
  }
  .right {
    max-width: none;

    flex-shrink: 0;
  }

  .div {
    margin: 40px auto;
    height: 1px;
    width: calc(100% - 16px);
  }

  .form-row {
    flex-direction: column;
  }
}
</style>
