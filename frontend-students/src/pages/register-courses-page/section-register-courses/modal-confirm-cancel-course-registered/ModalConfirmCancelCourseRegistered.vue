<script>
import './modal-comfirm-cancel-course-registered.scss';
export default {
  name: "ModalConfirmCancelCourseRegistered",

  data() {
    return {

    }
  },

  props: {

  },

  created() {

  },

  mounted() {

  },

  methods: {
    handleCancelCourseRegistered() {

    }
  },

  computed: {

  }
}
</script>

<template>
  <div class="modal fade"  id="modal-cancel-course-registered" tabindex="-1" aria-labelledby="cancelConfirmModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content style-div-modal-cancel-course-registered">
        <div class="modal-header text-center style-modal-header">
          <!-- Thay the api field ten mon hoc-->
          <img src="../../../../assets/images/icon-tick-x/exclamation_mark.jpg"
               alt = "Exclamation mark"
               class="style-img-exclamation-mark">
        </div>
        <div class="modal-body text-center" >
          <span class="text-title-modal-cancel-course-registered">Bạn có chắc chắn muốn hủy môn học Kĩ thuật lập trình.</span>
        </div>
        <div class="modal-footer d-flex justify-content-center border-0 style-modal-footer">
          <button type="button" class="style-btn-confirm-cancel"
                  @click="handleCancelCourseRegistered"
          >Hủy môn</button>
          <button type="button" class="style-btn-confirm-no-cancel" data-bs-dismiss="modal">Không hủy môn</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>