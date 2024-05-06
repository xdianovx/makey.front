<script setup>
const tel = ref(null);
const password = ref(null);
</script>

<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="login-wrap">
          <div class="left">
            <h1>Войти в личный кабинет</h1>
            <form class="form">
              <AuthInput
                  v-model="tel"
                  placeholder="+375"
                  title="Номер телефона"
              />
              <AuthInput v-model="tel" type="password" title="Пароль"/>
              <NuxtLink to="/auth/restore" class="form-link">Не помнню пароль</NuxtLink>

              <label class="checkbox">
                <input type="checkbox">
                Запомнить меня
              </label>

              <button type="submit" class="form-btn">Войти</button>
            </form>
          </div>

          <div class="div"></div>

          <div class="right">
            <h2 class="right-title">Нет аккаунта?</h2>
            <p class="right-text">Пройдите быструю регистрацию и получите доступ к персональной скидке и скидке ко дню
              рождения</p>

            <div class="tags">
              <div class="tag">
                <p>Персональная скидка</p>
              </div>
              <div class="tag">
                <p>Скидка ко дню рождения</p>
              </div>
              <div class="tag">
                <p>Промокоды</p>
              </div>
              <div class="tag">
                <p>Отслеживание заказов</p>
              </div>
              <div class="tag">
                <p>Сохранённые адреса</p>
              </div>
            </div>
          </div>

          <NuxtLink to="">Создать аккаунт</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.section {
  margin-top: 100px;
}

.login-wrap {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 100px;
}

.left {
  padding-top: 35px;
  max-width: 437px;
  width: 100%;
}

.right {
  display: flex;
  flex-direction: column;
  margin: auto 0px;
  max-width: 664px;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}

.form-link {
  text-decoration: underline;
  font-size: 14px;
  color: rgba(#000, .5);
  line-height: 17px;
  margin-top: 10px;
}

.form-btn {
  margin-top: 40px;
  border: 2px solid rgba(#000, .5);
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  font-weight: 600;
  line-height: 20px;
  padding: 15px;
}

.checkbox {
  margin-top: 40px;
}

.div {
  width: 1px;
  background: rgba(#000, .1);
}

.right-title {
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
}

.right-text {
  margin-top: 32px;
  font-size: 20px;
  line-height: 150%;
  color: rgba(#000, .5);
  font-weight: 600;

}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 8px;
}

.tag {
  padding: 8px 16px;
  background: #F5F5F5;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;

}
</style>
