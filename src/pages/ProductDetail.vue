<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <section class="item-detail-section" style="margin-top: 113px">
      <div v-for="item in this.featuredProducts" :key="item.productid">
        <div class="container1" v-if="item.productid == this.id">
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
                      <h1>
                        <a href="#0">{{ $t("productdetails.certificate") }}</a>
                      </h1>
                      <p class="rotingtxt">{{ hashValue }}</p>
                      <img
                        :src="
                          require(`../images/thumb/${item.certificatefile}`)
                        "
                        alt=""
                        class="w-100 rounded-3"
                      />
                    </div>
                    <div class="card">
                      <h1>
                        <a href="#0">{{ $t("productdetails.artifact") }}</a>
                      </h1>
                      <img
                        :src="require(`../images/thumb/${item.artifactfile}`)"
                        alt=""
                        class="w-100 rounded-3"
                      />
                    </div>
                    <div class="card">
                      <h1>
                        <a href="#0">{{ $t("productdetails.cover") }}</a>
                      </h1>
                      <img
                        :src="require(`../images/thumb/${item.coverfile}`)"
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
                    <h3>{{ item.productname }}</h3></a
                  >
                  <h3 class="mt-4">2323-2323-3454-4545-4545</h3>
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
                      {{ $t("productdetails.offer") }}
                      <!-- <router-link to="/create-invoice">Offer </router-link> -->
                    </button>
                  </div>
                  <div class="mt-5">
                    <h2>{{ $t("productdetails.historyoffer") }}</h2>
                    <div
                      style="margin-left: 40px; margin-top: 50px"
                      class="lead"
                    >
                      -{{ $t("productdetails.history1") }}
                    </div>
                    <div style="margin-left: 40px" class="lead">
                      -{{ $t("productdetails.history2") }}
                    </div>
                    <div style="margin-left: 40px" class="lead">
                      -{{ $t("productdetails.history3") }}
                    </div>
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
import axios from "axios";

export default {
  name: "ProductDetail",
  data() {
    return {
      SectionData,
      id: this.$route.params.id,
      title: "",
      imgLg: "",
      metaText: "",
      metaTextTwo: "",
      metaTextThree: "",
      content: "",
      hashValue: "",
      amount: 8000,
      featuredProducts: [],
    };
  },
  async mounted() {
    console.log("id----------", this.id);
    this.hashValue = md5("cerfificate1");
    await axios
      .get("https://gem.chinadigitaltimes.net/api/getNFTFeaturedProducts")
      .then((response) => {
        console.log("productfeatureddata---", response.data);
        this.featuredProducts = response.data;
        console.log(
          "productfeatueddata---",
          this.featuredProducts[0].productname
        );
      })
      .catch((error) => console.log(error));
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
