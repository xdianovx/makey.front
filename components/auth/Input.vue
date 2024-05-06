<script setup>
const model = defineModel();

const emit = defineProps([
  "update:modelValue",
  "placeholder",
  "type",
  "name",
  "id",
  "title",
]);
</script>

<template>
  <div class="input">
    <label :for="id" :v-if="title">{{ title }}</label>
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      :id="id"
      v-model="model"
      @input="emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 16px;
    line-height: 150%;
  }

  input {
    padding: 14px 16px;
    border: 1px solid rgba(#000, 0.1);
    border-radius: 12px;
  }
}
</style>
