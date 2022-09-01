<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <div class="row mt-2">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">User Name</label>
        </div>
        <!-- end col -->
        <div class="col-lg-6">
          <input
            type="text"
            id="displayUserName"
            class="form-control form-control-s1"
            placeholder="user name"
            v-model="this.userName"
          />
        </div>
        <div class="col-lg-3">
          <button class="btn btn-primary" type="button">Change</button>
        </div>
      </div>
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
            placeholder="wallet address"
            v-model="this.walletAddress"
          />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-2 mt-2">
          <label for="displayName" class="form-label">Bindings</label>
        </div>
        <!-- end col -->
        <div class="col-lg-4">
          <button class="btn btn-primary" type="button">Email</button>
        </div>
        <div class="col-lg-4">
          <button
            class="btn btn-primary"
            type="button"
            @click.prevent="connect()"
          >
            Github
          </button>
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- end user-panel-title-box -->

    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";

export default {
  name: "ProfileSection",
  data() {
    return {
      SectionData,
      walletAddress: null,
      githubName: "",
      userName: "",
      email: "",
      tokenAmount: 0,
      shares: 0,
    };
  },
  methods: {
    connect: function () {
      axios
        .get("https://gem.chinadigitaltimes.net/api/ath2")
        .then((response) => {
          console.log("api--response---", response.data);
          window.location = response.data.url;
          this.userName = response.data.name;
        })
        .catch((error) => console.log(error));
    },
    async addNewUser() {
      await axios
        .post("https://gem.chinadigitaltimes.net/api/user_add", {
          username: this.userName,
          email: this.email,
          tokenAmount: this.tokenAmount,
          shares: this.shares,
          github_id: this.githubName,
          public_key: this.walletAddress,
        })
        .then((response) => {
          console.log("added new user", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  async mounted() {
    let pKey = localStorage.getItem("publickey");
    this.userName = "@" + pKey.substring(0, 6);

    console.log("The key is: " + this.$route.query.user_id);
    var usrId = this.$route.query.user_id.toString();

    // var username = localStorage.getItem("username");

    if (usrId != null && usrId != undefined) {
      await axios
        .post("https://gem.chinadigitaltimes.net/api/getUser", {
          public_key: usrId,
        })
        .then((response) => {
          console.log("api--response---", response.data);
          // this.githubName = response.data[0].username;
          console.log("githubName--githubName---", this.githubName);
          if (response.data.length > 0) {
            this.walletAddress = response.data[0].public_key;
            this.userName = response.data[0].username;
          } else {
            this.walletAddress = this.$route.query.user_id;
            this.userName = "@" + usrId.substring(0, 6);
            console.log("userName = ", this.userName);
            this.addNewUser();
          }
        })
        .catch((error) => console.log(error));
    }
  },
};
</script>
