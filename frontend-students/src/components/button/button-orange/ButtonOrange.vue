<script>
import './button-orange.scss';

export default {
  name: "ButtonOrange",
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
    },

    disableButton: {
      required: true,
      type: Boolean,
      default: false,
    }
  },


}
</script>

<template>
  <button>

  </button>
</template>

<style scoped lang="scss">

</style>