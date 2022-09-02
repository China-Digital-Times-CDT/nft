<template>
  <div class="col-lg-9 ps-xl-5">
    <div
      class="user-panel-title-box"
      v-if="
        this.$route.query.type != 'fund' &&
        this.$route.query.type != 'withdraw' &&
        this.invoiceValue == null
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
            v-model="this.balance"
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
      <div class="row mt-5">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Description</label>
        </div>
        <!-- end col -->
        <div class="col-lg-7">
          <input
            type="text"
            class="form-control form-control-s1"
            placeholder="Description"
            v-model="this.description"
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
        <InvoiceStatus :status="'Deposited  ' + this.amount + '  Satosis'" />
      </div>
    </div>
    <div
      class="user-panel-title-box"
      v-if="this.$route.query.type === 'withdraw'"
    >
      <div class="row mt-3">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Invoice</label>
        </div>
        <!-- end col -->
        <div class="col-lg-9">
          <input
            type="text"
            class="form-control form-control-s1"
            placeholder="withdraw Invoice"
            v-model="this.withdrawInvoice"
          />
        </div>
      </div>
      <div v-if="!this.withdraw_status && this.withdrawFlag">
        <InvoiceStatus status="Pending now" />
      </div>
      <div>
        <button
          class="btn btn-primary mt-5"
          type="button"
          @click.prevent="sendPayment"
        >
          Withdraw
        </button>
      </div>

      <div v-if="this.withdraw_status">
        <InvoiceStatus :status="'Sent  ' + this.withdrawAmount + ' Sats'" />
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
      balance: 0,
      withdrawInvoice: null,
      withdraw_status: false,
      withdrawAmount: 0,
      description: "",
      withdrawFlag: false,
    };
  },
  components: {
    QrcodeVue,
    InvoiceStatus,
  },
  async mounted() {
    // if (this.invoiceValue)
    //   this.statusShedule = setInterval(this.getPStatus, 10000);
    this.update_user();
  },
  methods: {
    add_withdraw_history: async function () {
      let pKey = localStorage.getItem("publickey");

      await axios
        .post("https://gem.chinadigitaltimes.net/api/addWalletHistory", {
          // amount: this.amount,
          public_key: pKey,
          deposited: false,
          withInvoice: this.withdrawInvoice,
        })
        .then((response) => {
          console.log("api--history---withdraw-----response---", response.data);
          this.withdrawAmount = response.data.amount;
          this.get_wallet_history();
        })
        .catch((error) => console.log(error));
    },
    sendPayment: async function () {
      this.withdrawFlag = true;
      let pKey = localStorage.getItem("publickey");
      if (pKey) {
        await axios
          .post("https://gem.chinadigitaltimes.net/api/sendPayment", {
            payment_request: this.withdrawInvoice,
          })
          .then((response) => {
            console.log("api--response---withdraw", response.data);
            if (response.data.state == "SUCCEEDED") {
              this.add_withdraw_history();
              this.withdrawInvoice = null;
              this.withdraw_status = true;
            }
          })
          .catch((error) => console.log(error));
      }
    },
    update_user: async function () {
      let pKey = localStorage.getItem("publickey");
      if (pKey) {
        await axios
          .post("https://gem.chinadigitaltimes.net/api/getUser", {
            public_key: pKey,
          })
          .then((response) => {
            console.log("api--response---", response.data);
            // this.githubName = response.data[0].username;
            console.log(
              "githubName--githubName--111-",
              response.data[0].tokenAmount
            );
            if (response.data.length > 0) {
              this.balance = response.data[0].tokenAmount;
            }
          })
          .catch((error) => console.log(error));
      }
    },
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
          description: this.description,
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
    add_history: async function (deposited) {
      let pKey = localStorage.getItem("publickey");

      await axios
        .post("https://gem.chinadigitaltimes.net/api/addWalletHistory", {
          amount: this.amount,
          public_key: pKey,
          deposited: deposited,
        })
        .then((response) => {
          console.log("api--history---response---", response.data);
          this.get_wallet_history();
        })
        .catch((error) => console.log(error));
    },
    get_wallet_history: async function () {
      let pKey = localStorage.getItem("publickey");
      var totalAmount = 0;

      await axios
        .post("https://gem.chinadigitaltimes.net/api/getWalletHistory", {
          public_key: pKey,
        })
        .then((response) => {
          console.log("api--all--history---response---", response.data);
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].deposited)
              totalAmount = totalAmount + response.data[i].amount;
            else totalAmount = totalAmount - response.data[i].amount;
          }
          console.log("totalAmount---", totalAmount);
          this.updateUserWithAmount(totalAmount);
        })
        .catch((error) => console.log(error));
    },
    async updateUserWithAmount(tokenAmount) {
      let pKey = localStorage.getItem("publickey");
      await axios
        .post("https://gem.chinadigitaltimes.net/api/updateUserWithAmount", {
          public_key: pKey,
          tokenAmount: tokenAmount,
        })
        .then((response) => {
          console.log("api--response---update--user", response.data);
          //this.invoiceValue = null;
          this.amount = 0;
          this.withdraw_status = false;
          this.paid = false;
          this.withdrawFlag = false;
          this.update_user();
          this.description = "";

          setTimeout(() => this.$router.replace({ path: "/wallet" }), 3000);
          // this.$router.replace({
          //   path: "/wallet",
          // });
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

            this.add_history(true);
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
