const routes: Array<Route> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
  },
  {
    name: 'About',
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

export default routes
