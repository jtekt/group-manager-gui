import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";
import { i18n } from "@/plugins/i18n";

export default createVuetify({
  defaults: {
    VSwitch: {
      color: "primary",
    },
    VTextField: {
      variant: "underlined",
    },
    VSelect: {
      variant: "outlined",
    },
    VTabs: {
      color: "primary",
    },
  },
  theme: {
    defaultTheme: localStorage.getItem("theme") || "light",
    themes: {
      light: {
        colors: {
          primary: "#b00000",
          background: "#f5f5f5",
        },
      },
      dark: { colors: { primary: "#b02222" } },
    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});
