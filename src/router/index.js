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
  {
    path: '/product-details-trade-v1-:id',
    name: 'ProductDetailTrade',
    component: () => import('../pages/ProductDetailTrade.vue'),
    props: true
  },
  {
    path: '/how',
    name: 'how',
    component: () => import('../pages/Howit.vue')
  },
  {
    path: '/mintnft',
    name: 'mintnft',
    component: () => import('../pages/MintNFT.vue')
  },
  {
    path: '/topvalued',
    name: 'topvalued',
    component: () => import('../pages/TopValued.vue')
  },
  {
    path: '/product-details',
    name: 'ProductDetails',
    component: () => import('../pages/ProductDetails.vue'),
    props: true
  },
  {
    path: '/create-invoice',
    name: 'CreateInvoice',
    component: () => import('../pages/CreateInvoice.vue'),
    props: true
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () => import('../pages/Verify.vue'),
    props: true
  },
  // {
  //   path: '/lightning',
  //   name: 'LightningLogin',
  //   component: () => import('../pages/LightningLogin.vue'),
  //   props: true
  // },
  {
    path: '/mainboard',
    name: 'MainBoard',
    component: () => import('../pages/MainBoard.vue'),
    props: true
  },
  {
    path: '/lightning-login',
    name: 'Lightning',
    component: () => import('../pages/Lightning.vue'),
    props: true
  },
  {
    path: '/wallet',
    name: 'WalletBoard',
    component: () => import('../pages/WalletBoard.vue'),
    props: true
  },
  {
    path: '/collection',
    name: 'CollectionBoard',
    component: () => import('../pages/CollectionBoard.vue'),
    props: true
  },
  {
    path: '/invitations',
    name: 'InvitationsBoard',
    component: () => import('../pages/InvitationsBoard.vue'),
    props: true
  },
  {
    path: '/collection',
    name: 'CollectionBoard',
    component: () => import('../pages/CollectionBoard.vue'),
    props: true
  },
  {
    path: '/settings',
    name: 'SettingsBoard',
    component: () => import('../pages/SettingsBoard.vue'),
    props: true
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../pages/Logout.vue'),
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