<script setup>
const props = defineProps(["status"]);
</script>

<template>
  <div v-if="status === 'wait'" class="status --wait">В ожиданнии</div>
  <div v-if="status === 'in_process'" class="status --in_process">
    В обработке
  </div>
  <div v-if="status === 'send'" class="status --send">Отправлен</div>
  <div v-if="status === 'ready'" class="status --ready">Доставлен</div>
  <div v-if="status === 'null'" class="status --null">Аннулирован</div>
</template>

<style lang="scss" scoped>
.status {
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 8px 24px;

  &.--wait {
    color: #8a6100;
    background: #fff9eb;
    border: 1px solid #ffda85;
  }

  &.--in_process {
    color: #4316ca;
    background: #f4f1fd;
    border: 1px solid #c6b6f7;
  }

  &.--send {
    color: #0075ad;
    background: #f0faff;
    border: 1px solid #0075ad;
  }

  &.--ready {
    color: #17663a;
    background: #eefbf4;
    border: 1px solid #b2eecc;
  }

  &.--null {
    color: #d50b3e;
    background: #fef0f4;
    border: 1px solid #fbb1c4;
  }
}
</style>
