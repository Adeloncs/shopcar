import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'




Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/a',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'List',
      component: List
    },
  ],
});

