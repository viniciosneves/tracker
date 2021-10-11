import { createStore, useStore as baseUseStore, } from 'vuex';
export const key = Symbol();
export const store = createStore({
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
        'ADICIONA_PROJETO'(state, nomeProjeto) {
            const projeto = {
                nome: nomeProjeto,
                id: new Date().toISOString()
            };
            state.projetos.push(projeto);
        }
    }
});
export function useStore() {
    return baseUseStore(key);
}
//# sourceMappingURL=index.js.map