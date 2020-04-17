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
            path: "training/",
            name: "training",
            component: () => import("@/views/Training")
          },
          {
            path: "presets/",
            name: "presets",
            component: () => import("@/views/Presets")
          },
          {
            path: "measurements/",
            name: "measurements",
            component: () => import("@/views/Measurements")
          },
          {
            path: "progress/",
            name: "training-progress",
            component: () => import("@/views/Progress")
          }
        ]
      }
    ]
});