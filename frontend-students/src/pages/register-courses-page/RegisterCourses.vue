<script>
import './register-courses.scss';
import RouterManagement from "@/routers/RouterManagement.js";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "RegisterCourses",

  components: {
    Header,
    Footer,
  },

  data() {
    return  {

    }
  },

  created() {
    this.saveRouterPath(this.getRoute());
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
  <Header/>

  <Footer/>
</template>

<style scoped lang="scss">

</style>