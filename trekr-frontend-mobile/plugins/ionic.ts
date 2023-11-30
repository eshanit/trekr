import { IonicVue } from "@ionic/vue";
import type { Plugin } from 'vue';

export default defineNuxtPlugin((nuxtApp: { vueApp: { use: (arg0: Plugin) => void; }; }) => {
    nuxtApp.vueApp.use(IonicVue)
})