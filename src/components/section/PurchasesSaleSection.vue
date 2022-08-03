<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>{{ $t("purchaseAndSaleData.mainTitle") }}</h3>
    </div>
    <!-- end user-panel-title-box -->
    <div class="profile-setting-panel-wrap">
      <div class="tab-content mt-4 tab-content-desktop" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="purchases"
          role="tabpanel"
          aria-labelledby="purchases-tab"
        >
          <div class="profile-setting-panel">
            <div
              class="history-panel"
              v-for="item in $tm('purchaseAndSaleData.purchaseData')"
              :key="item.id"
            >
              <span class="history-panel-left">
                <em class="ni ni-money me-1"></em>
                <span v-html="item.title"></span>
              </span>
              <span
                class="history-panel-right ml-5"
                style="margin-left: 20px"
                >{{ item.dateText }}</span
              >
            </div>
            <!-- end history-panel -->
          </div>
          <!-- end profile-setting-panel -->
        </div>
        <!-- end tab-pane -->
      </div>
      <!-- end tab-content -->
    </div>
    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import SData from "@/store/sdata.js";
//import { get } from "lodash";

export default {
  name: "PurchasesSaleSection",
  data() {
    return {
      SectionData,
      SData,
      // purchaseAndSaleData: {
      //   mainTitle: get(
      //     this.$i18n.messages[this.$i18n.locale],
      //     "usrActivity.youractivity",
      //     ""
      //   ),
      //   purchaseData: [
      //     {
      //       id: 1,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.title1",
      //         ""
      //       ),
      //       dateText: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.dateText",
      //         ""
      //       ),
      //     },
      //     {
      //       id: 2,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.title2",
      //         ""
      //       ),
      //       dateText: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.dateText",
      //         ""
      //       ),
      //     },
      //     {
      //       id: 3,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.title3",
      //         ""
      //       ),
      //       dateText: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.dateText",
      //         ""
      //       ),
      //     },
      //     {
      //       id: 4,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.title4",
      //         ""
      //       ),
      //       dateText: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.dateText",
      //         ""
      //       ),
      //     },
      //     {
      //       id: 5,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.title1",
      //         ""
      //       ),
      //       dateText: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.dateText",
      //         ""
      //       ),
      //     },
      //     {
      //       id: 6,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.title2",
      //         ""
      //       ),
      //       dateText: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.dateText",
      //         ""
      //       ),
      //     },
      //     {
      //       id: 7,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.title3",
      //         ""
      //       ),
      //       dateText: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.dateText",
      //         ""
      //       ),
      //     },
      //     {
      //       id: 8,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.title4",
      //         ""
      //       ),
      //       dateText: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "usrActivity.dateText",
      //         ""
      //       ),
      //     },
      //   ],
      // },
    };
  },
};
</script>
