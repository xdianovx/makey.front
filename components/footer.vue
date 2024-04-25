<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <nav class="footer__nav">
          <div class="footer__nav_item">
            <NuxtLink href="/">Оплата и доставка</NuxtLink>
            <NuxtLink href="/">Гарантия в возврат</NuxtLink>
            <NuxtLink href="/">Магазины</NuxtLink>
            <NuxtLink href="/">Контакты</NuxtLink>
          </div>
          <div class="footer__nav_item">
            <NuxtLink href="/">Весь каталог</NuxtLink>
            <NuxtLink href="/">Для неё</NuxtLink>
            <NuxtLink href="/">Для него</NuxtLink>
            <NuxtLink href="/">Акции</NuxtLink>
            <NuxtLink href="/">Новинки</NuxtLink>
            <NuxtLink href="/">Для дома</NuxtLink>
            <NuxtLink href="/">Духи</NuxtLink>
          </div>
          <div class="footer__nav_item-categories">
            <h4>Категории</h4>
            <div class="footer__nav_item_wrap">
              <NuxtLink href="/">Сумки</NuxtLink>
              <NuxtLink href="/">Кошельки</NuxtLink>
              <NuxtLink href="/">Рюкзаки</NuxtLink>
              <NuxtLink href="/">Ремни</NuxtLink>
              <NuxtLink href="/">Зажим для денег</NuxtLink>
              <NuxtLink href="/">Портмоне</NuxtLink>
              <NuxtLink href="/">Косметички</NuxtLink>
              <NuxtLink href="/">Обложки для документов</NuxtLink>
              <NuxtLink href="/">Футляры для ключей</NuxtLink>
              <NuxtLink href="/">Монетницы</NuxtLink>
            </div>
          </div>
          <div class="footer__nav_item-categories">
            <h4>Коллекции</h4>
            <div class="footer__nav_item_wrap">
              <NuxtLink href="/">Teddy</NuxtLink>
              <NuxtLink href="/">Tie</NuxtLink>
              <NuxtLink href="/">Trio</NuxtLink>
              <NuxtLink href="/">Bubbles</NuxtLink>
              <NuxtLink href="/">Le Lin</NuxtLink>
              <NuxtLink href="/">Texture</NuxtLink>
              <NuxtLink href="/">Fleur</NuxtLink>
              <NuxtLink href="/">Italy</NuxtLink>
              <NuxtLink href="/">Classic</NuxtLink>
              <NuxtLink href="/">Waves</NuxtLink>
              <NuxtLink href="/">Key</NuxtLink>
              <NuxtLink href="/">Royal</NuxtLink>
              <NuxtLink href="/">Geometry</NuxtLink>
              <NuxtLink href="/">Venice</NuxtLink>
            </div>
          </div>
          <div class="footer__nav_item-contacts">
            <h4>Корп. клиентам</h4>
            <div class="footer__nav_item_wrap">
              <NuxtLink href="tel:+375 (29) 580-13-78"
                >+375 (29) 580-13-78</NuxtLink
              >
              <NuxtLink href="tel:+375 (29) 388-03-26"
                >+375 (29) 388-03-26</NuxtLink
              >
              <NuxtLink to="mailto:tmanager@makey.by"
                >tmanager@makey.by</NuxtLink
              >
              <NuxtLink to="mailto:dovnar7@mail.ru">dovnar7@mail.ru</NuxtLink>
            </div>
          </div>
          <div class="footer__nav_item-contacts">
            <h4>Магазин</h4>
            <div class="footer__nav_item_wrap">
              <NuxtLink href="tel:+375 (33) 301-70-17">
                +375 (33) 301-70-17
              </NuxtLink>
              <NuxtLink href="tel:+375 (33) 301-70-17">
                +375 (33) 301-70-17
              </NuxtLink>

              <NuxtLink to="mailtoshop@makey.by">shop@makey.by</NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  background: $bgBLack;
  color: $textWhite;
}

.footer__wrap {
  padding: 80px 0;
}

.footer__nav {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.footer__nav_item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 600;
}

.footer__nav_item-categories {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .footer__nav_item_wrap {
    display: flex;
    flex-direction: column;
  }
}

.footer__nav_item-contacts {
  display: flex;
}
</style>
