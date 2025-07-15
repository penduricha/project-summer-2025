<script>
import './table-list-courses.scss';
import './table-list-subjects-size.scss';
import './event-row.scss';
import '../../../components/table/table-style.scss';

export default {
  name: "TableListCourses",

  components: {},

  data() {
    return {}
  },

  created() {

  },

  mounted() {
    //call api list subjects
    // => use polling and setInterval
    // => time: 2000 (2 seconds)
  },

  beforeDestroy() {

  },

  //function set trạng thái cho hàng của môn học set scss,
  //mã nguồn class để truy cập scss
  /*
  :class="[
          'border-color-button-choose', setBorderColorChoose(index),
           'button-color-saved', setButtonColorSavedCode(index),]"
  setBorderColorChoose() {
        return (index) => {
          return (index === this.indexQuestion)
              ? 'border-choose'
              : 'border-no-choose';
        };
      },
   */
  computed: {
    setBackgroundColorRowSubject(status) {

    }
  }
}
</script>

<template>
  <div class="view-box-table">
    <span class="text-title-ctk">CHƯƠNG TRÌNH KHUNG</span>
    <div class="view-table-list-subjects">
      <!-- Duyệt thành phần
        <table>
          <thead>
            <tr class="table-header-list-subjects">
              <th class="cell-table-list-subjects col-1">STT</th>
              <th class="cell-table-list-subjects col-2">Mã môn học</th>
              <th class="cell-table-list-subjects col-3">Tên môn học</th>
              <th class="cell-table-list-subjects col-4">Môn học cần học trước</th>
              <th class="cell-table-list-subjects col-5">Số tín chỉ</th>
              <th class="cell-table-list-subjects col-6">Số tiết lí thuyết</th>
              <th class="cell-table-list-subjects col-7">Số tiết thực hành</th>
              <th class="cell-table-list-subjects col-8">Đạt</th>
            </tr>
            </thead>

        </table>
      -->
      <table class="table-list-subjects">
        <thead>
        <tr class="table-header-list-subjects">
          <th class="cell-table-list-subjects col-1">STT</th>
          <th class="cell-table-list-subjects col-2">Mã môn học</th>
          <th class="cell-table-list-subjects col-3">Tên môn học</th>
          <th class="cell-table-list-subjects col-4">Môn học cần học trước</th>
          <th class="cell-table-list-subjects col-5">Số tín chỉ</th>
          <th class="cell-table-list-subjects col-6">Số tiết lí thuyết</th>
          <th class="cell-table-list-subjects col-7">Số tiết thực hành</th>
          <th class="cell-table-list-subjects col-8">Đạt</th>
        </tr>
        </thead>
        <thead>
        <tr class="row-semester">
          <th class="cell-semester cel-font-size-16" colspan="5">Học kỳ 1</th>
          <th class="cell-total-credit cel-font-size-16" colspan="3">Tổng số tín chỉ: 19</th>
        </tr>
        <tr class="row-title-compulsory-subject">
          <th class="cell-title-compulsory-subject" colspan="5">Học phần bắt buộc</th>
          <th class="cell-total-credit-compulsory-subject cel-font-size-16" colspan="3">Tổng số tín
            chỉ: 19
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">1</th>
          <th class="cell-table-col-subjects col-2">004247</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Nhập môn lập trình</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">30</th>
          <th class="cell-table-col-subjects col-7">30</th>
          <th class="cell-table-col-subjects col-8"></th>
        </tr>
        <tr class="row-item-subject row-item-subject-studying">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">2</th>
          <th class="cell-table-col-subjects col-2">013801</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Triết học Mác- Lênin</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">45</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8">
            <img src="../../../assets/images/icon-tick-x/green-tick.png" alt="green tick" class="style-icon-pass-fail">
          </th>
        </tr>
        <tr class="row-item-subject row-item-subject-studying">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">3</th>
          <th class="cell-table-col-subjects col-2">003801</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Toán giải tích</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">45</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8">
            <img src="../../../assets/images/icon-tick-x/red-x.png" alt="green tick" class="style-icon-pass-fail">
          </th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">4</th>
          <th class="cell-table-col-subjects col-2">016601</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">
            Thể chất và Quốc Phòng An Ninh
            <span style="font-size: 19px; color: red;">*</span>
          </th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">10</th>
          <th class="cell-table-col-subjects col-6">60</th>
          <th class="cell-table-col-subjects col-7">180</th>
          <th class="cell-table-col-subjects col-8"></th>
        </tr>
        </tbody>
        <!-- Học kì 2 nam 1-->
        <thead>
        <tr class="row-semester">
          <th class="cell-semester cel-font-size-16" colspan="5">Học kỳ 2</th>
          <!-- Bắt buộc + tự chọn-->
          <th class="cell-total-credit cel-font-size-16" colspan="3">Tổng số tín chỉ: 13</th>
        </tr>
        <tr class="row-title-compulsory-subject">
          <th class="cell-title-compulsory-subject" colspan="5">Học phần bắt buộc</th>
          <th class="cell-total-credit-compulsory-subject cel-font-size-16" colspan="3">Tổng số tín
            chỉ: 13
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">1</th>
          <th class="cell-table-col-subjects col-2">001782</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Kĩ thuật lập trình</th>
          <th class="cell-table-col-subjects col-4">Nhập môn lập trình</th>
          <th class="cell-table-col-subjects col-5">4</th>
          <th class="cell-table-col-subjects col-6">45</th>
          <th class="cell-table-col-subjects col-7">30</th>
          <th class="cell-table-col-subjects col-8"></th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">2</th>
          <th class="cell-table-col-subjects col-2">001923</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Mạng máy tính</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">45</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8">
            <!--            <img src="../../../assets/images/icon-tick-x/green-tick.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">3</th>
          <th class="cell-table-col-subjects col-2">004350</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Xác suất thống kê với python</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">30</th>
          <th class="cell-table-col-subjects col-7">30</th>
          <th class="cell-table-col-subjects col-8">
            <!--            <img src="../../../assets/images/icon-tick-x/red-x.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">4</th>
          <th class="cell-table-col-subjects col-2">004196</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">
            Quản lí dự án cntt
          </th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">45</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8"></th>
        </tr>
        </tbody>

        <!-- Học kì 3 nam 1 hoc he-->
        <thead>
        <tr class="row-semester">
          <th class="cell-semester cel-font-size-16" colspan="5">Học kỳ 3</th>
          <!-- Bắt buộc + tự chọn-->
          <th class="cell-total-credit cel-font-size-16" colspan="3">Tổng số tín chỉ: 15</th>
        </tr>
        <tr class="row-title-compulsory-subject">
          <th class="cell-title-compulsory-subject" colspan="5">Học phần bắt buộc</th>
          <th class="cell-total-credit-compulsory-subject cel-font-size-16" colspan="3">Tổng số tín
            chỉ: 15
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">1</th>
          <th class="cell-table-col-subjects col-2">013802</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Kinh tế chính trị Mác - Lênin</th>
          <th class="cell-table-col-subjects col-4">Triết học Mác- Lênin</th>
          <th class="cell-table-col-subjects col-5">2</th>
          <th class="cell-table-col-subjects col-6">30</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8"></th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">2</th>
          <th class="cell-table-col-subjects col-2">013803</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Chủ nghĩa xã hội khoa học</th>
          <th class="cell-table-col-subjects col-4">Triết học Mác- Lênin</th>
          <th class="cell-table-col-subjects col-5">2</th>
          <th class="cell-table-col-subjects col-6">30</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8">
            <!--            <img src="../../../assets/images/icon-tick-x/green-tick.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">3</th>
          <th class="cell-table-col-subjects col-2">001288</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Tư tưởng Hồ Chí Minh</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">2</th>
          <th class="cell-table-col-subjects col-6">30</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8">
            <!--            <img src="../../../assets/images/icon-tick-x/green-tick.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">4</th>
          <th class="cell-table-col-subjects col-2">003595</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Đại số tuyến tính</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">45</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8">
            <!--            <img src="../../../assets/images/icon-tick-x/red-x.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">5</th>
          <th class="cell-table-col-subjects col-2">015255</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Anh văn 1</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">6</th>
          <th class="cell-table-col-subjects col-6">60</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8">
            <!--            <img src="../../../assets/images/icon-tick-x/red-x.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        </tbody>

        <!--Hoc ki 4 ktpm-->
        <thead>
        <tr class="row-semester">
          <th class="cell-semester cel-font-size-16" colspan="5">Học kỳ 5</th>
          <!-- Bắt buộc + tự chọn-->
          <th class="cell-total-credit cel-font-size-16" colspan="3">Tổng số tín chỉ: 14</th>
        </tr>
        <tr class="row-title-compulsory-subject">
          <th class="cell-title-compulsory-subject" colspan="5">Học phần bắt buộc</th>
          <th class="cell-total-credit-compulsory-subject cel-font-size-16" colspan="3">Tổng số tín
            chỉ: 12
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">1</th>
          <th class="cell-table-col-subjects col-2">001508</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Cấu trúc rời rạc</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">45</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8"></th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">2</th>
          <th class="cell-table-col-subjects col-2">001611</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Cấu trúc dữ liệu và giải thuật</th>
          <th class="cell-table-col-subjects col-4">Nhập môn lập trình</th>
          <th class="cell-table-col-subjects col-5">4</th>
          <th class="cell-table-col-subjects col-6">45</th>
          <th class="cell-table-col-subjects col-7">30</th>
          <th class="cell-table-col-subjects col-8">
            <!--<img src="../../../assets/images/icon-tick-x/green-tick.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">3</th>
          <th class="cell-table-col-subjects col-2">001922</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Hệ cơ sở dữ liệu</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">30</th>
          <th class="cell-table-col-subjects col-7">30</th>
          <th class="cell-table-col-subjects col-8">
            <!--<img src="../../../assets/images/icon-tick-x/green-tick.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">4</th>
          <th class="cell-table-col-subjects col-2">004119</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Phương pháp lập trình hướng đối tượng</th>
          <th class="cell-table-col-subjects col-4"></th>
          <th class="cell-table-col-subjects col-5">3</th>
          <th class="cell-table-col-subjects col-6">45</th>
          <th class="cell-table-col-subjects col-7">0</th>
          <th class="cell-table-col-subjects col-8">
            <!--<img src="../../../assets/images/icon-tick-x/red-x.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        </tbody>

        <!-- Tự chon-->
        <thead>
        <tr class="row-title-compulsory-subject">
          <th class="cell-title-compulsory-subject" colspan="5">Học phần tự chọn</th>
          <th class="cell-total-credit-compulsory-subject cel-font-size-16" colspan="3">Tổng số tín
            chỉ: 2
          </th>
        </tr>
        </thead>

        <tbody>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">1</th>
          <th class="cell-table-col-subjects col-2">002876</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Lập trình hướng đối tượng với Java</th>
          <th class="cell-table-col-subjects col-4">Nhập môn lập trình</th>
          <th class="cell-table-col-subjects col-5">2</th>
          <th class="cell-table-col-subjects col-6">0</th>
          <th class="cell-table-col-subjects col-7">60</th>
          <th class="cell-table-col-subjects col-8"></th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">2</th>
          <th class="cell-table-col-subjects col-2">002990</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Lập trình hướng đối tượng với Javascript</th>
          <th class="cell-table-col-subjects col-4">Nhập môn lập trình</th>
          <th class="cell-table-col-subjects col-5">2</th>
          <th class="cell-table-col-subjects col-6">0</th>
          <th class="cell-table-col-subjects col-7">60</th>
          <th class="cell-table-col-subjects col-8">
            <!--<img src="../../../assets/images/icon-tick-x/green-tick.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        <tr class="row-item-subject">
          <!-- <td class="cell-table-list-subjects"></td> -->
          <th class="cell-table-col-subjects col-1">3</th>
          <th class="cell-table-col-subjects col-2">004021</th>
          <th class="cell-table-col-subjects col-3 cel-col-name">Lập trình hướng đối tượng với Php</th>
          <th class="cell-table-col-subjects col-4">Nhập môn lập trình</th>
          <th class="cell-table-col-subjects col-5">2</th>
          <th class="cell-table-col-subjects col-6">0</th>
          <th class="cell-table-col-subjects col-7">60</th>
          <th class="cell-table-col-subjects col-8">
            <!--<img src="../../../assets/images/icon-tick-x/green-tick.png" alt="green tick" class="style-icon-pass-fail">-->
          </th>
        </tr>
        </tbody>

        <tfoot>
        <tr class="row-title-compulsory-subject border-bottom-blue">
          <th class="cell-title-compulsory-subject" colspan="5">Tổng số tín chỉ của ngành</th>
          <th class="cell-total-credit-compulsory-subject cel-font-size-16" colspan="3">124</th>
        </tr>
        <tr class="row-title-compulsory-subject border-bottom-blue">
          <th class="cell-title-compulsory-subject" colspan="5">Tổng số tín chỉ bắt buộc</th>
          <th class="cell-total-credit-compulsory-subject cel-font-size-16" colspan="3">95</th>
        </tr>
        <tr class="row-title-compulsory-subject border-bottom-blue">
          <th class="cell-title-compulsory-subject" colspan="5">Tổng số tín chỉ tự chọn</th>
          <th class="cell-total-credit-compulsory-subject cel-font-size-16" colspan="3">29</th>
        </tr>
        <tr class="row-title-compulsory-subject border-bottom-blue">
          <th class="cell-title-compulsory-subject text-note-red-star" colspan="8">Ghi chú: Môn học có dấu
            <span style="font-size: 19px; color: red;">*</span>
            không được tính vào trung bình chung tích lũy.
          </th>
        </tr>
        <tr class="row-note-subject">
          <th class="text-note-subject" colspan="8">
            Môn đã hoặc đang học: <span class="style-icon-studying"></span>
            Đã đạt: <img src="../../../assets/images/icon-tick-x/green-tick.png"
                         alt="green tick"
                         class="style-icon-pass-fail resize-icon-pass-fail"
          >
            Không đạt: <img src="../../../assets/images/icon-tick-x/red-x.png" alt="green tick"
                            class="style-icon-pass-fail resize-icon-pass-fail">
          </th>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>