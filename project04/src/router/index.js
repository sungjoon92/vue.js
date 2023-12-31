import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "welcome" */ '../views/WelecomeView.vue')
  },
  {
    path: '/dataBinding/String',
    name: 'dataBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/databinding_01/DataBindingStringView.vue')
  },
  {
    path: '/dataBinding/html',
    name: 'htmlBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/databinding_01/DataBindingHtmlView.vue')
  },
  {
    path: '/dataBinding/input',
    name: 'inputBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/databinding_01/DataBindingInputView.vue')
  },
  {
    path: '/dataBinding/selcet',
    name: 'selectBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/databinding_01/DataBindingSelectView.vue')
  },
  {
    path: '/dataBinding/attribute',
    name: 'AttributeBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */ '../views/databinding_01/DataBindingAttributeView.vue')
  },
  {
    path: '/event/List',
    name: 'ListBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/event_02/DataBindingListView.vue')
  },
  {
    path: '/event/Click',
    name: 'ClickBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/event_02/EventClickView.vue')
  },
  {
    path: '/event/Change',
    name: 'ChangeBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/event_02/EventChangeView.vue')
  },
  {
    path: '/event/key',
    name: 'keyBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/event_02/EventKeyView.vue')
  },
  {
    path: '/memolist',
    name: 'memoListView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/memo_3/MemoListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
