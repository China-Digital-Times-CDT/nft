<template>
  <div class="col-lg-3">
    <div
      class="sidebar-head d-flex flex-wrap align-items-center justify-content-between"
    >
      <h3 class="sidebar-head-title">{{ title }}</h3>
      <div class="sidebar-head-action d-flex align-items-center">
        <div class="sidebar-drop dropdown">
          <!-- <a class="icon-btn menu-toggler-user-open" href="#">
            <em class="ni ni-menu"></em>
          </a> -->
        </div>
        <!-- end sidebar-drop -->
      </div>
      <!-- end sidebar-head-action -->
    </div>
    <!-- end sidebar-head -->
    <div class="sidebar sidebar-user-mobile">
      <!-- <a href="#" class="icon-btn menu-toggler-user-close">
        <em class="ni ni-cross"></em>
      </a> -->
      <div class="sidebar-widget">
        <ul class="user-nav">
          <li v-for="(list, i) in lists" :key="i" :class="list.class">
            <router-link :to="list.path"
              ><em class="ni me-2" :class="list.icon"></em
              >{{ list.title }}</router-link
            >
          </li>
        </ul>
      </div>
      <!-- end sidebar-widget -->
    </div>
    <!-- end sidebar -->
  </div>
  <!-- end col-lg-4 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
export default {
  name: "UserSidebar",
  props: ["lists", "title", "navs"],
  data() {
    return {
      SectionData,
    };
  },
  mounted() {
    /*  =======================================================
        User sidebar menu
        ========================================================== */
    var sidebarMenuOpen = document.querySelector(".menu-toggler-user-open");
    var userSidebar = document.querySelector(".sidebar-user-mobile");

    function userSidebarMenu() {
      if (sidebarMenuOpen) {
        sidebarMenuOpen.addEventListener("click", function (e) {
          e.preventDefault();
          userSidebar.classList.add("active");
        });
      }
    }

    userSidebarMenu();

    userSidebar.addEventListener("click", function () {
      this.classList.remove("active");
    });
  },
};
</script>
