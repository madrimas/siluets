import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import ExercisesService from "./common/Exercises.service";
import ExercisesServices from "./common/Exercises.service";
import FirebaseService from "./common/Firebase.service";


Vue.use(VueMaterial)
ExercisesServices.init()
FirebaseService.init();

new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
  