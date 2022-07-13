/* eslint-disable no-undef */
<template>
  <swiper
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
  >
    <swiper-slide
      v-for="item in SectionData.collectionData.collectionList"
      :key="item.id"
      class="h-auto"
    >
      <router-link :to="item.path" class="card card-full card-collection">
        <h3 class="card-title mt-4 mb-2 pt-1 text-center">{{ item.title }}</h3>

        <img :src="item.img" class="card-img-top" alt="birds art image" />
        <div class="card-body card-body-s1">
          <div class="card-title mt-4 mb-2 pt-1 d-flex">
            <span v-html="item.bidding"></span>
          </div>
          <div class="card-title mt-4 mb-2 pt-1 d-flex">
            <span v-html="item.created"></span>
          </div>
          <div class="card-title mt-4 mb-2 pt-1 d-flex">
            <span v-html="item.distribution"></span>
          </div>
          <div class="card-title mt-4 mb-2 pt-1 d-flex">
            <span v-html="item.description"></span>
          </div>
          <button class="btn btn-primary w-100" type="submit">
            <router-link to="/product-detail">Bid </router-link>
          </button>
        </div>
        <!-- end card-body --> </router-link
      ><!-- end card -->
    </swiper-slide>
  </swiper>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

// core version + navigation, pagination modules:
import SwiperCore, { Pagination } from "swiper";

// configure Swiper to use modules
SwiperCore.use([Pagination]);

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "CollectionSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SectionData,
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
