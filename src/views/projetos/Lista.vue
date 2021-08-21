<template>
  <h1 class="title">Projetos</h1>
  <router-link to="/projetos/novo" class="button">
    <span class="icon is-small">
      <i class="fas fa-plus"></i>
    </span>
    <span>Novo projeto</span>
  </router-link>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>Projeto</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Alura tracker</td>
        <td>
          <button class="button mr-2 is-danger">
            <span class="icon is-small">
              <i class="fas fa-trash"></i>
            </span>
          </button>
          <router-link to="/projetos/1" class="button">
            <span class="icon is-small">
              <i class="fas fa-pencil-alt"></i>
            </span>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../../store"

export default defineComponent({
  name: "ProjetosLista",
  setup() {
    const store = useStore();
    return {
      store,
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>
