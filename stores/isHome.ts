export const useIsHomeStore = defineStore("myIsHomeStore", () => {
  const isHome = ref(true);
  function setIsHome() {
    isHome.value = true;
  }
  function setIsNotHome() {
    isHome.value = false;
  }

  return { isHome, setIsHome, setIsNotHome };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIsHomeStore, import.meta.hot));
}
