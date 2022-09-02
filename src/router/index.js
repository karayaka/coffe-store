import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductList from '@/views/ProductList.vue'
import BasketPage from '@/views/BasketPage.vue'
import OrdersPage from '@/views/OrdersPage.vue'
import PhotoGallary from '@/views/PhotoGallary.vue'
import SecurityPage from '@/views/SecurityPage.vue'
import AboutStory from '@/views/aboutPages/AboutStory.vue'
import MissionVision from'@/views/aboutPages/MissionVision.vue'
import WorkWithUs from '@/views/aboutPages/WorkWithUs.vue'
import invitationPage from'@/views/aboutPages/InvitationPage.vue'
import StrabornPage from '@/views/aboutPages/StrabornPage.vue'
import SalesAgreement from'@/views/aboutPages/SalesAgreement.vue'
import SecurityPolicy from'@/views/aboutPages/SecurityPolicy.vue'

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
    path:'/about-story',
    name:'about-story',
    component:AboutStory,
  },
  {
    path:'/work-with-us',
    name:'work-with-us',
    component:WorkWithUs,
  },
  {
    path:'/invitation-page',
    name:'invitation-page',
    component:invitationPage,
  },
  {
    path:'/straborn-page',
    name:'straborn-page',
    component:StrabornPage,
  },
  {
    path:'/mission-vision',
    name:'missionvision',
    component:MissionVision,
  },
  {
    path:'/Security',
    name:'Security',
    component:SecurityPage
  },
  {
    path:'/sales-agreement',
    name:'sales-agreement',
    component:SalesAgreement,
  },
  {
    path:'/security-policy',
    name:'securitypolicy',
    component:SecurityPolicy,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // şifres,z g,irilebilecek ekranlar!
  const publicPages = [
    '/Security',
    '/',
    '/products',
    '/photoGallary',
    '/about-story',
    '/mission-vision',
    '/work-with-us',
    '/invitation-page',
    '/straborn-page',
    '/sales-agreement',
    '/security-policy',
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
