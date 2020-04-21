import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import ExercisesService from "./common/Exercises.service";
import ExercisesServices from "./common/Exercises.service";


Vue.use(VueMaterial)
ExercisesServices.init()

new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
  