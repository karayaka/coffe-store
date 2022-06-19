import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductList from '@/views/ProductList.vue'
import BasketPage from '@/views/BasketPage.vue'
import OrdersPage from '@/views/OrdersPage.vue'
import PhotoGallary from '@/views/PhotoGallary.vue'
import SecurityPage from '@/views/SecurityPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/products',
    name:'products',
    component:ProductList
  },
  {
    path:'/basket',
    name:'basket',
    component:BasketPage
  },
  {
    path:'/orders',
    name:'orders',
    component:OrdersPage
  },
  {
    path:'/photoGallary',
    name:'photoGallary',
    component:PhotoGallary
  },
  {
    path:'/Security',
    name:'Security',
    component:SecurityPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = [
    '/Security',
    '/',
    '/products',
    '/photoGallary',
  ];
  console.log(to.path);
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('login-token');

  if (authRequired && !loggedIn) {
    return next('/Security');
  }
  next();
})

export default router
