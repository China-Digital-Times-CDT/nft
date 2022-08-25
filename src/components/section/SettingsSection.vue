<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <div class="row mt-5">
        <div class="col-lg-2">
          <input
            type="text"
            id="displayUserName"
            class="form-control form-control-s1"
            value="20"
          />
        </div>
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Sat</label>
        </div>
        <!-- end col -->
        <div class="col-lg-2">
          <input
            type="text"
            id="displayUserName"
            class="form-control form-control-s1"
            value="20"
          />
        </div>
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Sat</label>
        </div>
        <div class="col-lg-2">
          <button class="btn btn-primary" type="button">New</button>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">2022/09/22</label>
        </div>
        <!-- end col -->
        <div class="col-lg-6">
          <input
            type="text"
            id="displayUserName"
            class="form-control form-control-s1"
            value="user name"
          />
        </div>
        <div class="col-lg-3">
          <button class="btn btn-primary" type="button">Revoke</button>
        </div>
      </div>

      <!-- end row -->
    </div>
    <!-- end user-panel-title-box -->

    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
export default {
  name: "ProfileSection",
  data() {
    return {
      SectionData,
    };
  },
};
</script>
