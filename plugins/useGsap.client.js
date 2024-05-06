import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// nuxt will auto import defineNuxtPlugin, so our file will look clean
export default defineNuxtPlugin(() => {
  // imported gsap and all plugins needed, then just register them
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  // later you can use them by deconstructing useNuxtApp composable
  // but everything you put in provide will be prefixed with $ symbol to
  // prevent some collisions
  return { provide: { gsap, ScrollToPlugin, ScrollTrigger } };
});
