<script>
import RouterManagement from "@/routers/RouterManagement.js";
import Header from "@/components/header/Header.vue";
import CardAccountNav from "@/components/card-account-nav/CardAccountNav.vue";
import Footer from "@/components/footer/Footer.vue";
import TableListCourses from "@/pages/list-courses/table-list-courses/TableListCourses.vue";
import './list-course.scss';
export default {
  name: "ListCourses",

  components: {
    Header,
    CardAccountNav,
    Footer,
    TableListCourses,
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
    setTitlePage() {
      document.title = 'Chương trình khung';
    },

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
  <section class="section-style-list-subjects">
    <CardAccountNav/>
    <TableListCourses />
  </section>
  <Footer/>
</template>

<style scoped lang="scss">

</style>