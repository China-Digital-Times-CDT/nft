<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>

    <section class="user-panel-section section-space">
      <div class="container">
        <div class="row">
          <!-- user sidebar -->
          <UserSidebar
            :title="$tm('offerSidebarData.title')"
            :lists="$tm('offerSidebarData.navList')"
            :navs="$tm('offerTabNavMobile')"
          ></UserSidebar>
          <!-- offer -->
          <WalletSection></WalletSection>
          <!-- end row -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end user-panel-section -->
    <!-- login section -->

    <!-- Blog  -->
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
//import axios from "axios";

export default {
  name: "WalletBoard",
  data() {
    return {
      SectionData,
      userName: "",
    };
  },

  async mounted() {},

  methods: {},
};
</script>
