<script>
import './button-blue.scss';
export default {
  name: "ButtonBlue",
  props: {
    textButton: {
      required: true,
      type: String,
      default: null,
    },

    loadingButton: {
      required: true,
      type: Boolean,
      default: false,
    }
  }
}
</script>

<template>
  <button class="button-blue">
    {{textButton}}
    <div v-if="loadingButton" class="spinner-border text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </button>
</template>

<style scoped lang="scss">

</style>