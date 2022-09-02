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
      userName: "",
      email: "",
      tokenAmount: 0,
      shares: 0,
    };
  },
  async mounted() {
    console.log("code---", this.$route.query.code);
    await axios
      .get(
        "https://gem.chinadigitaltimes.net/api/oauth-callback?code=" +
          this.$route.query.code
      )
      .then(async (response) => {
        console.log("api--response---", response.data.token);
        localStorage.setItem("authId", response.data.token);
        console.log("Successfully logged in--token!", response.token);

        await axios
          .get(
            "https://gem.chinadigitaltimes.net/api/user?token=" +
              response.data.token
          )
          .then((response) => {
            console.log("api--response---mainboard", response.data);
            this.userName = response.data.login;
            console.log("api--response--github-login", this.userName);

            this.email = response.data.email;
            localStorage.setItem("username", this.userName);
            this.updateUserWithGithub();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  },

  methods: {
    async updateUserWithGithub() {
      console.log("github_oid--------", this.userName);
      let pKey = localStorage.getItem("publickey");

      await axios
        .post("https://gem.chinadigitaltimes.net/api/updateUserWithGithub", {
          github_id: this.userName,
          public_key: pKey,
        })
        .then((response) => {
          console.log("updated github user", response.data);
          this.$router.replace({
            path: "/mainboard",
          });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
