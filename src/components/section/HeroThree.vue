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
          <div class="cards-details mt-4">
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
          </div>
          <ButtonGroup
            :btns="SectionData.btnDataHome"
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

export default {
  name: "HeroThree",
  data() {
    return {
      SectionData,
    };
  },
};
</script>
