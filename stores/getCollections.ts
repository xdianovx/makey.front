import { defineStore } from "pinia";

export const useGetCollectionStore = defineStore("myGetCollectionStore", () => {
  const collections = ref([]);
  const isLoading = ref(false);

  const all = async () => {
    isLoading.value = true;

    await $fetch("http://45.135.234.37:80/api/v1/collections").then((data) => {
      collections.value = data;
    });

    isLoading.value = false;
  };

  return { isLoading, collections, all };
});
