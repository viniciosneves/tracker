<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para iniciar uma nova tarefa">
        <input
          class="input"
          type="text"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="tarefa.descricao"
        />
      </div>
      <div class="column">
        <Temporizador @aoFinalizarTarefa="salvarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";
import Tarefa from '../interfaces/Tarefa'

export default defineComponent({
  name: "Formulario",
  emits: ['aoSalvarTarefa'],
  components: {
    Temporizador,
  },
  data () { 
    return {
      tarefa: {
        duracaoEmSegundos: 0,
        descricao: ''
      } as Tarefa
    }
  },
  methods: {
    salvarTarefa (tempoEmSegundos: number) : void {
      this.tarefa.duracaoEmSegundos = tempoEmSegundos
      this.$emit('aoSalvarTarefa', this.tarefa)
    }
  }
});
</script>
<style scoped>
.button {
  margin-left: 8px;
}
</style>