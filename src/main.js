import Vue from "vue";
import App from "./App.vue";
import Chakra, { CThemeProvider, CReset } from "@chakra-ui/vue";
import "@/assets/css/global.css";
import customTheme from "@/config/extend-theme";
import LoadingScreen from "@/components/LoadingScreen.vue";
import GettingStarted from "@/components/GettingStarted.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.use(Chakra, {
  extendTheme: customTheme,
});

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: LoadingScreen },
  { path: "/getting-started", component: GettingStarted },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)]),
}).$mount("#app");
