import IProjeto from '@/interfaces/IProjeto'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore, } from 'vuex'
import { ADICIONA_PROJETO, ATUALIZA_PROJETO, REMOVE_PROJETO } from './tipos-mutacoes'

interface State {
  projetos: IProjeto[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projetos: []
  },
  mutations: {
    [ADICIONA_PROJETO] (state, nomeProjeto: string) {
      const projeto = {
        nome: nomeProjeto,
        id: new Date().toISOString()
      }
      state.projetos.push(projeto)
    },
    [ATUALIZA_PROJETO](state, projeto: IProjeto) {
      const indice = state.projetos.findIndex(p => p.id == projeto.id)
      state.projetos[indice] = projeto
    },
    [REMOVE_PROJETO] (state, id: string) {
      state.projetos = state.projetos.filter(p => p.id != id)
    },
  }
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}