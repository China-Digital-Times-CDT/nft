<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <section class="item-detail-section section-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pe-xl-5">
            <div class="item-detail-content">
              <div class="item-detail-img-container mb-4">
                <h3>Cover(by Damie Herst)</h3>
                <!-- <img
                  src="../images/thumb/collection2.jpg"
                  alt=""
                  class="w-100 rounded-3"
                /> -->
                <div class="cards-details mt-4">
                  <div class="card">
                    <h1><a href="#0">Title1</a></h1>
                    <img
                      src="../images/thumb/collection2.jpg"
                      alt=""
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="card">
                    <h1><a href="#0">Title2</a></h1>
                    <img
                      src="../images/thumb/collection3.jpg"
                      alt=""
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="card">
                    <h1><a href="#0">Title3</a></h1>
                    <img
                      src="../images/thumb/collection4.jpg"
                      alt=""
                      class="w-100 rounded-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 pe-xl-5">
            <div class="item-detail-content">
              <div class="item-detail-img-container mb-4 mt-4">
                <a href="#" style="text-decoration: revert"
                  ><h3>Chinese Wailing Wall for Doctor Li</h3></a
                >
                <h3 class="mt-4">#23433</h3>
                <div class="d-flex">
                  <input
                    class="h4"
                    type="number"
                    min="8000"
                    max="1000000"
                    style="margin-left: 70px; margin-top: 20px"
                  />
                  <button
                    class="btn btn-secondary mt-3"
                    type="submit"
                    style="margin-left: 40px"
                  >
                    <router-link to="/create-invoice">Offer </router-link>
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

export default {
  name: "ProductDetail",
  data() {
    return {
      SectionData,

      // imgLg: require("@/images/thumb/avatar-1.jpg"),
    };
  },
  // mounted() {
  //   // this.img = require("@/images/thumb/avatar-1.jpg");
  // },
};
</script>
