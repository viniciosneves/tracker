<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro />
    <button class="button">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Formulario",
  components: {
    Cronometro,
  },
});
</script>
<style scoped>
.button {
  margin-left: 8px;
}
</style>