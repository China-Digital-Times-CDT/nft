<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <div class="text-center">
      <h3>User Logined</h3>
      <div class="text-center w-full my-4">
        <h3>
          <h3 class="my-4">User Key:</h3>

          <p>{{ this.$route.query.key }}</p>
        </h3>
      </div>
    </div>
    <!-- login section -->

    <!-- Blog  -->
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

export default {
  name: "MainBoard",
  data() {
    return {
      SectionData,
      userName: "",
      email: "",
      tokenAmount: 0,
      shares: 0,
    };
  },
  async mounted() {
    console.log("The key is: " + this.$route.query.key);
  },

  methods: {},
};
</script>
