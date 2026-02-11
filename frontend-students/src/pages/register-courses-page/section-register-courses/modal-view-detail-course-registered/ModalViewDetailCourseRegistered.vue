<script>
import './modal-view-detail-course-registered.scss';
import './style-table-model-vdcourse-registered.scss';

export default {
  name: "ModalViewDetailCourseRegistered",
  data() {
    return {}
  },

  props: {},

  created() {

  },

  mounted() {

  },

  methods: {},

  computed: {}
}
</script>

<template>
  <div class="modal fade" id="modal-view-detail-course-registered" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content style-div-modal-detail-course-registered">
        <div class="modal-header">
          <span class="text-title-modal-cancel-course-registered">Chi tiết lớp học phần</span>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body modal-body-detail-course-registered">
          <div class="box-table-view-detail-course-registered">
            <table class="table-view-detail-course-registered">
              <thead>
                <tr class="header-table-view-detail-course-registered">
                  <th class="cell-header-table-view-detail-course-registered col-table-view-detail-course-registered-1">STT</th>
                  <th class="cell-header-table-view-detail-course-registered col-table-view-detail-course-registered-2">Lịch học</th>
                  <th class="cell-header-table-view-detail-course-registered col-table-view-detail-course-registered-3">Nhóm TH</th>
                  <th class="cell-header-table-view-detail-course-registered col-table-view-detail-course-registered-4">Phòng</th>
                  <th class="cell-header-table-view-detail-course-registered col-table-view-detail-course-registered-5">Cơ sở</th>
                  <th class="cell-header-table-view-detail-course-registered col-table-view-detail-course-registered-6">Giảng viên</th>
                  <th class="cell-header-table-view-detail-course-registered col-table-view-detail-course-registered-7">Thời gian</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row-table-view-detail-course-registered">
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-1">1</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-2">LT - Thứ 2 (T1-T3)</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-3"></td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-4">B1.03</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-5">TP Hồ Chí Minh</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-6">Hồ Đắc Quán</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-7">6/1/2025 - 12/5/2025</td>
                </tr>
                <tr class="row-table-view-detail-course-registered">
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-1">2</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-2">TH - Thứ 2 (T4-T6)</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-3">1</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-4">H3.01</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-5">TP Hồ Chí Minh</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-6">Hồ Đắc Quán</td>
                  <td class="cell-table-view-detail-course-registered col-table-view-detail-course-registered-7">6/1/2025 - 21/5/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer"/>
      </div>
      <div/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>