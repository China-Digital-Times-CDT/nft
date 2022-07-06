<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-gradient-2">
      <!-- Header main -->
      <HeaderMain isTransparent="is-transparent"></HeaderMain>
      <!-- hero -->
      <DashboardThree></DashboardThree>
    </header>

    <!-- Footer  -->
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import DashboardThree from "@/components/section/DashboardThree.vue";

export default {
  name: "Home-v2",
  components: {
    DashboardThree,
  },
  data() {
    return {
      SectionData,
    };
  },
};
</script>
