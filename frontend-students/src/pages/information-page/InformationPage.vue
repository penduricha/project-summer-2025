<script>
import './information-page.scss';
import RouterManagement from "@/routers/RouterManagement.js";
export default {
  name: "InformationPage",

  components: {

  },

  data() {
    return {

    }
  },

  created() {
    this.saveRouterPath(
        this.getRoute()
    );
  },

  mounted() {

  },

  beforeDestroy() {

  },

  methods: {
    getRoute() {
      //ở đây có props thì phải thêm path của props
      return this.$route.path;
    },

    saveRouterPath(route) {
      const routerManagement = new RouterManagement();
      routerManagement.savePath_To_SessionStorage(route);
    },
  },

  computed: {

  }
}
</script>

<template>

</template>

<style scoped lang="scss">

</style>