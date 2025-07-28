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

  computed: {

  },

  methods: {

  }
}
</script>

<template>
  <button class="button-orange">

  </button>
</template>

<style scoped lang="scss">

</style>