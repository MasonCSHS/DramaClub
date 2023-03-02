import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      header: true,
    }
  },
  {
    path: '/about',
    name: 'About Us',
    component: About,
    meta: {
      header: true,
    }
  },
  {
    path: '/current',
    name: "Current Production",
    component: null, // TODO: Add component for Current Production,
    meta: {
      header: true,
    }
  },
  {
    path: "/past",
    name: "Past Productions",
    component: null, // TODO: Add component for Past Productions,
    meta: {
      header: true,
    }
  },
  {
    path: "/contact",
    name: "Contact Us",
    component: null, // TODO: Add component for Contact Us,
    meta: {
      header: true,
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = 'Mason Drama Club';
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
      document.title = to.name + " | " + DEFAULT_TITLE || DEFAULT_TITLE;
  });
});

export default router
export { routes}
