<script>
import './information-page.scss';
import RouterManagement from "@/routers/RouterManagement.js";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import CardAccountNav from "@/components/card-account-nav/CardAccountNav.vue";
import '../../components/card-account-nav/card-account-nav.scss';
import '../../assets/main-scss/theme-color.scss';

export default {
  name: "InformationPage",

  components: {
    CardAccountNav,
    Header,
    Footer,
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
    this.setTitlePage();
  },

  beforeDestroy() {

  },

  methods: {
    setTitlePage() {
      document.title = 'Thông tin sinh viên';
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
  <section class="section-page-information">
    <CardAccountNav/>
    <div class="div-account-nav div-detail-information" style="flex-direction: column">
      <h3 class="text-title-information">THÔNG TIN SINH VIÊN</h3>
      <div class="div-background-text-detail">
        <div class="div-text-detail-information">
          <span class="text-detail-information">Khoá: <b>17</b></span>
          <span class="text-detail-information">Hệ đào tạo: <b>Đại học</b></span>
          <span class="text-detail-information">Ngành: <b>Kĩ thuật phần mềm</b></span>
          <span class="text-detail-information">Khoa: <b>Công nghệ thông tin</b></span>
        </div>
        <div class="div-text-detail-information div-text-detail-information-flex-responsive">
          <span class="text-detail-information">Lớp: <b>DHKTPM17CTT</b></span>
          <span class="text-detail-information">Loại hình đào tạo: <b>Chất lượng cao</b></span>
          <span class="text-detail-information">Chuyên ngành: <b>Kĩ thuật phần mềm</b></span>
          <span class="text-detail-information">Cơ sở: <b>Cơ sở 1 (Thành phố Hồ Chí Minh)</b></span>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<style scoped lang="scss">
.div-detail-information {
  border-left: solid 4px var(--blue-card);
  flex-direction: column;
  padding-top: 1rem;
  gap: 1rem;
}

@media only screen and (max-width: 767px) {
  .section-page-information {
    padding-bottom: 1rem;
  }

  .div-detail-information {
    justify-content: start;
    align-items: center;
    height: 22.5rem;
  }

  .div-background-text-detail {
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 15rem;
    gap: 0.5rem;
  }

  .div-text-detail-information {
    flex: 1;
    justify-content: end;
  }

  .div-text-detail-information-flex-responsive {
    justify-content: start;
  }
}

@media only screen and (min-width: 767px) and (max-width: 1223px) {
  .section-page-information {
    padding-bottom: 1rem;
  }

  .div-detail-information {
    justify-content: start;
    align-items: center;
    height: 24.5rem;
  }

  .div-background-text-detail {
    display: flex;
    flex-direction: column;
    /* Thay đổi từ row thành column */
    width: 35rem;
    height: 15rem;
    gap: 0.5rem;
  }

  .div-text-detail-information {
    flex: 1;
    justify-content: end;
  }

  .div-text-detail-information-flex-responsive {
    justify-content: start;
  }
}

</style>