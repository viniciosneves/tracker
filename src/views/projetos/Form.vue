<template>
  <h1 class="title">Novo projeto</h1>
  <form @submit.prevent="salvar">
    <div class="field">
      <label class="label">Nome do projeto</label>
      <div class="control">
        <input class="input" v-model="nomeProjeto" type="text" placeholder="Digite aqui o nome do projeto" required/>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" type="submit">
          Salvar
        </button>
      </div>
      <div class="control">
        <router-link to="/projetos" class="button is-link is-light">
          Voltar
        </router-link>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../store"

export default defineComponent({
  name: "ProjetosForm",
  props: {
    id: {
      type: Number
    }
  },
  data () { 
    return {
      nomeProjeto: ''      
    }
  },
  methods: {
    salvar () : void {
      if (this.id) {
        const projeto = {
          id: this.id,
          nome: this.nomeProjeto
        }
        this.store.commit('atualizarProjeto', projeto)
      } else {
        this.store.commit('adicionarProjeto', this.nomeProjeto)
      }
    }
  },
  setup () {
    const store = useStore()
    return {
      store
    }
  }
});
</script>
