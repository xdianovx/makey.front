<script setup lang="ts">
import Input from "~/components/auth/Input.vue";

const props = defineProps(["title", "textareaTitle", "buttonText"]);
</script>

<template>
  <div class="">
    <h3 class="title">
      Нужна помощь? Напишите нам и с вами свяжется наш менеджер
    </h3>
    <form action="" class="form">
      <div class="form-row">
        <Input title="Имя" placeholder="Как к вам обращаться" />
        <Input title="Номер телефона" type="tel" placeholder="+375" />
        <Input title="e-mail" type="email" placeholder="example@mail.com" />
      </div>
      <div class="form-textarea">
        <label for="">{{ textareaTitle }}</label>
        <textarea></textarea>
      </div>

      <button type="submit" class="form-btn">{{ buttonText }}</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.form {
  margin-top: 32px;
}

.form-row {
  display: flex;
  gap: 8px;

  input {
    width: 100%;
  }
}

.form-textarea {
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  textarea {
    margin-top: 8px;
    border: 1px solid rgba(#000000, 0.1);
    border-radius: 8px;
    resize: none;
    height: 120px;
    width: 100%;
    padding: 16px;
  }
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

@media screen and (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
}
</style>
