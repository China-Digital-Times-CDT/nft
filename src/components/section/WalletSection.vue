<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <div class="row mt-5">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Wallet Address</label>
        </div>
        <!-- end col -->
        <div class="col-lg-8">
          <input
            type="text"
            id="displayUserName"
            class="form-control form-control-s1"
            value="wallet address"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Balance</label>
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
          <label for="displayName" class="form-label">Sat</label>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4">
          <button class="btn btn-primary" type="button">Deposit</button>
        </div>
        <div class="col-lg-4">
          <button class="btn btn-primary" type="button">Withdraw</button>
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
