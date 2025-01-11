import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      beforeEnter: (to, from, next) => {
        console.log("beforeEnter");
        console.log(to);
        console.log(from);
        const isAuthenticated = false;
        if (to.path === "/dashboard" && !isAuthenticated) {
          next("/");
        }
        next();
      },
    },
    {
      path: "/dashboard/:id",
      name: "Dashboard",
      component: () => import("../views/Dashboard.vue"),
      meta: {
        title: "Home",
        requireAuth: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});

// 전역가드
router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  console.log(to);
  console.log(from);
  // next() : 전환 ok /
  if (to.meta.requireAuth) {
    const isAuthenticated = false;
    if (to.path === "/dashboard" && !isAuthenticated) {
      next("/");
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

// router.beforeResolve((to, from, next) => {
//   console.log("beforeResolve");
//   console.log(to);
//   console.log(from);
//   next();
//   // next() : 전환 ok /
// });

// // 라우트 전환 되고 난후
// router.afterEach((to, from, failure) => {
//   console.log("afterEach");
//   console.log(to);
//   console.log(from);
//   console.log(failure);
// });
export default router;
