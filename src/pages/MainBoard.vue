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
    // await axios
    //   .get("https://gem.chinadigitaltimes.net/api/login")
    //   .then(async (response) => {
    //     console.log("api--response---", response.data);
    //     //let html = response.data;
    //     //console.log("href---", JSON.parse(response.data));

    //     this.el = document.createElement("html");
    //     this.el.innerHTML = response.data.toString();
    //     // var aaa = el.getElementsByTagName("a");
    //     // var img = el.getElementsByTagName("img");
    //     // this.qrImg = img[0].src;

    //     // console.log("222222222", aaa[0].href);
    //     // console.log("333333333", this.qrImg);
    //   })
    //   .catch((error) => console.log(error));
  },

  methods: {},
};
</script>
