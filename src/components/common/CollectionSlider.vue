/* eslint-disable no-undef */
<template>
  <!-- <swiper
    :modules="modules"
    :slides-per-view="3"
    :breakpoints="{
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    }"
    :loop="true"
    :pagination="{ clickable: true }"
    class="swiper-container-space"
  > -->
  <div class="row">
    <div
      class="col-xl-4 col-lg-4 col-sm-6 h-auto"
      v-for="item in this.topProducts"
      :key="item.productid"
    >
      <router-link
        class="details"
        :to="{
          name: 'ProductDetail',
          params: {
            id: item.productid,
          },
        }"
      >
        <h3 class="card-title mt-4 mb-2 pt-1 text-center">
          {{ item.productname }}
        </h3>

        <img :src="item.coverfile" class="card-img-top" alt="birds art image" />
        <div class="card-body card-body-s1">
          <div class="card-title mt-4 mb-2 pt-1 d-flex">
            <a class="btn-link fw-medium">{{ $t("currentbidding") }}:</a>
            <span class="mx-2" v-html="item.price"></span>
            <span>$</span>
          </div>
          <!-- <div class="card-title mt-4 mb-2 pt-1 d-flex">
          <span v-html="item.created"></span>
        </div> -->
          <div class="mt-2">
            <a class="btn-link fw-medium">{{ $t("distribution") }}:</a>
            <span class="mx-2" v-html="item.distribution"></span>
          </div>
          <div class="mt-2 mb-4">
            <a class="btn-link fw-medium">{{ $t("description") }}:</a>

            <span class="mx-2" v-html="item.description"></span>
          </div>
          <button class="btn btn-primary w-100" type="submit">
            {{ $t("CurrentBid") }}
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

// core version + navigation, pagination modules:
import SwiperCore, { Pagination } from "swiper";
import axios from "axios";

// configure Swiper to use modules
SwiperCore.use([Pagination]);

// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "CollectionSlider",
  components: {
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      SectionData,
      featuredProducts: [],
      topProducts: [],
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  async mounted() {
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

    this.featuredProducts.sort((a, b) =>
      a.price * a.shares < b.price * b.shares ? 1 : -1
    );
    this.topProducts = this.featuredProducts.slice(0, 3);
  },
};
</script>
