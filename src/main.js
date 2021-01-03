import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "reset-css";
import store from "./store";
import routes from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "hash",
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
