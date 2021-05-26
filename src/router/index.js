import { createRouter, createWebHistory } from "vue-router";

const Recommend = () =>
  import("@/views/recommend" /* webpackChunkName: "recommend" */);
const Singer = () => import("@/views/singer" /* webpackChunkName: "singer" */);
const TopList = () =>
  import("@/views/top-list" /* webpackChunkName: "top-list" */);
const Search = () => import("@/views/search" /* webpackChunkName: "search" */);
import SingerDetail from "@/views/singer-detail";
import Album from "@/views/album";
import TopDetail from "@/views/top-detail";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    redirect: "/recommend",
  },
  {
    path: "/recommend",
    component: Recommend,
    children: [
      {
        path: ":id",
        component: Album,
      },
    ],
  },
  {
    path: "/singer",
    component: Singer,
    children: [
      {
        path: ":id",
        component: SingerDetail,
      },
    ],
  },
  {
    path: "/top-list",
    component: TopList,
    children: [
      {
        path: ":id",
        component: TopDetail,
      },
    ],
  },
  {
    path: "/search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
