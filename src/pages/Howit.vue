<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <HowItSection></HowItSection>
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
  name: "Howit",
  data() {
    return {
      SectionData,
    };
  },
};
</script>
