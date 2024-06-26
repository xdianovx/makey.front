import { defineStore } from "pinia";

export const useGetProductsStore = defineStore("myGetProductsStore", () => {
  const products = ref([]);
  const isLoading = ref(false);

  const all = async () => {
    isLoading.value = true;

    await $fetch("http://45.135.234.37:80/api/v1/man/products").then((data) => {
      products.value = data;
    });

    isLoading.value = false;
  };

  const allWomen = async () => {
    isLoading.value = true;

    await $fetch("http://45.135.234.37:80/api/v1/woman/products").then(
      (data) => {
        products.value = data;
      }
    );

    isLoading.value = false;
  };

  const getByCategory = async (sex, slug) => {
    isLoading.value = true;

    await $fetch(
      `http://45.135.234.37:80/api/v1/${sex}/products?categories[]=${slug}`,
      {
        // query: {
        //   "categories[]": [slug],
        // },
      }
    ).then((data) => {
      products.value = data;
    });

    isLoading.value = false;
  };

  return { isLoading, products, all, allWomen, getByCategory };
});
