<script>
import './login-page.scss';
import '@/assets/main-scss/theme-color.scss';
import RouterManagement from "@/routers/RouterManagement.js";
import ButtonBlue from "@/components/button/button-blue/ButtonBlue.vue";
import TextInvalid from "@/components/span/TextInvalid.vue";
import PasswordManagement from "@/manage-data/PasswordManagement.js";
import StudentLocalStorage from "@/local-storage/StudentLocalStorage.js";
import {StudentAccount} from "@/models/StudentAccount.js";

export default {
  name: "LoginPage",

  components: {
    TextInvalid,
    ButtonBlue

  },

  beforeCreate() {

  },

  created() {
    this.saveRouterPath(this.getRoute());
    this.getStatusCheckBoxRememberMe();
  },

  mounted() {

  },

  data() {
    return {
      studentID: null,
      password: null,
      validateLogin: null,
      rememberMe: false,
      loadingButtonLogin: false,
      textButtonLogin: 'Đăng nhập',
    }
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

    //lock paste
    preventPaste(event) {
      event.preventDefault();
    },

    setInputStudentID() {
      // Chỉ cho phép các ký tự số
      this.studentID = this.studentID.replace(/[^0-9]/g, '');
      if(!this.studentID){
        this.validateLogin = null;
      } else {
        this.validateLogin = null;
      }
    },

    setInputPassword() {
      if(this.password){
        this.validateLogin = null;
      } else {
        this.validateLogin = null;
      }
    },

    async fetchAccountStudent(studentID, password) {

    },

    navigateToRegisterCoursesPage() {
      //save path to local storage
    },

    loadButtonLogin() {
      this.loadingButtonLogin = true;
      this.textButtonLogin = null;
    },

    stopLoadButtonLogin() {
      this.loadingButtonLogin = false;
      this.textButtonLogin = 'Đăng nhập';
    },

    async handleLoginEvent() {
      const nullFieldInput = !this.studentID || !this.password;
      if (nullFieldInput) {
        this.validateLogin = 'Vui lòng nhập đầy đủ thông tin.';
      } else {
        this.loadButtonLogin();
        const passwordManagement = new PasswordManagement(this.password.trim());
        let passwordHashed = await passwordManagement.sha512Hash();
        try {
          let studentFetched = await this.fetchAccountStudent(
              this.studentID.trim(),
              passwordHashed);
          if(!studentFetched) {
            this.validateLogin = 'Mã số sinh viên hoặc mật khẩu không đúng.';
            this.stopLoadButtonLogin();
          } else {
            //save remember me
            if(this.rememberMe === true) {
              this.saveDataInputToLocalStorage();
            }
            //save student id to local storage

            //navigateToRegisterCoursesPage()

          }
        } catch(error) {
          this.validateLogin = error;
          this.stopLoadButtonLogin();
        }
      }
      //Mã số sinh viên hoặc mật khẩu không đúng.
    },

    saveDataInputToLocalStorage() {
      const studentLocalStorage = new StudentLocalStorage();
      studentLocalStorage.saveLocalStorageRememberMe(
          this.studentID.trim(),
          this.password.trim());
    },

    getStatusCheckBoxRememberMe() {
      /* neu local storage có save thì true ngược lại thì false */
      /* neu tru thi set input*/
      const studentLocalStorage = new StudentLocalStorage();
      let studentFetched = studentLocalStorage
          .getLocalStorageRememberMe();
      if(!studentFetched) {
        this.rememberMe = false;
      } else {
        this.rememberMe = true;
        this.setDataInputFromLocalStorage(studentFetched);
      }
    },

    setDataInputFromLocalStorage(studentFetched) {
      if(studentFetched) {
        let studentID = studentFetched.studentID;
        let password = studentFetched.password;
        const studentAccount = new StudentAccount(studentID, password);
        console.log(studentAccount.toString());
        this.studentID = studentAccount.getStudentID();
        this.password = studentAccount.getPassword();
      }
    }
  },

  computed: {},
}
</script>

<template>
  <div class="container-form-login-page">
    <div class="form-login">
      <h4 class="title-login">Đăng nhập hệ thống</h4>

      <div class="form-floating mb-3 style-input-login">
        <input type="text" class="form-control"
               id="floatingInputStudentID"
               placeholder="Mã sinh viên (nhập số)"
               @input="setInputStudentID"
               v-model="studentID"
               maxlength="10"
        >
        <label for="floatingInputStudentID">Mã sinh viên (nhập số)</label>
      </div>

      <div class="form-floating mb-3 style-input-login">
        <input type="password"
               class="form-control"
               id="floatingInputPassword"
               placeholder="Mật khẩu"
               @input="setInputPassword"
               v-model="password"
               @paste="preventPaste($event)"
               maxlength="20"
        >
        <label for="floatingInputPassword">Mật khẩu</label>
      </div>
      <TextInvalid :text-span="validateLogin"/>
      <div class="box-remember-me">
        <input
            type="checkbox"
            id="rememberMe"
            v-model="rememberMe"
            @change="saveDataInputToLocalStorage()"
            class="style-checkbox"
        />
        <span>Ghi nhớ đăng nhập</span>
      </div>

      <ButtonBlue class="btn-login" @click="handleLoginEvent()"
                  :text-button="textButtonLogin"
                  :loading-button="loadingButtonLogin"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>