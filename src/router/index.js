import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../pages/Home-v2.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Register.vue')
  },
  {
    path: '/create-single',
    name: 'create-single',
    component: () => import('../pages/CreateSingle.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../pages/Dashboard.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../pages/Explore.vue')
  },
  {
    path: '/product-details-v1-:id',
    name: 'ProductDetail',
    component: () => import('../pages/ProductDetail.vue'),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        left: 0,
        top: 0
      }
    }
  }
});

export default router;