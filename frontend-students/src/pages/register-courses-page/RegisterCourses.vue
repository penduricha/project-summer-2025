<script>
import './register-courses.scss';
import RouterManagement from "@/routers/RouterManagement.js";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import CardAccountNav from "@/components/card-account-nav/CardAccountNav.vue";
import SectionRegisterCourses from "@/pages/register-courses-page/section-register-courses/SectionRegisterCourses.vue";

export default {
  name: "RegisterCourses",

  components: {
    SectionRegisterCourses,
    CardAccountNav,
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
    this.setTitlePage();
  },

  beforeDestroy() {

  },

  methods: {
    getRoute() {
      //ở đây có props thì phải thêm path của props
      return this.$route.path;
    },

    setTitlePage() {
      document.title = 'Đăng kí học phần';
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
  <section class="section-style-register-courses">
    <CardAccountNav/>
    <SectionRegisterCourses/>
  </section>
  <Footer/>
</template>

<style scoped lang="scss">

</style>