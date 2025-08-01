import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//import vue routers
import { createRouter, createWebHistory } from 'vue-router';

//import vuetify
//vuetify
//npm install vuetify@next @mdi/font
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import 'vuetify/dist/vuetify-labs.min.css';
const vuetify = createVuetify();
//font awesome
//import routers
// import routers from "@/routes/list-routes/routers.js";
// import RouterDao from "@/routes/RoutersDao.js";
// import LecturerLocalStorage from "@/pages/login/LecturerLocalStorage.js";

//import pie chart
import CanvasJSChart from '@canvasjs/vue-charts';
import StudentLocalStorage from "@/local-storage/StudentLocalStorage.js";
import RouterManagement from "@/routers/RouterManagement.js";
import routers from "@/routers/routers.js";

const app = createApp(App);
app.use(CanvasJSChart);
app.use(vuetify);

/*
        B1: Xet local storage student (Object)
        B2: Neu student local storage duoc luu => Trang dkhp neu nguoc lai thi vao Login
        B3: Khi dang xuat phai remove local storage
 */
function initPage(routers, routerPath) {
    const router = createRouter({
        // mode: 'history',
        history: createWebHistory(),
        routes: routers,
    });
    app.use(router);
    router.replace(routerPath).catch((error) => {
        console.error('Error navigating: ', error);
        //router.replace('/screen-404').catch(err => console.error(err));
    });
    //app.unmount();
    //app.use(Vue3GeoLocation);
    app.mount('#app')
}

function execute() {
    //duyet ko co field query path
    let paths = routers.map(router => router.path);
    console.log('Paths:',paths);
    const routerManagement = new RouterManagement();
    const studentLocalStorage = new StudentLocalStorage();
    const startPagePath = '/login';
    const checkPath_And_ID =
        routerManagement.getPath_From_LocalStorage() &&
        studentLocalStorage.getStudentID_From_LocalStorage_StudentID();
    const currentPath = window.location.pathname;
    // Lấy đường dẫn hiện tại
    // if (currentPath === '/') {
    //     // Nếu người dùng gõ đường dẫn chính, điều hướng đến đường dẫn từ LocalStorage
    /* xét thêm trường hợp nếu ko trong list routers thì sẽ navigate trang 404*/
    if (checkPath_And_ID && !routerManagement.getPath_From_SessionStorage()) {
        // Nếu có path từ LocalStorage và không có path từ SessionStorage
        // Điều hướng đến đường dẫn người dùng gõ
        if(currentPath === '/') {
            initPage(routers, routerManagement.getPath_From_LocalStorage());
        } else {
            initPage(routers, currentPath);
            //duyet ds routers neu ko co thi navigate den trang 404
        }
    } else {
        if (!routerManagement.getPath_From_SessionStorage()) {
            initPage(routers, startPagePath);
        } else {
            //viet them truong hop khi nguoi dung go
            let pathSession = routerManagement.getPath_From_SessionStorage();
            if(currentPath !== pathSession) {
                routerManagement.removePath_From_LocalStorage(pathSession);
                initPage(
                    routers,
                    currentPath
                );
            } else {
                initPage(
                    routers,
                    pathSession
                );
            }
        }
    }
}

//execute
execute();