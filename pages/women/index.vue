<script setup>
const { allWomen: getProduct } = useGetProductsStore();
const { all: getCategories } = useCategoriesStore();
const { products } = storeToRefs(useGetProductsStore());
const { categories } = storeToRefs(useCategoriesStore());
getProduct();
getCategories();
</script>

<template>
  <main>
    <section class="top-section" ref="main">
      <div class="container">
        <h1 class="title">Women</h1>
        <div class="top">
          <nav class="top-nav">
            <NuxtLink class="cat-link" to="/women">Смотреть все</NuxtLink>
            <NuxtLink
              class="cat-link"
              :to="`/women/${cat.slug}`"
              v-for="cat in categories"
              :key="cat.id"
              >{{ cat.title }}
            </NuxtLink>
          </nav>

          <div class="top-nav-filters">
            <UiProductsSortDropdown />
            <div class="div"></div>
            <UiProductFilterBtn />
          </div>
        </div>
      </div>
    </section>

    <section class="banners-section">
      <div class="containesr">
        <div class="banners-section__wrap">
          <NuxtLink href="/" class="banner-item">
            <img src="/img/banner-1.jpg" />
            <div class="banners-section__overflow"></div>
            <div class="banner-item__info">
              <h3 class="banner-item__title">Le Lin — new season</h3>
              <div class="banner-item__chevron">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
                  />
                </svg>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink href="/" class="banner-item">
            <img src="/img/banner-2.jpg" />
            <div class="banners-section__overflow"></div>

            <div class="banner-item__info">
              <h3 class="banner-item__title">Le Lin — new season</h3>
              <div class="banner-item__chevron">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
                  />
                </svg>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink href="/" class="banner-item">
            <img src="/img/banner-3.jpg" />
            <div class="banners-section__overflow"></div>

            <div class="banner-item__info">
              <h3 class="banner-item__title">Le Lin — new season</h3>
              <div class="banner-item__chevron">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
                  />
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mobile-sort">
      <div class="container">
        <div class="top-nav-sort-mobile">
          <p>сортировка:</p>
          <div class="top-nav-sort__selector">по новизне</div>
        </div>
      </div>
    </section>

    <section class="category">
      <SectionsCategorySlider
        :count="categories.length"
        :title="cat.title"
        :slug="cat.slug"
        :cat_id="cat.id"
        v-for="cat in categories"
        :key="cat.id"
      />
    </section>

    <button class="mobile-filter-btn">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8337 13.5C11.1337 13.5 10.542 13.2583 10.0587 12.775C9.57533 12.2917 9.33366 11.7 9.33366 11C9.33366 10.3 9.57533 9.70833 10.0587 9.225C10.542 8.74167 11.1337 8.5 11.8337 8.5C12.5337 8.5 13.1253 8.74167 13.6087 9.225C14.092 9.70833 14.3337 10.3 14.3337 11C14.3337 11.7 14.092 12.2917 13.6087 12.775C13.1253 13.2583 12.5337 13.5 11.8337 13.5ZM11.8337 12.1667C12.1559 12.1667 12.4309 12.0528 12.6587 11.825C12.8864 11.5972 13.0003 11.3222 13.0003 11C13.0003 10.6778 12.8864 10.4028 12.6587 10.175C12.4309 9.94722 12.1559 9.83333 11.8337 9.83333C11.5114 9.83333 11.2364 9.94722 11.0087 10.175C10.7809 10.4028 10.667 10.6778 10.667 11C10.667 11.3222 10.7809 11.5972 11.0087 11.825C11.2364 12.0528 11.5114 12.1667 11.8337 12.1667ZM7.33366 11.6667H3.33366C3.14477 11.6667 2.98644 11.6028 2.85866 11.475C2.73088 11.3472 2.66699 11.1889 2.66699 11C2.66699 10.8111 2.73088 10.6528 2.85866 10.525C2.98644 10.3972 3.14477 10.3333 3.33366 10.3333H7.33366C7.52255 10.3333 7.68088 10.3972 7.80866 10.525C7.93644 10.6528 8.00033 10.8111 8.00033 11C8.00033 11.1889 7.93644 11.3472 7.80866 11.475C7.68088 11.6028 7.52255 11.6667 7.33366 11.6667ZM4.16699 7.5C3.46699 7.5 2.87533 7.25833 2.39199 6.775C1.90866 6.29167 1.66699 5.7 1.66699 5C1.66699 4.3 1.90866 3.70833 2.39199 3.225C2.87533 2.74167 3.46699 2.5 4.16699 2.5C4.86699 2.5 5.45866 2.74167 5.94199 3.225C6.42533 3.70833 6.66699 4.3 6.66699 5C6.66699 5.7 6.42533 6.29167 5.94199 6.775C5.45866 7.25833 4.86699 7.5 4.16699 7.5ZM4.16699 6.16667C4.48921 6.16667 4.76421 6.05278 4.99199 5.825C5.21977 5.59722 5.33366 5.32222 5.33366 5C5.33366 4.67778 5.21977 4.40278 4.99199 4.175C4.76421 3.94722 4.48921 3.83333 4.16699 3.83333C3.84477 3.83333 3.56977 3.94722 3.34199 4.175C3.11421 4.40278 3.00033 4.67778 3.00033 5C3.00033 5.32222 3.11421 5.59722 3.34199 5.825C3.56977 6.05278 3.84477 6.16667 4.16699 6.16667ZM12.667 5.66667H8.66699C8.4781 5.66667 8.31977 5.60278 8.19199 5.475C8.06421 5.34722 8.00033 5.18889 8.00033 5C8.00033 4.81111 8.06421 4.65278 8.19199 4.525C8.31977 4.39722 8.4781 4.33333 8.66699 4.33333H12.667C12.8559 4.33333 13.0142 4.39722 13.142 4.525C13.2698 4.65278 13.3337 4.81111 13.3337 5C13.3337 5.18889 13.2698 5.34722 13.142 5.475C13.0142 5.60278 12.8559 5.66667 12.667 5.66667Z"
        />
      </svg>
      <p>Фильтры</p>
    </button>
    <SectionsCatalogSeo />

    <Spacer />
  </main>
</template>

<style scoped lang="scss">
.top-section {
  margin-top: 100px;
  background: #fff;
}

.top {
  display: flex;
  margin-top: 16px;
  position: relative;
  z-index: 1;
  align-items: center;
}

.top-nav {
  background: #fff;
  display: flex;
  gap: 28px;
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
}

.cat-link {
  line-height: 150%;
}

.top-nav-filters {
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 16px;
}

.div {
  background: rgba($bgBLack, 0.1);
  width: 1px;
  height: 24px;
}

.banners-section {
  margin-top: 30px;
}

.banners-section__wrap {
  display: flex;
  flex-wrap: wrap;
}

.banner-item {
  position: relative;
  height: 480px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  width: 50%;

  &:nth-child(1) {
    width: 100%;
  }
}

.banner-item__info {
  position: absolute;
  color: $textWhite;
  width: 100%;
  padding: 0 40px 40px 40px;
  line-height: 22px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.banners-section__overflow {
  box-shadow: 0px -102px 92px -48px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 0px -102px 92px -48px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 01px -102px 92px -48px rgba(0, 0, 0, 0.75) inset;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
}

.category {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.top-nav-sort-mobile {
  display: none;
}

.mobile-filter-btn {
  display: none;
}

@media screen and (max-width: 1400px) {
  .top-nav {
    position: relative;
  }
}

@media screen and (max-width: 1280px) {
  .banner-item {
    position: relative;
    height: 400px;
  }

  .banner-item__title {
    font-size: 16px;
    line-height: 22px;
  }
}

@media screen and (max-width: 1024px) {
  .top-section {
    margin-top: 60px;
  }
  .top-nav-filters {
    display: none;
  }

  .title {
    font-size: 20px;
  }

  .top-nav-sort-mobile {
    display: flex;
    align-items: center;
    margin-top: 40px;
    justify-content: space-between;
  }

  .category {
    margin-top: 32px;
    gap: 80px;
  }
  .mobile-filter-btn {
    display: flex;
    align-items: center;
    position: fixed;
    gap: 8px;
    background: $bgBLack;
    bottom: 48px;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    border-radius: 1000px;
    font-weight: 600;
    font-size: 16px;
    padding: 18px 28px;
    line-height: 20px;
  }
}

@media screen and (max-width: 768px) {
  .banners-section__wrap {
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 8px;
  }

  .banner-item {
    width: 100%;
  }

  .banner-item__info {
    padding: 0 16px 30px 16px;
  }
}
</style>
