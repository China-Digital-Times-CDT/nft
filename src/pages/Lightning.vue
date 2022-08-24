<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>

    <!-- login section -->
    <p v-if="this.el != null" v-html="this.el.innerHTML"></p>

    <!-- Blog  -->
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import axios from "axios";

export default {
  name: "MainBoard",
  data() {
    return {
      el: null,
    };
  },
  async mounted() {
    //   location.reload();
    await axios
      .get("https://gem.chinadigitaltimes.net/api")
      .then(async (response) => {
        console.log("api--response--auth-", response.data);
        this.el = document.createElement("html");
        this.el.innerHTML = response.data.toString();
        //var code = el.getElementsByTagName("code");
        //console.log("code-----", code[0]);
        // this.key = response.data.key;
        // console.log("key---auth", this.key);
        // if (this.key) {
        //   clearInterval(this.statusShedule);
        //   this.$router.push({
        //     path: "/mainboard",
        //     query: { key: this.key },
        //   });
        // }
      })
      .catch((error) => console.log(error));
  },

  methods: {},
};
</script>
