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
import { ADICIONA_PROJETO, ATUALIZA_PROJETO } from "@/store/tipos-mutacoes";
import { defineComponent } from "vue";
import { useStore } from "@/store"

export default defineComponent({
  name: "ProjetosForm",
  props: {
    id: {
      type: String
    }
  },
  mounted () {
    if (this.id) { 
      const projeto = this.store.state.projetos.find(p => p.id == this.id)
      this.nomeProjeto = projeto!.nome
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
        this.store.commit(ATUALIZA_PROJETO, projeto)
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeProjeto)
      }
      this.nomeProjeto = ''
      this.$router.push('/projetos')
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
