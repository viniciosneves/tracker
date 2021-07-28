<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-8">
        {{ tarefa.descricao }}
      </div>
      <div class="column">
        <p class="m-0"><i class="far fa-clock"></i> {{ tempoGasto }} </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
  name: 'Tarefa',
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  computed: {
    tempoGasto () : string {
      return new Date(this.tarefa.duracaoEmSegundos * 1000)
        .toISOString()
        .substr(11, 8)
    }
  }
});
</script>
<style scoped>
.box {
  background: #FAF0CA;
}
.descricao {
  font-weight: bold;
}
</style>