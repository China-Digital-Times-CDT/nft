<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>

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
import axios from "axios";

export default {
  name: "Logout",
  data() {
    return {
      SectionData,
    };
  },

  async mounted() {
    await axios
      .get("https://gem.chinadigitaltimes.net/api/logout")
      .then((response) => {
        console.log("api--response---logout", response.data);
        localStorage.setItem("publickkey", "");

        this.$router.replace({
          path: "/",
        });
      })
      .catch((error) => console.log(error));
  },

  methods: {},
};
</script>
