import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import MacroAdd from './views/MacroAdd.vue';
import TemplateAdd from './views/TemplateAdd.vue';
import TemplateRemove from './views/TemplateRemove.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/macro/add',
      name: 'macroadd',
      component: MacroAdd,
    },
    {
      path: '/template/add',
      name: 'templateadd',
      component: TemplateAdd,
    },
    {
      path: '/template/remove',
      name: 'templateremove',
      component: TemplateRemove,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ]
})
