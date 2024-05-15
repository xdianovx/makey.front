<template>
  <main class="profile-main">
    <section class="top">
      <div class="container">
        <div class="top-wrap">
          <h2>Мой профиль</h2>
          <button></button>
          <LogoutBtn />
        </div>
      </div>
    </section>

    <UiProfileUserInfo class="user-info" />

    <UiProfileLinksPallete class="links-pallete" />

    <section class="orders">
      <div class="container">
        <div class="orders-wrap">
          <UiProfileOrderItem class="order-item" />
          <UiProfileOrderItem class="order-item" />
        </div>
      </div>
    </section>

    <Spacer />
  </main>
</template>

<script lang="ts" setup>
import LogoutBtn from "~/components/ui/Profile/LogoutBtn.vue";
</script>

<style scoped lang="scss">
.profile-main {
  background: #f5f5f5;
}

.top {
  margin-top: 100px;
}

.top-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  margin-top: 16px;
}

.links-pallete {
  margin-top: 16px;
}

.order-item {
  margin-top: 64px;
}
</style>
