# Group Manager GUI

[![AWS ECR](https://img.shields.io/badge/AWS%20ECR-group--manager--gui-blue)](https://gallery.ecr.aws/jtekt-corporation/group-manager-gui)

Front end for the Group Manager API (`group-manager-back-end`): browse groups, manage their members, administrators and subgroups.

More information available on the [project page](https://articles.maximemoreillon.com/articles/398)

## Environment variables

### Services

| Variable | Description |
| --- | --- |
| `VITE_GROUP_MANAGER_API_URL` | Base URL of the group manager API |

### Authentication

Both OIDC and username/password login can be configured at the same time; the login page then offers both.

| Variable | Description |
| --- | --- |
| `VITE_OIDC_AUTHORITY` | OIDC provider issuer URL (e.g. `https://keycloak.jtektrnd.net/realms/jtekt`) |
| `VITE_OIDC_CLIENT_ID` | Client ID registered in the OIDC provider |
| `VITE_LOGIN_URL` | User manager endpoint for username/password login (e.g. `…/v3/auth/login`) |
| `VITE_PASSWORD_RESET_URL` | URL of the password reset page offered on the login page |
| `VITE_IDENTIFICATION_URL` | Endpoint called after login to fetch the full user profile (e.g. `…/v3/users/self`) |

### Common

These variables are shared by all the corporate-apps GUIs.

| Variable | Description |
| --- | --- |
| `VITE_I18N_LOCALE` | Default UI language (`ja` or `en`), used until the user picks one |
| `VITE_I18N_FALLBACK_LOCALE` | Language used for missing translations |
| `VITE_APPS_URL` | URL of the apps portal; shows an apps button in the app bar when set |
| `VITE_HELP_URL` | URL of the help page; shows a help button in the app bar when set |

## Runtime configuration

The variables above are read at runtime, not baked into the build: at container startup, `40-env-config.sh` writes every `VITE_*` environment variable to `/env.js`, which `src/runtimeEnv.ts` merges over the build-time values. The same image can therefore be configured per deployment through the Kubernetes manifest.

In development, values come from `.env` (i18n defaults) and `.env.development` (local URLs).

The version shown on the About page is the git tag, passed at build time (`--build-arg APP_VERSION`); it cannot be changed at runtime.

## Development

```
npm install
npm run dev
```

`npm run build` type-checks and builds for production.
