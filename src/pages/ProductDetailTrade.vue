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
                    <!-- <div class="card">
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
                    </div> -->
                    <div class="card">
                      <h1>
                        <a href="#0">{{ $t("productdetails.cover") }}</a>
                      </h1>
                      <img
                        :src="item.coverfile"
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
                    <div>
                      <h3 class="mt-4">Amount(Shares): {{ shares }}</h3>
                      <div>
                        <input
                          type="radio"
                          id="20"
                          value="20"
                          v-model="shares"
                          @change="onChange($event)"
                        />
                        <label for="one">20</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="22"
                          value="22"
                          v-model="shares"
                          @change="onChange($event)"
                        />
                        <label for="two">22</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="2"
                          value="2"
                          v-model="shares"
                          @change="onChange($event)"
                        />
                        <label for="three">2</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="4"
                          value="4"
                          v-model="shares"
                          @change="onChange($event)"
                        />
                        <label for="four">4</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="12"
                          value="12"
                          v-model="shares"
                          @change="onChange($event)"
                        />
                        <label for="five">12</label>
                      </div>
                    </div>
                    <div style="margin-left: 40px">
                      <h3 class="mt-4">Price(USD): {{ price }}</h3>
                      <div>
                        <input
                          type="radio"
                          id="50"
                          value="50"
                          v-model="price"
                        />
                        <label for="one">50</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="48"
                          value="48"
                          v-model="price"
                        />
                        <label for="two">48</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="44"
                          value="44"
                          v-model="price"
                        />
                        <label for="three">44</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="42"
                          value="42"
                          v-model="price"
                        />
                        <label for="five">42</label>
                      </div>
                    </div>
                  </div>

                  <input
                    type="text"
                    class="mt-3 form-control form-control-s1"
                    placeholder="Enter a invoice description"
                    style="width: 300px"
                    v-model="description"
                  />
                  <div class="d-flex">
                    <input
                      class="h4 form-control form-control-s1"
                      type="number"
                      min="0"
                      max="1000000"
                      style="margin-top: 20px; width: 300px"
                      v-model.number="amount"
                    />
                    <div class="mt-4 pt-2 mx-2">USD</div>
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
      amount: 0,
      featuredProducts: [],
      description: "",
      shares: 20,
      price: 1,
    };
  },
  async mounted() {
    console.log("id----------", this.id);
    this.hashValue = md5("cerfificate1");
    await axios
      .get("https://gem.chinadigitaltimes.net/api/getNFTProducts")
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
    onChange(event) {
      var optionText = event.target.value;
      this.amount = optionText;
      console.log(optionText);
    },
    gotoInvoice() {
      this.$router.push({
        path: "/create-invoice",
        query: { amount: this.amount, description: this.description },
      });
    },
    async offer() {
      console.log("this---shares---", this.shares);
      console.log("this---", this.amount, this.description);
      var uname = localStorage.getItem("username");
      await axios
        .post("https://gem.chinadigitaltimes.net/api/updateUser", {
          username: uname,
          shares: parseInt(this.amount),
        })
        .then((response) => {
          console.log("api--response---", response.data);
        })
        .catch((error) => console.log(error));

      this.gotoInvoice();
    },
  },
};
</script>
