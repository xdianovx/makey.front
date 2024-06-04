import { defineStore } from "pinia";

export const useMyProductPageStore = defineStore("myProductPageStore", () => {
  const data = ref([]);

  const getData = async (slug) => {
    $fetch(`http://45.135.234.37:80/api/v1/products/${slug}/show`).then(
      (res) => (data.value = res)
    );
  };

  return { data, getData };
});
