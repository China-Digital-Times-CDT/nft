<template>
  <div class="header-main is-sticky" :class="isTransparent">
    <div class="container">
      <div class="header-wrap">
        <!-- logo -->
        <Logo></Logo>
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
import Logo from "@/components/common/Logo.vue";

export default {
  name: "HeaderMain",
  props: ["isTransparent"],
  components: {
    Logo,
    MobileAction,
    Menu,
  },
};
</script>
