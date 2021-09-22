import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Tarefas from '@/views/Tarefas.vue'
import Projetos from '@/views/Projetos.vue'
import Formulario from '@/views/projetos/Formulario.vue'

const rotas: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
  },
  {
    path: '/projetos/novo',
    component: Formulario
  },
  {
    path: '/projetos/:id',
    props: true,
    component: Formulario
  }
]

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default roteador
