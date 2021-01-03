import Vue from "vue";
import Vuex from "vuex";
import album from "./modules/album";

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  modules: {
    album,
  },
});

export default store;
