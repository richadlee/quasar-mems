
const routes = [
  {
    path: '/',
    redirect: '/',
    name: 'home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('src/pages/Home/Home.vue') },
      { path: '/create', name: 'create', component: () => import('src/pages/NewRecord/NewRecord.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Error404/Error404.vue')
  }
]

export default routes
