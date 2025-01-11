import Home from "@/pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

//동적경로매칭
const router = createRouter({
  //라우터 인스턴스를 생성하는는 패키지
  history: createWebHistory(), // "/user", "/user/1" 등의 URL을 사용하기 위해
  // history: createWebHashHistory(), // "/#/user", "/#/user/1" 등의 URL을 사용하기 위해 -> 오늘날에는 사용되는 형식은 아님
  routes: [
    {
      path: "/", // URL경로
      name: "Home", // 라우터의 고유한 이름
      component: Home, // URL로 접근했을 때 표시될 컴포넌트
    },
    //경로변경
    {
      path: "/about", // URL경로
      name: "About", // 라우터의 고유한 이름
      // component: () => import("@/pages/About.vue"), // URL로 접근했을 때 표시될 컴포넌트
      redirect: "/about-new", // 경로변경할때
    },
    {
      path: "/about-new", // URL경로
      name: "AboutNew", // 라우터의 고유한 이름
      component: () => import("@/pages/About.vue"), // URL로 접근했을 때 표시될 컴포넌트
    },
    {
      path: "/profile:/id",
      // component: () => import("@/pages/Profile.vue"), // URL로 접근했을 때 표시될 컴포넌트
      redirect: (to) => {
        return {
          name: "ProfileId",
          params: { id: to.params.id },
          query: { q: to.query.q },
        };
      }, // 경로변경할때
    },
    {
      path: "/profiles:/id", // 동적세그먼트가 있는 상태에서는 redirect 를 어떻게 넘길것인가?
      name: "ProfileId",
      component: () => import("@/pages/Profile.vue"),
    },
    {
      path: "/profile:/id",
      name: "Profile",
      // component: () => import("@/pages/Profile.vue"), // URL로 접근했을 때 표시될 컴포넌트
      redirect: (to) => {
        return { name: "ProfileId", params: { id: to.params.id } };
      }, // 경로변경할때
    },
    {
      path: "/profile:/id",
      name: "Profile",
      // component: () => import("@/pages/Profile.vue"), // URL로 접근했을 때 표시될 컴포넌트
      redirect: (to) => {
        return { name: "ProfileId", params: { id: to.params.id } };
      }, // 경로변경할때
    },
    {
      path: "/profile:/id",
      name: "Profile",
      // component: () => import("@/pages/Profile.vue"), // URL로 접근했을 때 표시될 컴포넌트
      redirect: (to) => {
        return { name: "ProfileId", params: { id: to.params.id } };
      }, // 경로변경할때
    },
    // 이름이 있는 vue
    {
      path: "/dashboard",
      name: "Dashboard",
      components: {
        header: () => import("@/components/DashboardHeader.vue"),
        default: () => import("@/pages/Dashboard.vue"),
        footer: () => import("@/components/DashboardFooter.vue"),
      },
      alias: ["/dash", "/dashboard-alias"],
    },
    // 중첩경로탐색방식
    {
      path: "/product", // URL경로
      name: "Product",
      children: [
        {
          path: "info", // URL경로
          name: "ProductInfo",
          component: () => import("@/pages/ProductInfo.vue"), // URL로 접근했을 때 표시될 컴포넌트
        },
        {
          path: ":item", // URL경로
          name: "ProductItem",
          component: () => import("@/pages/ProductItem.vue"), // URL로 접근했을 때 표시될 컴포넌트
        },
      ], // 라우터의 고유한 이름
    },
    //동적경로매칭
    {
      path: "/:user/:id",
      name: "User",
      component: () => import("@/pages/User.vue"),
      props: true,
    },
    {
      path: "/user-:afterUser(.*)",
      component: () => import("@/pages/UserGeneric.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/pages/NotFound.vue"),
    },
  ], // 라우트 정의
});

export default router;
