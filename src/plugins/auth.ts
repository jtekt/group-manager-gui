import router from "@/router";
import { createAuthPlugin } from "@jtekt/vuetify-auth";

export const auth = createAuthPlugin(
  {
    oidc: {
      clientId: import.meta.env.VITE_OIDC_CLIENT_ID,
      authority: import.meta.env.VITE_OIDC_AUTHORITY,
    },
    credentials: {
      loginEndpoint: import.meta.env.VITE_LOGIN_URL,
      resetPasswordEndpoint: import.meta.env.VITE_PASSWORD_RESET_URL,
    },
    enrichmentEndpoint: import.meta.env.VITE_IDENTIFICATION_URL,
    enrichmentIdLookupField: '_id',
  },
  router
);