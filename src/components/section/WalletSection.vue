<template>
  <div class="col-lg-9 ps-xl-5">
    <div
      class="user-panel-title-box"
      v-if="
        this.$route.query.type != 'fund' &&
        !this.$route.query.type != 'withdraw'
      "
    >
      <div class="row mt-5">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Wallet Address</label>
        </div>
        <!-- end col -->
        <div class="col-lg-8">
          <input
            type="text"
            id="displayUserName"
            class="form-control form-control-s1"
            value="wallet address"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Balance</label>
        </div>
        <!-- end col -->
        <div class="col-lg-6">
          <input
            type="text"
            id="displayUserName"
            class="form-control form-control-s1"
            value="user name"
          />
        </div>
        <div class="col-lg-3">
          <label for="displayName" class="form-label">Sat</label>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4">
          <button
            class="btn btn-primary"
            type="button"
            @click.prevent="deposit"
          >
            Deposit
          </button>
        </div>
        <div class="col-lg-4">
          <button
            class="btn btn-primary"
            type="button"
            @click.prevent="withdraw"
          >
            Withdraw
          </button>
        </div>
      </div>
      <!-- end row -->
    </div>
    <div
      class="user-panel-title-box"
      v-if="this.$route.query.type == 'fund' && invoiceValue == null"
    >
      <div class="row mt-5">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Amount</label>
        </div>
        <!-- end col -->
        <div class="col-lg-7">
          <input
            type="number"
            min="10"
            max="1000000"
            class="form-control form-control-s1"
            placeholder="Amount"
            v-model="this.amount"
          />
        </div>
      </div>
      <div>
        <button
          class="btn btn-primary mt-5"
          type="button"
          @click.prevent="create_invoice"
        >
          Generate Invoices
        </button>
      </div>
    </div>
    <div id="lightning-svg" class="text-center" v-if="invoiceValue != null">
      <div v-if="invoiceValue != null">
        <QrcodeVue :value="this.invoiceValue" :size="300"></QrcodeVue>
      </div>
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
        @click.prevent="copy_to_clipboard"
      >
        {{ $t("invoicedetails.copyclipboard") }}
      </button>
      <div v-if="!this.paid">
        <InvoiceStatus status="waiting for you" />
      </div>
      <div v-if="this.paid">
        <InvoiceStatus :status="'Deposited' + this.amount + 'Satosis'" />
      </div>
    </div>
    <!-- end user-panel-title-box -->

    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import QrcodeVue from "qrcode.vue";
import axios from "axios";
import InvoiceStatus from "../common/InvoiceStatus";

export default {
  name: "ProfileSection",
  data() {
    return {
      SectionData,
      amount: 0,
      invoiceValue: null,
      r_hash: null,
      payment_status: "",
      statusShedule: null,
      paid: false,
    };
  },
  components: {
    QrcodeVue,
    InvoiceStatus,
  },
  mounted() {
    // if (this.invoiceValue)
    //   this.statusShedule = setInterval(this.getPStatus, 10000);
  },
  methods: {
    deposit: function () {
      this.$router.replace({
        path: "/wallet",
        query: { type: "fund" },
      });
    },
    withdraw: function () {
      this.$router.replace({
        path: "/wallet",
        query: { type: "withdraw" },
      });
    },
    create_invoice: async function () {
      await axios
        .post("https://gem.chinadigitaltimes.net/api/create-invoice", {
          amount: this.amount,
          description: "",
        })
        .then((response) => {
          console.log("api--response---", response.data.payment_request);

          this.invoiceValue = response.data.payment_request;
          this.r_hash = response.data.r_hash;
          this.statusShedule = setInterval(this.getPStatus, 10000);
          console.log("r_hash----", this.r_hash);
        })
        .catch((error) => console.log(error));
    },
    copy_to_clipboard() {
      console.log("copied invoice--", this.invoiceValue);

      navigator.clipboard.writeText(this.invoiceValue);
    },
    add_history: async function () {
      let pKey = localStorage.getItem("publickey");

      await axios
        .post("https://gem.chinadigitaltimes.net/api/addWalletHistory", {
          amount: this.amount,
          public_key: pKey,
          deposited: true,
        })
        .then((response) => {
          console.log("api--history---response---", response.data);
        })
        .catch((error) => console.log(error));
    },
    async getPStatus() {
      console.log("getstatus-----");
      await axios
        .post("https://gem.chinadigitaltimes.net/api/get-invoice-status", {
          r_hash: this.r_hash,
        })
        .then((response) => {
          console.log("api--response---", response.data);

          this.payment_status = response.data.body.state;
          this.expiry = parseInt(response.data.body.expiry) / 60;
          console.log("status---", this.payment_status);
          console.log("expiry---", this.expiry);
          //this.$alert(this.payment_status);
          if (
            this.payment_status == "SETTLED" ||
            this.payment_status == "SUCCESSEED"
          ) {
            clearInterval(this.statusShedule);
            this.paid = true;

            this.add_history();
            // console.log(
            //   "payment_successed----",
            //   this.$route.query.amount.toString()
            // );
            // alert(
            //   "payment was paid    " +
            //     this.$route.query.amount.toString() +
            //     " Satosis"
            // );

            // this.updateUser();
            // this.$router.replace({
            //   path: "/dashboard",
            // });
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
