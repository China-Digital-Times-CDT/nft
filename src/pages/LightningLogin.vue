<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <!-- login section -->
    <div class="text-center my-4">
      <div v-if="this.qrImg != null">
        <!-- <QrcodeVue :value="this.lnurlValue" :size="300"></QrcodeVue>
        <div class="text-center">
          <input
            type="text"
            placeholder="title"
            style="width: 700px; margin-top: 20px"
            v-model="lnurlValue"
          />
        </div> -->
        <a id="qrcode" href="#"><img v-bind:src="this.qrImg" /></a>
        <button
          type="button"
          id="lightning-uri-button"
          class="mt-4"
          @click.prevent="copy_to_clipboard"
        >
          {{ $t("invoicedetails.copyclipboard") }}
        </button>
      </div>
    </div>
    <!-- Blog  -->
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";
//import QrcodeVue from "qrcode.vue";
// import { io } from 'socket.io-client';

export default {
  name: "Login",
  data() {
    return {
      SectionData,
      userName: "",
      email: "",
      tokenAmount: 0,
      shares: 0,
      lnurlValue: null,
      key: null,
      statusShedule: null,
      qrImg: null,
    };
  },
  components: {
    //  QrcodeVue,
  },
  async mounted() {
    console.log("code---", this.$route.query.code);
    // await axios
    //   .get("https://gem.chinadigitaltimes.net/api/user/lnurl")
    //   .then(async (response) => {
    //     console.log("api--response---", response.data);
    //     localStorage.setItem("authId", response.data.token);
    //     console.log("Successfully logged in--token!", response.token);
    //     this.lnurlValue = response.data.encoded;
    //   })
    //   .catch((error) => console.log(error));

    // this.statusShedule = setInterval(this.getUStatus, 1000);
    await axios
      .get("https://gem.chinadigitaltimes.net/api/login")
      .then(async (response) => {
        console.log("api--response---", response.data);
        //let html = response.data;
        //console.log("href---", JSON.parse(response.data));

        var el = document.createElement("html");
        el.innerHTML = response.data.toString();
        var aaa = el.getElementsByTagName("a");
        var img = el.getElementsByTagName("img");
        this.qrImg = img[0].src;

        console.log("222222222", aaa[0].href);
        console.log("333333333", this.qrImg);
      })
      .catch((error) => console.log(error));

    this.statusShedule = setInterval(this.getUStatus, 1000);
  },

  methods: {
    copy_to_clipboard() {
      console.log("copied lnurl--", this.lnurlValue);

      navigator.clipboard.writeText(this.lnurlValue);
    },
    async getUStatus() {
      await axios
        .get("https://gem.chinadigitaltimes.net/api")
        .then(async (response) => {
          console.log("api--response--auth-", response.data);
          this.key = response.data.key;
          console.log("key---auth", this.key);
          if (this.key) clearInterval(this.statusShedule);
          this.$router.push({
            path: "/mainboard",
            query: { key: this.key },
          });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
