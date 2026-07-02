import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { i18n } from "./plugins/i18n";
import "@moreillon/group-manager-vue-picker/styles.css";
import { auth } from "./plugins/auth.js";

createApp(App).use(vuetify).use(auth).use(router).use(i18n).mount("#app");
