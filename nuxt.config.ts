// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        'nuxt-swiper'
    ],
    css: ['~/assets/styles/app.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/styles/_vars.scss" as *;'
                }
            }
        }
    },
    build: {
        transpile: ['gsap'],
    },
    pinia: {
        storesDirs: ['./stores/**'],
    },
})
