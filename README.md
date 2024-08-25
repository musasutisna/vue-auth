<h1 align="center">Vue Auth</h1>

VueAuth is based on **Vue 3** with composition style codes

## Getting started

Lets install vue-auth with npm

```bash
npm install --save @musasutisna/vue-auth
```

## Configuration

```js
window.config = {
  AUTH_API_BASEURL: 'your api baseurl',
  AUTH_API_LOGIN: '/login',
  AUTH_API_RECOVERY: '/recovery',
  AUTH_API_LOGOUT: '/u/logout',
  AUTH_API_VERIFY: '/u/profile',
  AUTH_TOKEN: 'your auth token',
  AUTH_LANG: {
    LOGIN_PROCESS: 'loading message of login process',
    RECOVERY_PROCESS: 'loading message of recovery process',
    VERIFY_PROCESS: 'loading message of verify process',
    LOGOUT_PROCESS: 'loading message of logout process'
  }
}
```

## Stores

- useAuthAPI, axios configured of auth with configured baseUrl and header authorization with Bearer

- useAuthStore, 

| Property | Type | Description |
|:--|:--|:--|
| result | Object | Result response from request login or verify on executed |

| Method | Type | Description |
| toLogin | async | Send request login. | 
| toRecovery | async | Send request recovery. | 
| toVerify | async | Send request auth verify. |
| toLogout | async | Send request auth logout. |

## Components

- VueAuth, verify user authorization on token is exists.

| Props | Type | Description |
|:--|:--|:--|
| class | String | Class value attributes will be bind into element. |

| Emit | Type | Description |
|:--|:--|:--|
| verified | function | Executed when verified process is completed |

- VueProtect, verify user authorization.

| Props | Type | Description |
|:--|:--|:--|
| class | String | Class value attributes will be bind into element. |

| Emit | Type | Description |
|:--|:--|:--|
| verified | function | Executed when verified process is completed |
