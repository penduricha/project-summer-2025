import LoginPage from "@/pages/login-page/LoginPage.vue";
import RegisterCourses from "@/pages/register-courses-page/RegisterCourses.vue";
import InformationPage from "@/pages/information-page/InformationPage.vue";
import ListCourses from "@/pages/list-courses/ListCourses.vue";


const routers = [
    // '/' khi init trang, prop param de truyen tham so.
    { path: '/', component: LoginPage },
    { path: '/login', component: LoginPage },
    { path: '/register-courses', component: RegisterCourses },
    { path: '/information-student', component: InformationPage},
    { path: '/list-courses', component: ListCourses },
];
export default routers;