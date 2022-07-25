<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <section class="item-detail-section" style="margin-top: 113px">
      <div class="container1">
        <div class="row">
          <div class="col-lg-6 pe-xl-5">
            <div class="item-detail-content">
              <div class="item-detail-img-container mb-4">
                <!-- <img
                  src="../images/thumb/collection2.jpg"
                  alt=""
                  class="w-100 rounded-3"
                /> -->
                <div class="cards-details mt-4">
                  <div class="card">
                    <h1><a href="#0">Certificates</a></h1>
                    <p class="rotingtxt">{{ hashValue }}</p>
                    <img
                      src="../images/thumb/collection3.jpg"
                      alt=""
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="card">
                    <h1><a href="#0">Artifacts(Files)</a></h1>
                    <img
                      src="../images/thumb/collection4.jpg"
                      alt=""
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="card">
                    <h1><a href="#0">Cover</a></h1>
                    <img
                      src="../images/thumb/collection2.jpg"
                      alt=""
                      class="w-100 rounded-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 pe-xl-5">
            <div class="item-detail-content">
              <div class="item-detail-img-container mb-4 mt-4">
                <a href="#" style="text-decoration: revert">
                  <h3>Chinese Wailing Wall for Doctor Li</h3></a
                >
                <h3 class="mt-4">#23433</h3>
                <div class="d-flex">
                  <input
                    class="h4"
                    type="number"
                    min="8000"
                    max="1000000"
                    style="margin-left: 70px; margin-top: 20px"
                    v-model.number="amount"
                  />
                  <button
                    class="btn btn-secondary mt-3"
                    type="submit"
                    style="margin-left: 40px"
                    @click.prevent="offer"
                  >
                    Offer
                    <!-- <router-link to="/create-invoice">Offer </router-link> -->
                  </button>
                </div>
                <div class="mt-5">
                  <h2>History offers:</h2>
                  <div style="margin-left: 40px; margin-top: 50px" class="lead">
                    -2022/05/01 Listed by XXXX for 8000
                  </div>
                  <div style="margin-left: 40px" class="lead">
                    -2022/03/28 Transfered to XXXX with 7000 Sat
                  </div>
                  <div style="margin-left: 40px" class="lead">
                    -2021/08/01 Minted with 1000 Sat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer  -->
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
//import ProductDetailSection from '@/components/section/Products'
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import md5 from "md5";
export default {
  name: "ProductDetail",
  data() {
    return {
      SectionData,
      option: {
        // "bottomleft", "bottomright", "topleft", "topright", "center", "fill"
        mode: "bottomright",
        textBaseline: "middle",
        font: "15px Arial",
        fillStyle: "white",
        content: "@vuescript.com",
        rotate: 30,
      },
      // imgLg: require("@/images/thumb/avatar-1.jpg"),
      hashValue: "",
      amount: 8000,
    };
  },
  mounted() {
    // this.img = require("@/images/thumb/avatar-1.jpg");
    this.hashValue = md5("cerfificate1");
  },
  methods: {
    offer: function () {
      console.log("this---", this.amount);
      this.$router.push({
        path: "/create-invoice",
        query: { amount: this.amount },
      });
    },
  },
};
</script>
