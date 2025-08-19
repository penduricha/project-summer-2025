<script>
import './card-account-nav.scss';
import '../../assets/main-scss/theme-color.scss';
import StudentLocalStorage from "@/local-storage/StudentLocalStorage.js";
import ButtonOrange from "@/components/button/button-orange/ButtonOrange.vue";
import RouterManagement from "@/routers/RouterManagement.js";

export default {
  name: "CardAccountNav",

  components: {
    ButtonOrange

  },

  data() {
    return {
      textBtnLogout: 'Đăng xuất',
    }
  },

  created() {

  },

  mounted() {

  },

  methods: {
    handleLogout() {
      const studentLocalStorage = new StudentLocalStorage();
      studentLocalStorage.removeStudentIDFromLocalStorage();
      const pathLogin = '/login';
      const routerManagement = new RouterManagement();
      routerManagement.removePath_From_SessionStorage();
      routerManagement.removePath_From_LocalStorage();
      this.$router.replace({ path: pathLogin })
          .then(() => {
            // Delay the reload to ensure the navigation is completed
            // Adjust the timeout as needed
            setTimeout(() => {
              window.location.reload();
            }, 100);
          })
          .catch((error) => {
            console.error('Error navigating:', error);
            alert(error);
          });
    },

    handleNavigatePersonalInformation() {
      const path = '/information-student';
      this.$router.replace({
        path: path,
        // query: {
        // }
      }).catch((error) => {
        console.error('Error navigating :', error);
        alert(error);
      });
    },

    handleNavigateListSubjects(){
      const path = '/list-courses';
      this.$router.replace({
        path: path,
        // query: {
        // }
      }).catch((error) => {
        console.error('Error navigating :', error);
        alert(error);
      });
    },

    handleNavigateRegisterCourses() {
      const path = '/register-courses';
      this.$router.replace({
        path: path,
        // query: {
        // }
      }).catch((error) => {
        console.error('Error navigating :', error);
        alert(error);
      });
    }
  },

  computed: {

  }
}
</script>

<template>
  <div class="div-account-nav">
    <div class="div-card-account-image">
      <div class="card-text-account">
        <span class="text-card">Họ và tên: Trần An</span>
        <span class="text-card">Mã số sinh viên: 21026043</span>
        <span class="text-card">Giới tính: Nam</span>
        <span class="text-card">Trạng thái: Đang học</span>
        <ButtonOrange :disable-button="false"
                      :loading-button="false"
                      :text-button="textBtnLogout"
                      class="btn-logout"
                      @click="handleLogout"
        />
      </div>
      <div class="card-image">
        <img src="../../assets/images/avatar_student.png"
             alt="avatar student"
             class="style-img-ava-student"
        >
      </div>
    </div>
    <nav class="nav-bar-items">
      <ul>
        <li>
          <a href="" class="text-nav"
             @click.prevent="handleNavigatePersonalInformation()"
          >Thông tin cá nhân</a>
        </li>
        <li>
          <a href="" class="text-nav"
             @click.prevent="handleNavigateRegisterCourses()"
          >Đăng kí học phần</a>
        </li>
        <li>
          <a href="" class="text-nav"
             @click.prevent="handleNavigateListSubjects()"
          >Chương trình khung</a>
        </li>
        <li>
          <a href="" class="text-nav">Lịch học</a>
        </li>
        <li>
          <a href="" class="text-nav">Học phí</a>
        </li>
        <li>
          <a href="" class="text-nav">Điểm học phần</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">

</style>