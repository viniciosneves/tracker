<template>
  <section class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
    <Botao @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
    <Botao @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import Botao from "./Botao.vue";

export default defineComponent({
  name: "Temporizador",
  emits: ['aoFinalizarTarefa'],
  components: {
    Cronometro,
    Botao
  },
  data () {
    return {
      tempoEmSegundos: 0,
      cronometroRodando: false,
      cronometro: 0 
    }
  },
  methods: {
    iniciar () : void {
      this.cronometroRodando = true
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1
      }, 1000)
    },
    finalizar () : void {
      this.$emit('aoFinalizarTarefa', this.tempoEmSegundos)
      this.tempoEmSegundos = 0
      this.cronometroRodando = false
      clearInterval(this.cronometro)
    }
  }
});
</script>
<style scoped>
.button {
  margin-left: 8px;
}
</style>