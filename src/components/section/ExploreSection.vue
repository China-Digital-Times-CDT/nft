<template>
  <section class="explore-section pt-4">
    <div class="container">
      <!-- filter -->
      <div class="filter-box">
        <h3 class="mb-4">{{ $t("newlylisted") }}</h3>
        <div class="filter-box-filter m-0">
          <ul class="nav nav-pills nav-pills-s1" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-all-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-all"
                type="button"
                role="tab"
                aria-controls="pills-all"
                aria-selected="true"
              >
                {{ $t("all") }}
              </button>
            </li>
          </ul>
        </div>
        <!-- end filter-box-filter -->
      </div>
      <!-- end filter-box -->
      <div class="gap-2x"></div>
      <!-- end gap -->
      <!-- Product -->
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane show active"
          id="pills-all"
          role="tabpanel"
          aria-labelledby="pills-all-tab"
        >
          <div class="row g-gs" v-if="this.products.length > 0">
            <div
              class="col-xl-3 col-lg-4 col-sm-6"
              v-for="product in this.products"
              :key="product.productid"
            >
              <div class="card card-product mb-0">
                <div class="card-image">
                  <img
                    :src="product.filepath"
                    class="card-img-top"
                    alt="art image"
                  />
                </div>
                <div class="card-body p-4">
                  <h5 class="card-title text-truncate mb-0">
                    {{ product.productname }}
                  </h5>
                  <!-- <div class="card-author mb-1 d-flex align-items-center">
                    <span class="me-1 card-author-by">{{ $t("By") }}</span>
                    <div class="custom-tooltip-wrap">
                      <router-link
                        class="custom-tooltip author-link"
                        >{{ product.username }}</router-link
                      >
                    </div>
                  </div> -->

                  <div
                    class="card-price-wrap d-flex align-items-center justify-content-sm-between mb-3"
                  >
                    <div class="me-5 me-sm-2">
                      <span class="card-price-title"> {{ $t("Price") }}</span>
                      <span class="card-price-number"
                        >&dollar; {{ product.currentbidding }}</span
                      >
                    </div>
                    <div class="text-sm-end">
                      <span class="card-price-title">{{
                        $t("CurrentBid")
                      }}</span>
                    </div>
                  </div>

                  <router-link to="product" class="btn btn-sm btn-primary">{{
                    $t("PlaceBid")
                  }}</router-link>
                </div>
                <router-link
                  class="details"
                  :to="{
                    name: 'ProductDetail',
                    params: {
                      id: product.productid,
                      title: product.title,
                      metaText: product.metaText,
                      price: product.price,
                      priceTwo: product.priceTwo,
                      imgLg: product.imgLg,
                      metaText: product.metaText,
                      metaTextTwo: product.metaTextTwo,
                      metaTextThree: product.metaTextThree,
                      content: product.content,
                    },
                  }"
                >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import axios from "axios";

export default {
  name: "ExploreSection",
  data() {
    return {
      SectionData,
      isFIlter: false,
      selectedTab: null,
      currentPage: 1,
      maxPerPage: 8,
      selectedId: 0,
      products: [],
    };
  },
  async mounted() {
    var authId = localStorage.getItem("authId");
    console.log("authId------", authId);
    await axios
      .get("https://gem.chinadigitaltimes.net/api/getNFTProducts")
      .then((response) => {
        console.log("productdata---", response.data);
        this.products = response.data;
        console.log(
          "productdata---",
          this.products[0].productname,
          this.products.length
        );
      })
      .catch((error) => console.log(error));
  },
  methods: {
    filterCategory(tab, id) {
      this.selectedTab = tab;
      this.isFIlter = true;
      this.selectedId = id;
    },
    loadMore() {
      this.currentPage += 1;
      this.isFIlter = false;
    },
    // sorting() {
    //   this.products.sort((a, b) => (a.price < b.price ? 1 : -1));
    // },
    // sorting2() {
    //   this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
    // },

    // set active class on button
    getActiveClass(id) {
      if (id === this.activeId) {
        return "active";
      } else {
        return "";
      }
    },
  },
  // computed: {
  //   filteredData() {
  //     // if(this.isFIlter == false) {
  //     //   return this.products.slice(0, this.currentPage * this.maxPerPage);
  //     // }
  //     return this.products.filter((data) => {
  //       const opts = this.selectedTab.options.map((opt) => opt.category);
  //       return opts.includes(data.category);
  //     });
  //   },
  // },
};
</script>

<style lang="css" scoped>
.details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.author-link {
  z-index: 2;
  position: relative;
}
</style>
