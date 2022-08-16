<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box mb-5">
      <h3>{{ this.userName }}'s {{ $t("paymentMethodData.title") }}</h3>
    </div>
    <!-- end user-panel-title-box -->
    <div class="profile-setting-panel-wrap">
      <div class="tab-content mt-4" id="myTabContent">
        <!-- end tab-pane -->
        <div
          class="tab-pane fade show active"
          id="prepaid-eth"
          role="tabpanel"
          aria-labelledby="prepaid-eth-tab"
        >
          <div class="profile-setting-panel">
            <h5 class="mb-2">{{ $t("prepaidData.title") }}</h5>
            <p class="mb-3 fs-14">{{ $t("prepaidData.content") }}</p>
            <p class="mb-3 fs-14">{{ $t("prepaidData.contentTwo") }}</p>
            <div class="d-flex align-items-center">
              <!-- <div
                class="me-5 text-black"
                v-for="item in $tm('prepaidData.balances')"
                :key="item.id"
              >
                <span class="fw-semibold fs-12 d-block mb-2">{{
                  item.title
                }}</span>
                <span class="fw-medium fs-9 mb-2">{{ this.tokenAmount }}</span>
                <span class="d-block">{{ this.shares }}</span>
              </div> -->
              <div class="me-5 text-black">
                <span class="fw-semibold fs-12 d-block mb-2">Tokens: 0</span>
              </div>
              <div class="me-5 text-black">
                <span class="fw-semibold fs-12 d-block mb-2"
                  >Shares: {{ this.shares }}</span
                >
              </div>
            </div>
            <p class="mb-2 fw-medium">{{ $t("prepaidData.depositaddress") }}</p>
            <p class="mb-1 text-uppercase fw-semibold text-black">
              {{ $t("prepaidData.donotsend") }}
            </p>
            <div class="d-flex align-items-center border p-3 rounded-3">
              <input
                type="text"
                class="copy-input copy-input-s1"
                v-model="message"
                id="copy-input"
                readonly
              />
              <div class="tooltip-s1">
                <button
                  v-clipboard:copy="message"
                  v-clipboard:success="onCopy"
                  class="copy-text"
                  type="button"
                >
                  <span class="tooltip-s1-text tooltip-text">
                    {{ $t("prepaidData.copy") }}</span
                  >
                  <em class="ni ni-copy"></em>
                </button>
              </div>
            </div>
            <p class="my-1 fs-13">
              {{ $t("prepaidData.newdeposits") }}
            </p>
            <button class="btn btn-primary mt-3" type="button">
              {{ $t("prepaidData.withdraw") }}
            </button>
          </div>
          <button class="btn btn-primary mt-3">
            <router-link to="/create-single">{{
              $t("prepaidData.Mintnewwork")
            }}</router-link>
          </button>
          <!-- end profile-setting-panel -->
        </div>
        <!-- end tab-pane -->
      </div>
      <!-- end tab-content -->
    </div>
    <!-- end profile-setting-panel-wrap-->

    <!-- end modal-->
    <!-- Modal -->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";
//import { get } from "lodash";

export default {
  name: "PaymentMethodSection",
  data() {
    return {
      SectionData,
      userName: "",
      email: "",
      tokenAmount: 0,
      shares: 0,
      // prepaidData: {
      //   title: get(
      //     this.$i18n.messages[this.$i18n.locale],
      //     "prepaidData.title",
      //     ""
      //   ),
      //   content: get(
      //     this.$i18n.messages[this.$i18n.locale],
      //     "prepaidData.content",
      //     ""
      //   ),
      //   contentTwo: get(
      //     this.$i18n.messages[this.$i18n.locale],
      //     "prepaidData.contentTwo",
      //     ""
      //   ),
      //   balances: [
      //     {
      //       id: 1,
      //       title: "Balance",
      //       price: "2 ETH",
      //       priceTwo: "$330.00 USD",
      //     },
      //     {
      //       id: 2,
      //       title: "Holds",
      //       price: "2 ETH",
      //       priceTwo: "$330.00 USD",
      //     },
      //   ],
      // },
    };
  },
  setup() {
    const message = "0x01948694c481cd38231261095f606c0a9444ce0e";
    const onCopy = (e) => {
      let target = e.trigger.querySelector(".tooltip-text");
      let prevText = target.innerHTML;
      target.innerHTML = "Copied";
      setTimeout(function () {
        target.innerHTML = prevText;
      }, 1000);
    };
    return { message, onCopy };
  },
  async mounted() {
    var authId = localStorage.getItem("authId");
    var username = localStorage.getItem("username");

    console.log("authId------", authId);
    await axios
      .post("https://gem.chinadigitaltimes.net/api/getUser", {
        uarename: username,
      })
      .then((response) => {
        console.log("api--response---", response.data);
        this.userName = response.data[0].name;
        this.email = response.data[0].email;
        this.shares = response.data[0].shares;
        console.log("api--response---shares", this.shares);
      })
      .catch((error) => console.log(error));
  },
  // methods: {
  //   async addNewUser() {
  //     await axios
  //       .post("https://gem.chinadigitaltimes.net/api/addUserManual", {
  //         username: this.userName,
  //         email: this.email,
  //         tokenAmount: this.tokenAmount,
  //       })
  //       .then((response) => {
  //         console.log("added new user", response.data);
  //       })
  //       .catch((error) => console.log(error));
  //   },
  // },
};
</script>
