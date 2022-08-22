<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <!-- login section -->
    <div class="text-center my-4">
      <div v-if="lnurlValue != null">
        <QrcodeVue :value="this.lnurlValue" :size="300"></QrcodeVue>
        <div class="text-center">
          <input
            type="text"
            placeholder="title"
            style="width: 700px; margin-top: 20px"
            v-model="lnurlValue"
          />
        </div>
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
import QrcodeVue from "qrcode.vue";

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
    };
  },
  components: {
    QrcodeVue,
  },
  async mounted() {
    console.log("code---", this.$route.query.code);
    await axios
      .get("https://gem.chinadigitaltimes.net/api/user/lnurl")
      .then(async (response) => {
        console.log("api--response---", response.data);
        localStorage.setItem("authId", response.data.token);
        console.log("Successfully logged in--token!", response.token);
        this.lnurlValue = response.data.encoded;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    copy_to_clipboard() {
      console.log("copied lnurl--", this.lnurlValue);

      navigator.clipboard.writeText(this.lnurlValue);
    },
  },
};
</script>
