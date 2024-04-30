<script setup>

const store = useIsHomeStore();
const {isHome} = storeToRefs(store);
const links = [
  {
    id: 1,
    title: 'Интернет-магазин',
    links: [
      {id: 1, title: '+375 (29) 577-22-77', link: 'tel:+375 (29) 577-22-77'},
      {id: 2, title: '+375 (33) 301-70-17', link: 'tel:+375 (33) 301-70-17'},
      {id: 3, title: 'shop@makey.by', link: 'mailto:shop@makey.by'},
    ]
  },
  {
    id: 2,
    title: 'Корпоративным клиентам',
    links: [
      {id: 1, title: '+375 (29) 580-13-78', link: 'tel:+375 (29) 580-13-78'},
      {id: 2, title: '+375 (29) 580-13-78', link: 'tel:+375 (29) 580-13-78'},
      {id: 3, title: 'tmanager@makey.by', link: 'mailto:tmanager@makey.by'},
      {id: 4, title: 'dovnar7@mail.ru', link: 'mailto:dovnar7@mail.ru'},
    ]
  },
  {
    id: 3,
    title: 'Сервис и поддержка',
    links: [
      {id: 1, title: 'Связаться с нами', link: '/'},
      {id: 2, title: 'Оплата и доставка', link: '/'},
      {id: 3, title: 'Гарантия и возврат', link: '/'},
      {id: 4, title: 'Персонализация', link: '/'},
    ]
  },
  {
    id: 4,
    title: 'Компания',
    links: [
      {id: 1, title: 'Контакты', link: '/'},
      {id: 2, title: 'О компании', link: '/'},
      {id: 3, title: 'Магазины', link: '/'},
      {id: 4, title: 'Франшиза', link: '/'},
    ]
  },
]
</script>

<template>
  <footer class="footer" :class="{ black: !isHome }">
    <div class="container">
      <div class="footer__wrap">
        <!--          -->
        <div class="footer__socials">
          <h4 class="footer__socials__title">Makey в социальных сетях</h4>
          <div class="footer__socials_wrap">
            <NuxtLink to="https://www.instagram.com/" target="_blank">
              <img src="/img/ig.svg" alt="Makey Instagram">
            </NuxtLink>
            <NuxtLink to="https://www.tiktok.com/" target="_blank">
              <img src="/img/tt.svg" alt="Makey TikTOk">
            </NuxtLink>
          </div>
        </div>

        <!--        -->
        <nav class="footer__nav">
          <div class="nav-item" v-for="item in links" :key="item.id">
            <h4 class="nav-item__title">{{ item.title }}</h4>
            <div class="nav-item__wrap" v-for="link in item.links">
              <NuxtLink :to="link.link">{{ link.title }}</NuxtLink>
            </div>
          </div>
        </nav>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">Makey <span>2024</span></p>
        <p class="footer__policy">Частное предприятие «МакейТорг» | 2014-2024 | 230015, Гродно, ул.Горького, 87Б | пн-пт
          9:30 - 18:00 УНП 591017193 | Зарегистрировано Гродненским Горисполкомом 22.09.2014 №591017193 | В торг.
          реестре с 15.03.2017 №371680</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 40px 0 16px;
  color: $textWhite;
  background: $bgBLack;

  &.black {
    background: $bgWhite;
    color: $textBlack;

  }
}

.footer__wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
}

.footer__nav {
  display: flex;
  justify-content: space-between;
  gap: 64px;
}


.nav-item__title {
  font-weight: 500;
  font-size: 14px;
}

.nav-item__wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;

  a {
    opacity: .7;
    display: block;
    transition: opacity .2s ease-in-out;
    font-size: 14px;
    line-height: 150%;

    &:hover {
      opacity: 100;
    }
  }
}

.nav-item {
  width: 210px;
}

.nav-item__title {
  font-size: 14px;
}

.footer__socials__title {
  font-size: 14px;
  font-weight: 500;
}

.footer__socials_wrap {
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 16px;
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__copy {
  font-size: 14px;
  line-height: 150%;
}

.footer__policy {
  font-size: 10px;
  line-height: 150%;
  opacity: .3;
}

.footer__nav-mob {
  display: none;
}

@media screen and (max-width: 1280px) {
  .footer {
    padding: 40px 0 64px;
  }
  .footer__nav {
    display: none;
  }

  .footer__nav-mob {
    display: flex;
  }

  .footer__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .footer__copy {
    span {
      color: #808080;
    }
  }
}
</style>
