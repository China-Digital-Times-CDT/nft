<template>
  <section class="collection-section">
    <div class="container">
      <div class="section-head-sm">
        <h2 class="mb-3 text-center">{{ $t("howitworks") }}</h2>

        <h4 class="mb-3 text-center" v-html="$t('becausetxt')"></h4>
      </div>
    </div>
    <!-- .container -->
  </section>
  <!-- end collection-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

export default {
  name: "Collections",
  data() {
    return {
      SectionData,
    };
  },
};
</script>
