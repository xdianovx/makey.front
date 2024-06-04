import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("myCategoriesStore", () => {
  const categories = ref([]);
  const isLoading = ref(false);

  const all = async () => {
    isLoading.value = true;

    await $fetch("http://45.135.234.37:80/api/v1/categories").then((data) => {
      categories.value = data;
    });

    isLoading.value = false;
  };

  return { all, categories, isLoading };
});
