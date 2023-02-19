import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import AppLink from "./components/AppLink.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.component("AppLink", AppLink);
app.use(router);

app.mount("#app");
