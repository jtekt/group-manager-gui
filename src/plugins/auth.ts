import router from "@/router";
import { createAuthPlugin } from "@jtekt/vuetify-auth";
import runtimeEnv from "@/runtimeEnv";

export const auth = createAuthPlugin(
  {
    oidc: {
      clientId: runtimeEnv.VITE_OIDC_CLIENT_ID,
      authority: runtimeEnv.VITE_OIDC_AUTHORITY,
    },
    credentials: {
      loginEndpoint: runtimeEnv.VITE_LOGIN_URL,
      resetPasswordEndpoint: runtimeEnv.VITE_PASSWORD_RESET_URL,
    },
    enrichmentEndpoint: runtimeEnv.VITE_IDENTIFICATION_URL,
    enrichmentIdLookupField: '_id',
    afterLoginPath: "/users/self/groups",
  },
  router
);