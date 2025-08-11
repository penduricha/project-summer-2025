<script>
import './section-register-courses.scss';
import './table-register-courses/table-col-choose-courses-style.scss';
import './table-register-courses/table-col-courses-registered.scss';
import './table-register-courses/table-col-details-course-style.scss';
import './table-register-courses/table-col-info-course-style.scss';
import './style-box-choose-register-course.scss';
import '../../../assets/main-scss/theme-color.scss';
import ModalConfirmCancelCourseRegistered
  from "@/pages/register-courses-page/section-register-courses/modal-confirm-cancel-course-registered/ModalConfirmCancelCourseRegistered.vue";
import ModalViewDetailCourseRegistered
  from "@/pages/register-courses-page/section-register-courses/modal-view-detail-course-registered/ModalViewDetailCourseRegistered.vue";

export default {
  name: "SectionRegisterCourses",
  components: {ModalViewDetailCourseRegistered, ModalConfirmCancelCourseRegistered},

  data() {
    return {
      semesterRegister: 'Học kỳ 1 2025-2026',
      optionChooseStatusCourse: 'Học mới',
      groupPractice: 1,
    }
  },

  created() {

  },

  mounted() {

  },

  beforeDestroy() {

  },

  methods: {
    handleSetModalViewCourse() {

    },

    handleOpenConfirmModal() {

    },
  },

  computed: {}
}
</script>

<template>
  <div class="view-section-register">
    <span class="text-title-page">ĐĂNG KÝ HỌC PHẦN</span>
    <div class="box-choose-register-course">
      <div class="box-choose-semester">
        <span class="text-choose-semester-course">Chọn học kỳ đăng ký</span>
        <select class="form-select style-select-register" v-model="semesterRegister">
          <option value="Học kỳ 1 2025-2026">Học kỳ 1 2025-2026</option>
          <option value="Học kỳ 2 2025-2026">Học kỳ 2 2025-2026</option>
        </select>
      </div>
      <div class="box-choose-course-new">
        <input type="radio" class="radio-choose-status-course" value="Học mới" v-model="optionChooseStatusCourse">
        <span class="text-choose-semester-course">Học mới</span>
      </div>
      <div class="box-choose-course-fail">
        <input type="radio" class="radio-choose-status-course" value="Học lại" v-model="optionChooseStatusCourse">
        <span class="text-choose-semester-course">Học lại</span>
      </div>
      <div class="box-choose-course-improve">
        <input type="radio" class="radio-choose-status-course" value="Học cải thiện" v-model="optionChooseStatusCourse">
        <span class="text-choose-semester-course">Học cải thiện</span>
      </div>
    </div>
    <div class="view-list-courses-to-register">
      <span class="text-title-to-register">MÔN HỌC PHẦN ĐANG CHỜ ĐĂNG KÝ</span>
      <table class="table-choose-register-course">
        <thead>
        <tr class="table-header-choose-register-course">
          <th class="cell-header-choose-register-course col-choose-register-course-1">Chọn môn</th>
          <th class="cell-header-choose-register-course col-choose-register-course-2">STT</th>
          <th class="cell-header-choose-register-course col-choose-register-course-3">Mã môn học</th>
          <th class="cell-header-choose-register-course col-choose-register-course-4">Tên môn học</th>
          <th class="cell-header-choose-register-course col-choose-register-course-5">Số tín chỉ</th>
          <th class="cell-header-choose-register-course col-choose-register-course-6">Bắt buộc</th>
          <th class="cell-header-choose-register-course col-choose-register-course-7">Môn học cần học trước</th>
        </tr>
        </thead>
        <tbody>
        <tr class="row-choose-register-course">
          <td class="cell-choose-register-course col-choose-register-course-1">
            <input type="radio" class="radio-choose">
          </td>
          <td class="cell-choose-register-course col-choose-register-course-2">1</td>
          <td class="cell-choose-register-course col-choose-register-course-3">2101405</td>
          <td class="cell-choose-register-course col-choose-register-course-4">Kĩ thuật lập trình</td>
          <td class="cell-choose-register-course col-choose-register-course-5">4</td>
          <td class="cell-choose-register-course col-choose-register-course-6">
            <img src="../../../assets/images/icon-tick-x/green_tick.png" alt="green tick"
                 class="style-icon-compulsory-sub">
          </td>
          <td class="cell-choose-register-course col-choose-register-course-7">Nhập môn lập trình</td>
        </tr>
        <tr class="row-choose-register-course">
          <td class="cell-choose-register-course col-choose-register-course-1">
            <input type="radio" class="radio-choose">
          </td>
          <td class="cell-choose-register-course col-choose-register-course-2">2</td>
          <td class="cell-choose-register-course col-choose-register-course-3">2101435</td>
          <td class="cell-choose-register-course col-choose-register-course-4">Mạng máy tính</td>
          <td class="cell-choose-register-course col-choose-register-course-5">3</td>
          <td class="cell-choose-register-course col-choose-register-course-6">
            <img src="../../../assets/images/icon-tick-x/green_tick.png" alt="green tick"
                 class="style-icon-compulsory-sub">
          </td>
          <td class="cell-choose-register-course col-choose-register-course-7"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="view-list-details-course-to-register">
      <div class="view-header-list-details-course-to-register">
        <span class="text-title-to-register">DANH SÁCH CÁC LỚP HỌC PHẦN ĐĂNG KÝ</span>
        <div class="view-check-box-list-details-diff-calendar">
          <input type="checkbox" class="checkbox-list-details-diff-calendar">
          <span class="text-title-list-details-diff-calendar">HIỂN THỊ LỚP HỌC KHÔNG TRÙNG LỊCH</span>
        </div>
      </div>
      <div class="view-section-list-details-course-to-register">
        <table class="table-list-details-course-to-register">
          <thead>
          <tr class="table-header-list-details-course-to-register">
            <th class="cell-header-list-details-course-to-register col-choose-register-course-1">Chọn lớp</th>
            <th class="cell-header-list-details-course-to-register col-choose-register-course-2">STT</th>
            <th class="cell-header-list-details-course-to-register col-choose-register-course-3">Lớp dự kiến</th>
            <th class="cell-header-list-details-course-to-register col-choose-register-course-4">Tên lớp học phần</th>
            <th class="cell-header-list-details-course-to-register col-choose-register-course-5">Sĩ số tối đa</th>
            <th class="cell-header-list-details-course-to-register col-choose-register-course-6">Đã đăng kí</th>
            <th class="cell-header-list-details-course-to-register col-choose-register-course-7">Trạng thái</th>
          </tr>
          </thead>
          <tbody>
          <tr class="row-choose-details-to-register">
            <td class="cell-choose-details-to-register col-choose-register-course-1">
              <input type="radio" class="radio-choose">
            </td>
            <td class="cell-choose-details-to-register col-choose-register-course-2">1</td>
            <td class="cell-choose-details-to-register col-choose-register-course-3">DHKTPM17ATT</td>
            <td class="cell-choose-details-to-register col-choose-register-course-4">Kĩ thuật lập trình</td>
            <td class="cell-choose-details-to-register col-choose-register-course-5">45</td>
            <td class="cell-choose-details-to-register col-choose-register-course-6">45</td>
            <td class="cell-choose-details-to-register col-choose-register-course-7">Chờ sinh viên đăng kí</td>
          </tr>
          <tr class="row-choose-details-to-register">
            <td class="cell-choose-details-to-register col-choose-register-course-1">
              <input type="radio" class="radio-choose">
            </td>
            <td class="cell-choose-details-to-register col-choose-register-course-2">2</td>
            <td class="cell-choose-details-to-register col-choose-register-course-3">DHKTPM17BTT</td>
            <td class="cell-choose-details-to-register col-choose-register-course-4">Kĩ thuật lập trình</td>
            <td class="cell-choose-details-to-register col-choose-register-course-5">45</td>
            <td class="cell-choose-details-to-register col-choose-register-course-6">40</td>
            <td class="cell-choose-details-to-register col-choose-register-course-7">Chờ sinh viên đăng kí</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="view-list-information-course-to-register">
      <!-- Chỉ hiển thị <div class="box-choose-class-practice">
          khi môn đó có phần thực hành -->
      <span class="text-title-to-register">THÔNG TIN LỚP HỌC PHẦN</span>
      <div class="box-choose-class-practice">
        <span class="text-choose-semester-course">Chọn nhóm thực hành</span>
        <select class="form-select style-select-register" v-model="groupPractice">
          <option value=1>1</option>
          <option value=2>2</option>
        </select>
      </div>
      <div class="view-table-information-course-to-register">
        <table class="table-information-course-to-register">
          <thead>
          <tr class="table-header-information-course-to-register">
            <th class="cell-header-information-course-to-register col-info-course-1">STT</th>
            <th class="cell-header-information-course-to-register col-info-course-2">Lịch học</th>
            <th class="cell-header-information-course-to-register col-info-course-3">Nhóm TH
            </th>
            <th class="cell-header-information-course-to-register col-info-course-4">Phòng</th>
            <th class="cell-header-information-course-to-register col-info-course-5">Cơ sở</th>
            <th class="cell-header-information-course-to-register col-info-course-6">Giảng viên</th>
            <th class="cell-header-information-course-to-register col-info-course-7">Thời gian</th>
            <th class="cell-header-information-course-to-register col-info-course-8">Sĩ số tối đa
            </th>
            <th class="cell-header-information-course-to-register col-info-course-9">Đã đăng kí</th>
          </tr>
          </thead>
          <tbody>
          <tr class="row-choose-information-course-to-register">
            <td class="cell-choose-information-course-to-register col-info-course-1">1</td>
            <td class="cell-choose-information-course-to-register col-info-course-2">LT - Thứ 2
              (T1-T3)
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-3"></td>
            <td class="cell-choose-information-course-to-register col-info-course-4">B1.03</td>
            <td class="cell-choose-information-course-to-register col-info-course-5">TP Hồ Chí Minh
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-6">Hồ Đắc Quán
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-7">6/1/2025 -
              12/5/2025
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-8">45</td>
            <td class="cell-choose-information-course-to-register col-info-course-9">45</td>
          </tr>
          </tbody>
          <tr class="row-choose-information-course-to-register">
            <td class="cell-choose-information-course-to-register col-info-course-1">2</td>
            <td class="cell-choose-information-course-to-register col-info-course-2">TH - Thứ 2
              (T4-T6)
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-3">1</td>
            <td class="cell-choose-information-course-to-register col-info-course-4">H3.01</td>
            <td class="cell-choose-information-course-to-register col-info-course-5">TP Hồ Chí Minh
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-6">Hồ Đắc Quán
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-7">6/1/2025 -
              21/5/2025
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-8">23</td>
            <td class="cell-choose-information-course-to-register col-info-course-9">23</td>
          </tr>
          <tr class="row-choose-information-course-to-register">
            <td class="cell-choose-information-course-to-register col-info-course-1">3</td>
            <td class="cell-choose-information-course-to-register col-info-course-2">TH - Thứ 2
              (T4-T6)
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-3">2</td>
            <td class="cell-choose-information-course-to-register col-info-course-4">H3.01</td>
            <td class="cell-choose-information-course-to-register col-info-course-5">TP Hồ Chí Minh
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-6">Lê Vũ Hạo</td>
            <td class="cell-choose-information-course-to-register col-info-course-7">6/1/2025 -
              21/5/2025
            </td>
            <td class="cell-choose-information-course-to-register col-info-course-8">22</td>
            <td class="cell-choose-information-course-to-register col-info-course-9">22</td>
          </tr>
          <tfoot>
            <tr class="table-footer-information-course-to-register">
              <td class="cell-footer-information-course-to-register" colspan="9">
                <p class="style-text-notice-block">
                  Nhóm TH: Nhóm thực hành.<br>
                  Quy định về phòng học ở IUH.<br>
                  - Cú pháp tên phòng là: (Dãy nhà)+(Tầng).(Số phòng)<br>
                  - Ví dụ: B2.11 là nhà B, tầng 2, phòng 11.<br>
                  - Cơ sở Nguyễn Văn Bảo gồm dãy nhà: A, B, C, D, H, V, X. Địa chỉ: Số 12 Nguyễn Văn Bảo, phường 4, quận Gò Vấp.<br>
                  - Cơ sở Phạm Văn Chiêu gồm dãy nhà: P. Địa chỉ: Số 20 Đường số 53, phường 14, quận Gò Vấp.<br>
                  - Cơ sở Nguyễn Văn Dung gồm dãy nhà: N, M. Địa chỉ: Số 10 Nguyễn Văn Dung, phường 6, quận Gò Vấp.<br>
                  - Cơ sở Nhà thiếu nhi: CV. Địa chỉ: Số 27 Đường số 9, phường 16, quận Gò Vấp.<br>
                  <i>(Địa chỉ trên là địa chỉ trước khi sáp nhập)</i>
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <button class="style-button-register btn-register-allow">
        <!-- btn-register-disable or btn-register-allow-->
        Đăng kí môn học
      </button>
    </div>
    <div class="view-list-courses-registered">
      <span class="text-title-to-register">LỚP HỌC PHẦN ĐÃ ĐĂNG KÝ</span>
      <div class="box-btn-print-courses-registered">
        <button class="btn-print-courses-registered">
          <svg fill="white" height="100px" width="100px" id="Layer_1"
               class="style-svg-printer"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512" xml:space="preserve">
                            <g>
                                <g>
                                    <path d="M495.304,144.696h-83.478v-128C411.826,7.475,404.351,0,395.13,0H116.87c-9.22,0-16.696,7.475-16.696,16.696v128H16.696
                                        C7.475,144.696,0,152.171,0,161.391V395.13c0,9.22,7.475,16.696,16.696,16.696h83.478v83.478c0,9.22,7.475,16.696,16.696,16.696
                                        H395.13c9.22,0,16.696-7.475,16.696-16.696v-83.478h83.478c9.22,0,16.696-7.475,16.696-16.696V161.391
                                        C512,152.171,504.525,144.696,495.304,144.696z M133.565,33.391h244.87v111.304h-244.87V33.391z M378.435,478.609h-244.87V311.652
                                        h244.87V478.609z M478.609,378.435h-66.783v-83.478c0-9.22-7.475-16.696-16.696-16.696H116.87c-9.22,0-16.696,7.475-16.696,16.696
                                        v83.478H33.391V178.087h83.478H395.13h83.478V378.435z"/>
                                </g>
                            </g>
            <g>
                                <g>
                                    <path d="M329.461,346.156H184.765c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h144.696
			                            c9.22,0,16.696-7.475,16.696-16.696S338.681,346.156,329.461,346.156z"/>
                                </g>
                            </g>
            <g>
                                <g>
                                    <path d="M262.678,412.939h-77.913c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h77.913
			                            c9.22,0,16.696-7.475,16.696-16.696S271.899,412.939,262.678,412.939z"/>
                                </g>
                            </g>
            <g>
                                <g>
                                    <circle cx="362.852" cy="229.287" r="16.696"/>
                                </g>
                            </g>
            <g>
                                <g>
                                    <circle cx="429.635" cy="229.287" r="16.696"/>
                                </g>
                            </g>
                        </svg>
        </button>
      </div>
      <!--      <div class="dropdown">-->
      <!--        <button class="btn btn-secondary dropdown-toggle dropdown-menu-lg-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">-->
      <!--          Dropdown button-->
      <!--        </button>-->
      <!--        <ul class="dropdown-menu">-->
      <!--          <li><a class="dropdown-item" href="#">Action</a></li>-->
      <!--          <li><a class="dropdown-item" href="#">Another action</a></li>-->
      <!--          <li><a class="dropdown-item" href="#">Something else here</a></li>-->
      <!--        </ul>-->
      <!--      </div>-->
      <table class="table-list-courses-registered">
        <thead>
        <tr class="row-header-list-courses-registered">
          <th class="cell-header-list-courses-registered col-course-registered-1">Thao tác</th>
          <th class="cell-header-list-courses-registered col-course-registered-2">STT</th>
          <th class="cell-header-list-courses-registered col-course-registered-3">Mã môn học</th>
          <th class="cell-header-list-courses-registered col-course-registered-4">Tên môn học</th>
          <th class="cell-header-list-courses-registered col-course-registered-5">Lớp học dự kiến</th>
          <th class="cell-header-list-courses-registered col-course-registered-6">Số tín chỉ</th>
          <th class="cell-header-list-courses-registered col-course-registered-7">Nhóm TH</th>
          <th class="cell-header-list-courses-registered col-course-registered-8">Học phí</th>
          <th class="cell-header-list-courses-registered col-course-registered-9">Ngày đăng kí</th>
          <th class="cell-header-list-courses-registered col-course-registered-10">Trạng thái lớp học phần</th>
          <th class="cell-header-list-courses-registered col-course-registered-11">Thu</th>
        </tr>
        </thead>
        <tbody>
        <tr class="row-item-course-registered dropdown">
          <td class="cell-row-item-course-registered cursor-pointer">
            <img src="../../../assets/images/more_options.svg" alt="more option svg"
                 class="img-option-svg dropdown-toggle dropdown-menu-lg-end"
                 type="button" data-bs-toggle="dropdown" aria-expanded="false"
            >
            <ul class="dropdown-menu box-menu-drop-courses-registered">
              <li class="style-btn-view-course"
                  @click="handleSetModalViewCourse()"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-view-detail-course-registered"
              >
                <a class="dropdown-item">Xem môn học</a>
              </li>
              <!--Neu mon đã chap nhan mo lop hoac da khoa ko dc phep huy-->
              <li class="style-btn-cancel-register"
                  @click="handleOpenConfirmModal()"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-cancel-course-registered"
              >
                <a class="dropdown-item text-danger">Hủy đăng ký</a>
              </li>
            </ul>
          </td>
          <td class="cell-row-item-course-registered">1</td>
          <td class="cell-row-item-course-registered">2101405</td>
          <td class="cell-row-item-course-registered">Kĩ thuật lập trình</td>
          <td class="cell-row-item-course-registered">DHKTPM17ATT</td>
          <td class="cell-row-item-course-registered">4</td>
          <td class="cell-row-item-course-registered">1</td>
          <td class="cell-row-item-course-registered">4.000.000</td>
          <td class="cell-row-item-course-registered">10/12/2025</td>
          <!--Status: Đang lên kế hoạch, Chờ sv đăng kí, Chấp nhận mở lớp (có thể chèn), Đã khóa-->
          <td class="cell-row-item-course-registered">Chờ sinh viên đăng ký</td>
          <td class="cell-row-item-course-registered">
            <img src="../../../assets/images/icon-tick-x/red_x.png"
                 alt="img x-tick"
                 class="img-tick-x-fee">
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr class="row-footer-list-courses-registered">
          <td colspan="11" class="cell-footer-list-courses-registered">Tổng số tín chỉ đăng kí: 6</td>
        </tr>
        <tr class="row-footer-list-courses-registered">
          <td colspan="11" class="cell-footer-list-courses-registered">Tổng học phí: 6.000.000 VND</td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <modal-confirm-cancel-course-registered/>
  <modal-view-detail-course-registered/>
</template>

<style scoped lang="scss">
.style-svg-printer {
  object-fit: contain;
  width: 1.25rem;
  height: 1.25rem;
}
</style>