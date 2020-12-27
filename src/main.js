import Vue from "vue";
import App from "./App.vue";
import "reset-css";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.config.productionTip = false;

import AlbumPage from "./pages/AlbumPage.vue";

const router = new VueRouter({
  routes: [{ path: "/album/:id", component: AlbumPage, name: "album" }],
  mode: "hash",
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
