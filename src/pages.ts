const routes: Array<Route> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue')
  },
  {
    name: 'About',
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ './pages/About.vue')
  },
  {
    name: 'RestAPI',
    path: '/restAPI',
    component: () => import(/* webpackChunkName: "about" */ './pages/RestAPI.vue')
  }
]

export default routes
