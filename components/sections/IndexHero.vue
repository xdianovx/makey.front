<template>
  <section class="section">
    <div class="container">
      <div class="overlay"></div>
      <video playsinline autoplay loop muted class="section__video">
        <source src="/video/home.mp4" type="video/mp4" />
      </video>
      <div class="section__wrap">
        <div class="section__info">
          <h2 class="section__title">Evolution</h2>
          <p class="section__subtitle">collection</p>

          <NuxtLink to="/" class="section__link">Подробнее</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  background: #000;
  height: 100vh;
}

.section__wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, 0.2);
  z-index: 1;
}
.section__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}

.section__info {
  margin-top: auto;
  color: $textWhite;
  padding-bottom: 64px;
}

.section__title {
  font-size: 77px;
  line-height: 120%;
  font-weight: 400;
}

.section__subtitle {
  font-size: 39px;
  line-height: 120%;
}

.section__link {
  margin-top: 24px;
  display: inline-block;
  line-height: 120%;
  padding: 15px 40px;
  border-radius: 1000px;
  border: 1px solid rgba(#ffffff, 0.3);
  background: rgba(#4a4a4a, 0.8);
  transition: all 0.3s ease-in-out;
  &:hover {
    background: rgba(#ffffff, 0.3);
  }
}

@media screen and (max-width: 1200px) {
  .section__link {
    margin-top: 18px;
  }

  .section__title {
    font-size: 64px;
  }

  .section__subtitle {
    font-size: 32px;
  }
}
</style>
