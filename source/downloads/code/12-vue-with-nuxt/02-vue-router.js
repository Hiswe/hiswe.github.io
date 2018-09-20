import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/foo',
      name: 'foo',
      // needed for webpack's code splitting
      component: () => import(/* webpackChunkName: "foo" */ './views/Foo.vue'),
    },
    {
      path: '/bar/:id',
      name: 'bar',
      component: () => import(/* webpackChunkName: "bar" */ './views/Bar.vue'),
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
})
