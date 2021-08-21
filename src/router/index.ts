import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "projetos" */ '../views/projetos/Lista.vue')
      },
      {
        path: 'novo',
        component: () => import(/* webpackChunkName: "projetos" */ '../views/projetos/Form.vue')
      },
      {
        path: ':id',
        props: true,
        component: () => import(/* webpackChunkName: "projetos" */ '../views/projetos/Form.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
