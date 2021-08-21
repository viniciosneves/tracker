import IProjeto from '@/interfaces/IProjeto'
import ITarefa from '@/interfaces/ITarefa'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore, } from 'vuex'
import { ADICIONA_TAREFA } from './tipos-mutacoes'

interface State {
  tarefas: ITarefa[],
  projetos: IProjeto[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    tarefas: [],
    projetos: []
  },
  mutations: {
    [ADICIONA_TAREFA] (state, tarefa: ITarefa) {
      state.tarefas.push(tarefa)
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}