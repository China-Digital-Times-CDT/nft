<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
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
  name: "Login",
  data() {
    return {
      SectionData,
    };
  },
  async mounted() {
    console.log("code---", this.$route.query.code);
    await axios
      .get(
        "http://34.84.155.121:8081/oauth-callback?code=" +
          this.$route.query.code
      )
      .then((response) => {
        console.log("api--response---", response.data.token);
        localStorage.setItem("authId", response.data.token);
        console.log("Successfully logged in--token!", response.token);

        this.$router.replace({
          path: "/dashboard",
        });
      })
      .catch((error) => console.log(error));
  },
};
</script>
