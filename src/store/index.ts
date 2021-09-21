import IProjeto from '@/interfaces/IProjeto'
import ITarefa from '@/interfaces/ITarefa'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore, } from 'vuex'

interface State {
  projetos: IProjeto[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projetos: [
      {
        id: new Date().toISOString(),
        nome: 'TypeScript'
      },
      {
        id: new Date().toISOString(),
        nome: 'Vue'
      },
      {
        id: new Date().toISOString(),
        nome: 'Vuex'
      }
    ]
  },
  mutations: {
    'ADICIONA_PROJETO'(state, nomeProjeto: string) {
      const projeto = {
        nome: nomeProjeto,
        id: new Date().toISOString()
      }
      state.projetos.push(projeto)
    }
  }
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}