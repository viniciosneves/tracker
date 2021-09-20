<template>
  <div class="projetos">
    <h1 class="title">Novo projeto</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label class="label">Nome do projeto</label>
        <div class="control">
          <input
            class="input"
            v-model="nomeProjeto"
            type="text"
            placeholder="Digite aqui o nome do projeto"
            required
          />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" type="submit">Salvar</button>
        </div>
        <div class="control">
          <router-link to="/projetos" class="button is-link is-light">
            Voltar
          </router-link>
        </div>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>Projeto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IProjeto from "../interfaces/IProjeto";

export default defineComponent({
  name: "Projetos",
  data() {
    return {
      projetos: [] as IProjeto[],
      nomeProjeto: "",
    };
  },
  methods: {
    salvar() {
      const projeto = {
        nome: this.nomeProjeto,
        id: new Date().toISOString(),
      };
      this.projetos.push(projeto)
    },
  },
});
</script>

<style>
.projetos {
  padding: 1.25rem;
}
</style>