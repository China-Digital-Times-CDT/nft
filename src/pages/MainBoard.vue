<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <div class="text-center">
      <div class="text-center w-full my-4">
        <h3>
          <h3 class="my-4">You are now known as:</h3>

          <p>{{ this.$route.query.user_id }}</p>
        </h3>
      </div>
    </div>
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
          <ProfileSection></ProfileSection>
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
  name: "MainBoard",
  data() {
    return {
      SectionData,
      userName: "",
      email: "",
      tokenAmount: 0,
      shares: 0,
      el: null,
    };
  },

  async mounted() {
    console.log("The key is: " + this.$route.query.user_id);
    localStorage.setItem("publickey", this.$route.query.user_id);
  },

  methods: {},
};
</script>
