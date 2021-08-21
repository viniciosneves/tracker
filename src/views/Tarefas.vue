<template>
  <Formulario @aoSalvarTarefa="salvarTarefa"/>
  <div class="lista">
    <Box v-if="semTarefas">
      Você não está muito produtivo hoje <span class="has-text-weight-bold">:(</span>
    </Box>
    <Tarefa v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Formulario from "@/components/Formulario.vue";
import Tarefa from "@/components/Tarefa.vue";
import Box from "@/components/Box.vue";
import ITarefa from "@/interfaces/ITarefa"
import { useStore } from "@/store"
import { ADICIONA_TAREFA } from "@/store/tipos-mutacoes";

export default defineComponent({
  name: "Tarefas",
  components: {
    Formulario,
    Tarefa,
    Box
  },
  methods: {
    salvarTarefa (tarefa:ITarefa) : void {
      this.store.commit(ADICIONA_TAREFA, tarefa)
    }
  },
  setup () {
    const store = useStore()
    return {
      store,
      tarefas: computed(() => store.state.tarefas),
      semTarefas: computed(() => store.state.tarefas.length == 0)
    }
  }
});
</script>
