<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box mb-5">
      <h3>{{ this.userName }}'s {{ SectionData.paymentMethodData.title }}</h3>
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
            <h5 class="mb-2">{{ SectionData.prepaidData.title }}</h5>
            <p class="mb-3 fs-14">{{ SectionData.prepaidData.content }}</p>
            <p class="mb-3 fs-14">{{ SectionData.prepaidData.contentTwo }}</p>
            <div class="d-flex align-items-center">
              <div
                class="me-5 text-black"
                v-for="item in SectionData.prepaidData.balances"
                :key="item.id"
              >
                <span class="fw-semibold fs-12 d-block mb-2">{{
                  item.title
                }}</span>
                <span class="fw-medium fs-9 mb-2">{{ item.price }}</span>
                <span class="d-block">{{ item.priceTwo }}</span>
              </div>
            </div>
            <p class="mb-2 fw-medium">Deposit Address</p>
            <p class="mb-1 text-uppercase fw-semibold text-black">
              Do not send Nifties to this address
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
                  <span class="tooltip-s1-text tooltip-text">Copy</span>
                  <em class="ni ni-copy"></em>
                </button>
              </div>
            </div>
            <p class="my-1 fs-13">
              (New deposits will be credited after 6 confirmations)
            </p>
            <button class="btn btn-primary mt-3" type="button">Withdraw</button>
          </div>
          <button class="btn btn-primary mt-3">
            <router-link to="/create-single">Mint new work</router-link>
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
export default {
  name: "PaymentMethodSection",
  data() {
    return {
      SectionData,
      userName: "",
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
    console.log("authId------", authId);
    await axios
      .post("http://34.84.155.121:8081/user", { authId: authId })
      .then((response) => {
        console.log("api--response---", response.data);
        this.userName = response.data.name;
      })
      .catch((error) => console.log(error));
  },
  methods: {},
};
</script>
