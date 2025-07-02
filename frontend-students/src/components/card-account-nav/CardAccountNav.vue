<script>
import './card-account-nav.scss';
import '../../assets/main-scss/theme-color.scss';
import StudentLocalStorage from "@/local-storage/StudentLocalStorage.js";

export default {
  name: "CardAccountNav",

  components: {

  },

  data() {
    return {

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
      this.$router.replace({
        path: pathLogin,
        // query: {
        // }
      }).catch((error) => {
        console.error('Error navigating :', error);
        alert(error);
      });
    },
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
        <button class="btn-logout" @click="handleLogout()">Đăng xuất</button>
      </div>
      <div class="card-image">
        <img src="../../assets/images/avatar-student.png"
             alt="avatar student"
             class="style-img-ava-student"
        >
      </div>
    </div>
    <nav class="nav-bar-items">
      <ul>
        <li>
          <a href="" class="text-nav">Thông tin cá nhân</a>
        </li>
        <li>
          <a href="" class="text-nav">Đăng kí học phần</a>
        </li>
        <li>
          <a href="" class="text-nav">Chương trình khung</a>
        </li>
        <li>
          <a href="" class="text-nav">Lịch học</a>
        </li>
        <li>
          <a href="" class="text-nav">Học phí</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">

</style>