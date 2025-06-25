import LoginPage from "@/pages/login-page/LoginPage.vue";
import RegisterCourses from "@/pages/register-courses-page/RegisterCourses.vue";


const routers = [
    // '/' khi init trang, prop param de truyen tham so.
    { path: '/', component: LoginPage },
    { path: '/login', component: LoginPage },
    { path: '/register-courses', component: RegisterCourses },
];
export default routers;