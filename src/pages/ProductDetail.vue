<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>

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
      id: this.$route.params.id,
      title: "",
      imgLg: "",
      metaText: "",
      metaTextTwo: "",
      metaTextThree: "",
      content: "",
    };
  },
  mounted() {
    SectionData.productData.products.forEach((element) => {
      if (this.id == element.id) {
        this.imgLg = element.imgLg;
        this.title = element.title;
        this.metaText = element.metaText;
        this.metaTextTwo = element.metaTextTwo;
        this.metaTextThree = element.metaTextThree;
        this.content = element.content;
      }
    });
  },
};
</script>
