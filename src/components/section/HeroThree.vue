<template>
  <div class="hero-wrap">
    <div class="container">
      <div
        class="row flex-lg-row-reverse justify-content-between align-items-center align-items-xl-start"
      >
        <div class="col-lg-8">
          <UserActivitySection></UserActivitySection>
        </div>
        <!-- end col-lg-5 -->
        <div class="col-lg-4">
          <!-- <div class="hero-content pt-xl-3 pb-0">
            <h1 class="hero-title hero-title-s1 mb-3">
              {{ SectionData.heroDataThree.title }}
            </h1>
            <p class="hero-text mb-4 pb-1">
              {{ SectionData.heroDataThree.content }}
            </p>
            <ButtonGroup
              :btns="SectionData.btnDataFour"
              classname="hero-btns"
            ></ButtonGroup>
          </div> -->
          <!-- <div class="cards-details mt-4">
            <div class="card1">
              <router-link to="/product-details" class="hover">
                <div class="img">
                  <img
                    src="../../images/thumb/collection2.jpg"
                    alt=""
                    class="w-100 rounded-3"
                  />
                </div>
              </router-link>
            </div>
          </div> -->
          <div class="tilt-effect mt-5">
            <div v-for="item in this.featuredProducts" :key="item.featured">
              <div v-if="item.featured">
                <!-- <router-link to="/product-details" class="hover"> -->
                <router-link
                  class="details hover"
                  :to="{
                    name: 'ProductDetail',
                    params: {
                      id: item.productid,
                    },
                  }"
                >
                  <div class="dcard">
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>

                    <div class="card" style="background-size: cover">
                      <img
                        :src="require(`../../images/thumb/${item.coverfile}`)"
                        alt=""
                        class="frame"
                        style="height: 433px"
                      />
                      <div class="frame">
                        <p>{{ item.productname }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <ButtonGroup
            :btns="SData.btnDataHome"
            classname="hero-btns mt-4"
          ></ButtonGroup>
        </div>

        <!-- col-lg-6 -->
      </div>
      <!-- end row -->
    </div>
    <!-- .container-->
  </div>
  <!-- end hero-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import SData from "@/store/sdata.js";
import axios from "axios";

export default {
  name: "HeroThree",
  data() {
    return {
      SectionData,
      SData,
      featuredProducts: [],
    };
  },
  async mounted() {
    await axios
      .get("https://gem.chinadigitaltimes.net/api/getNFTFeaturedProducts")
      .then((response) => {
        console.log("productfeatureddata---", response.data);
        this.featuredProducts = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
