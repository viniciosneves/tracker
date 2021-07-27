<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8">
        <input
          class="input"
          type="text"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column">
        <Temporizador />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "Formulario",
  components: {
    Temporizador,
  },
  props: {
    descricao: String,
  },
});
</script>
<style scoped>
.button {
  margin-left: 8px;
}
</style>