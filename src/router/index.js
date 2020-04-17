import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: "/",
        component: () => import("@/views/Home"),
        children: [
          {
            path: "home-global",
            name: "home-global",
            component: () => import("@/views/HomeGlobal")
          }
        ]
      }
    ]
});