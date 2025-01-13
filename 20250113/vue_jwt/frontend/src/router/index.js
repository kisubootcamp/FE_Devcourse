import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UserView.vue"),
      meta: {
        requireAuth: true,
      },
    },
  ],
});

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();
  if (to.meta?.requireAuth && !authStore.isLoggedIn) {
    next("/login");
  } else if (to.meta?.requireAuth === false && authStore.isLoggedIn) {
    next("/");
  }
  next();
});

export default router;
