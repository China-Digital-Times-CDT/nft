<template>
  <div class="header-main is-sticky" :class="isTransparent">
    <div class="container">
      <div class="header-wrap">
        <!-- mobile action -->
        <MobileAction></MobileAction>

        <!-- Menu -->
        <Menu classname="btn-primary"></Menu>
        <div class="header-overlay"></div>
      </div>
      <!-- .header-warp-->
    </div>
    <!-- .container-->
  </div>
  <!-- .header-main-->
</template>
<script>
// @ is an alias to /src
import MobileAction from "@/components/common/MobileAction.vue";
import Menu from "@/components/common/Menu.vue";

export default {
  name: "HeaderMain",
  props: ["isTransparent"],
  components: {
    MobileAction,
    Menu,
  },
};
</script>
