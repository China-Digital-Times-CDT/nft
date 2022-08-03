<template>
  <div class="container">
    <div class="section-space-sm">
      <div class="row">
        <div class="col-lg-3 col-md-9 me-auto">
          <div class="footer-item mb-5 mb-lg-0">
            <!-- <p class="my-4 footer-para" v-if="footerData.content">
              {{ footerData.content }}
            </p> -->
          </div>
          <!-- end footer-item -->
        </div>
        <!-- end col-lg-3 -->
        <div></div>
        <div class="col-lg-8">
          <div class="row g-gs">
            <div
              class="col-lg-4 col-md-4 col-sm-4"
              v-for="item in $tm('footerData.footerList')"
              :key="item.id"
            >
              <div class="footer-item">
                <h5 class="mb-4">{{ item.title }}</h5>
                <ul class="list-item list-item-s1">
                  <li v-for="(list, i) in item.navList" :key="i">
                    <router-link :to="list.path">{{ list.title }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
    <hr class="bg-white-slim my-0" />
    <div
      class="copyright-wrap d-flex flex-wrap py-3 align-items-center justify-content-between"
    >
      <p class="footer-copy-text py-2" v-html="$t('copyTitle')"></p>
      <!-- <ul class="list-item list-item-s1 list-item-inline">
        <li v-for="(list, i) in $tm('footerData.footerListTwo')" :key="i">
          <router-link :to="list.path">{{ list.title }}</router-link>
        </li>
      </ul> -->
    </div>
  </div>
  <!-- .container -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
//import { get } from "lodash";

export default {
  name: "FooterSection",
  data() {
    return {
      SectionData,
      // footerData: {
      //   content: get(
      //     this.$i18n.messages[this.$i18n.locale],
      //     "footer.content",
      //     ""
      //   ),
      //   footerList: [
      //     {
      //       id: 1,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "footer.CDToken",
      //         ""
      //       ),
      //       navList: [
      //         {
      //           title: get(
      //             this.$i18n.messages[this.$i18n.locale],
      //             "footer.explore",
      //             ""
      //           ),
      //           path: "explore",
      //         },
      //       ],
      //     },
      //     {
      //       id: 2,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "footer.myaccount",
      //         ""
      //       ),
      //       navList: [
      //         {
      //           title: get(
      //             this.$i18n.messages[this.$i18n.locale],
      //             "footer.profile",
      //             ""
      //           ),
      //           path: "profile",
      //         },
      //       ],
      //     },
      //     {
      //       id: 3,
      //       title: get(
      //         this.$i18n.messages[this.$i18n.locale],
      //         "footer.company",
      //         ""
      //       ),
      //       navList: [
      //         {
      //           title: get(
      //             this.$i18n.messages[this.$i18n.locale],
      //             "footer.Blog",
      //             ""
      //           ),
      //           path: "blog",
      //         },
      //         {
      //           title: get(
      //             this.$i18n.messages[this.$i18n.locale],
      //             "footer.Contact",
      //             ""
      //           ),
      //           path: "contact",
      //         },
      //       ],
      //     },
      //   ],
      // },
    };
  },
};
</script>
