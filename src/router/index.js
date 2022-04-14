import { createRouter, createWebHistory } from 'vue-router'
import Launches from "@/components/Launches.vue";
import Capsules from "@/components/Capsules.vue";
import Homepage from "@/components/Homepage.vue";

const

 router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: "/",
        name: "homepage",
        component: Homepage
      },
    {
      path: "/launches",
      name: "launches",
      component: Launches
    },
    {
        path: "/capsules",
        name: "capsules",
        component: Capsules
      }
  ]
})

export default router;