## Basic Setup

Prerequisites:
- Nodejs installed 


`
npm create vue@latest
`

- Name your project.
- TypeScript / No
- JSX Support / No
- Vue Router / Yes
- Pinia / Yes
- Vitest / No
- End-to-End / No
- ESLint / Yes
- Prettier / Yes

```bash
  cd <project_folder>
  npm install
  npm run format
  npm run dev
```

In package.json it should have this:

```json
  "dependencies": {
    "pinia": "^2.1.7",
    "vue": "^3.3.11",
    "vue-router": "^4.2.5"
  }
```



Delete files and folders from :
- assets
- components
- stores
- views

App.vue should look like this (Can use kebab casing instead of camel casing):

```vue
<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>

  <nav>
    <RouterLink to="/">Link1</RouterLink>
  </nav>

  <RouterView />
</template>

```

index.js in router folder should look like this

```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'views',
    //   component: () => import('../views/Views.vue')
    // },
  ]
})

export default router

```

main.js should look like this 

```js
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

```

The index.html title and favicon should be changed. 

In the src folder create services helpers, locales and stores.

In the components add global and widgets folders.