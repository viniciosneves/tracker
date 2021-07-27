<template>
  <div class="columns is-gapless is-multiline is-mobile">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarters ">
      <Formulario />
      <div class="lista">
        <Tarefa v-for="tarefa in tarefas" :key="tarefa"/>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Formulario from "./components/Formulario.vue";
import BarraLateral from "./components/BarraLateral.vue";
import Tarefa from "./components/Tarefa.vue";

export default defineComponent({
  name: "App",
  components: {
    Formulario,
    BarraLateral,
    Tarefa
  },
  data () {
    return {
      tarefas: [0,1,2,3,4]
    }
  }
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>