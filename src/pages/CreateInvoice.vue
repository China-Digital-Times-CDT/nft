<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <h3>{{ $t("invoicedetails.ordernumber") }}</h3>
    <h3 style="text-align: center; width: 100%">
      c2db514b-20d4-41f2-98ef-a70cbf1921ab
    </h3>
    <h4 class="mt-4">
      {{ $t("invoicedetails.total") }}
      <u
        ><b>{{ this.$route.query.amount }} Satoshis</b></u
      >{{ $t("invoicedetails.valid") }}
      <u
        ><b id="order_expiry_description">{{ $t("invoicedetails.time") }}</b></u
      >
    </h4>
    <h4 class="mt-4">
      {{ $t("invoicedetails.des1") }}
    </h4>
    <h4 class="mt-4">{{ $t("invoicedetails.des2") }}</h4>
    <fieldset
      style="max-width: 25rem; margin-left: 50px; border: double; padding: 11px"
      class="mt-4 text-center mb-4"
    >
      <legend>{{ $t("invoicedetails.paywith") }}</legend>
      <div id="lightning-svg">
        <textarea
          id="lightning-uri"
          rows="5"
          style="
            word-break: break-all;
            font-family: monospace;
            resize: none;
            width: 100%;
            box-sizing: border-box;
          "
          readonly=""
          v-model="invoiceValue"
        ></textarea>
        <button
          type="button"
          id="lightning-uri-button"
          onclick="copy_to_clipboard('lightning-uri')"
        >
          {{ $t("invoicedetails.copyclipboard") }}
        </button>
        <button type="button">{{ $t("invoicedetails.openwallet") }}</button>
      </div>
    </fieldset>
    <!-- Footer  -->
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetail",
  data() {
    return {
      invoiceValue: null,
      r_hash: null,
      payment_status: "",
      statusShedule: null,
    };
  },
  async mounted() {
    // alert(" file type not allowed, Please upload jpg, JPG, JPEG, or png file");

    // const route = useRoute();
    console.log(
      "The amount is: " + this.$route.query.amount,
      this.$route.query.description
    );
    await axios
      .post("https://gem.chinadigitaltimes.net/api/create-invoice", {
        amount: this.$route.query.amount,
        description: this.$route.query.description,
      })
      .then((response) => {
        console.log("api--response---", response.data.payment_request);

        this.invoiceValue = response.data.payment_request;
        this.r_hash = response.data.r_hash;
        console.log("r_hash----", this.r_hash);
      })
      .catch((error) => console.log(error));

    this.statusShedule = setInterval(this.getPStatus, 10000);
  },
  methods: {
    async getPStatus() {
      console.log("getstatus-----");
      await axios
        .post("https://gem.chinadigitaltimes.net/api/get-invoice-status", {
          r_hash: this.r_hash,
        })
        .then((response) => {
          console.log("api--response---", response.data);

          this.payment_status = response.data.body.state;
          console.log("status---", this.payment_status);
          //this.$alert(this.payment_status);
          if (
            this.payment_status == "SETTLED" ||
            this.payment_status == "SUCCESSEED"
          ) {
            clearInterval(this.statusShedule);

            console.log(
              "payment_successed----",
              this.$route.query.amount.toString()
            );
            alert(
              "payment was paid    " +
                this.$route.query.amount.toString() +
                " Satosis"
            );

            this.updateUser();
            this.$router.replace({
              path: "/dashboard",
            });
          }
        })
        .catch((error) => console.log(error));
    },

    async updateUser() {
      var uname = localStorage.getItem("username");
      await axios
        .post("https://gem.chinadigitaltimes.net/api/updateUser", {
          username: uname,
          shares: parseInt(this.$route.query.amount),
        })
        .then((response) => {
          console.log("api--response---update--user", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
