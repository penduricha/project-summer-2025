<script>
import Footer from "@/components/footer/Footer.vue";
import Header from "@/components/header/Header.vue";
import './page-404-not-found.scss';
import RouterManagement from "@/routers/RouterManagement.js";
import ButtonOrange from "@/components/button/button-orange/ButtonOrange.vue";
export default {
  name: "Page404NotFound",

  data() {
    return {
      textBtnReturn: 'Quay lại trang chủ',
    }
  },

  components: {
    ButtonOrange,
    Header,
    Footer,
  },

  created() {
    this.saveRouterPath(this.getRoute());
  },

  mounted() {
    this.setTitlePage();
  },

  methods: {
    setTitlePage() {
      document.title = '404 - Not Found';
    },

    getRoute() {
      //ở đây có props thì phải thêm path của props
      return this.$route.path;
    },

    saveRouterPath(route) {
      const routerManagement = new RouterManagement();
      routerManagement.savePath_To_SessionStorage(route);
    },

    handleReturnFrom404Page() {
      const pathReturn = '/';
      this.$router.replace({ path: pathReturn })
          .catch((error) => {
            console.error('Error navigating:', error);
            alert(error);
          });
    }
  },

  computed: {

  },
}
</script>

<template>
  <Header/>
  <section class="section-page-404">
    <div class="box-text-404-not-found">
      <h4>Ooops 404 - Không tìm thấy trang</h4>
      <ButtonOrange :disable-button="false"
                    :loading-button="false"
                    :text-button="textBtnReturn"
                    @click="handleReturnFrom404Page"
                    class="style-btn-return-from-not-found"
      />
    </div>
  </section>
  <Footer/>
</template>

<style scoped lang="scss">

</style>