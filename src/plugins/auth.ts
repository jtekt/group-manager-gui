import router from "@/router";
import { createAuthPlugin } from "@jtekt/vuetify-auth";
import runtimeEnv from "@/runtimeEnv";

// Both login methods fetch the user profile from the user manager
const enrichment = {
  enrichmentEndpoint: runtimeEnv.VITE_IDENTIFICATION_URL,
  identifierLookupField: "_id",
};

export const auth = createAuthPlugin(
  {
    oidc: {
      clientId: runtimeEnv.VITE_OIDC_CLIENT_ID,
      authority: runtimeEnv.VITE_OIDC_AUTHORITY,
      ...enrichment,
    },
    credentials: {
      loginEndpoint: runtimeEnv.VITE_LOGIN_URL,
      resetPasswordEndpoint: runtimeEnv.VITE_PASSWORD_RESET_URL,
      ...enrichment,
    },
    afterLoginPath: "/users/self/groups",
  },
  router
);
