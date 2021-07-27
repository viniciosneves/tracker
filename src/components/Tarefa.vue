<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8">
        Estudar Vue.JS
      </div>
      <div class="column">
        <p class="m-0"><i class="far fa-clock"></i> 01:30min</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tarefa'
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