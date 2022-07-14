<template>
  <ul class="menu-list ms-lg-auto">
    <li class="menu-item">
      <a href="/" class="menu-link menu-item">{{
        SectionData.headerData.menuList.title
      }}</a>
    </li>
    <li class="menu-item">
      <!-- <a href="/workdes" class="menu-link menu-item">{{
        SectionData.headerData.menuList2.title
      }}</a> -->
      <router-link
        :to="SectionData.headerData.menuList2.path"
        class="menu-link menu-item"
        >{{ SectionData.headerData.menuList2.title }}</router-link
      >
    </li>
    <li class="menu-item">
      <!-- <a href="#" class="menu-link menu-toggle">{{
        SectionData.headerData.menuList3.title
      }}</a> -->
      <router-link
        :to="SectionData.headerData.menuList3.path"
        class="menu-link menu-item"
        >{{ SectionData.headerData.menuList3.title }}</router-link
      >
    </li>
    <li v-if="authId == null" class="menu-item has-sub">
      <a href="#" class="menu-link menu-toggle">{{
        SectionData.headerData.menuList4.title
      }}</a>
      <div class="menu-sub menu-mega">
        <div class="menu-mega-row">
          <ul class="menu-list menu-list-mega">
            <li
              class="menu-item"
              v-for="nav in SectionData.headerData.menuList4.navList"
              :key="nav.id"
            >
              <router-link :to="nav.path" class="menu-link">{{
                nav.title
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li v-if="authId" class="menu-item has-sub">
      <a href="#" class="menu-link menu-toggle">{{
        SectionData.headerData.menuList5.title
      }}</a>
      <div class="menu-sub menu-mega">
        <div class="menu-mega-row">
          <ul class="menu-list menu-list-mega">
            <li
              class="menu-item"
              v-for="nav in SectionData.headerData.menuList5.navList"
              :key="nav.id"
            >
              <router-link
                :to="nav.path"
                @click.prevent="menuClick(nav.title)"
                class="menu-link"
                >{{ nav.title }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

export default {
  name: "MenuList",
  data() {
    return {
      SectionData,
      authId: null,
    };
  },
  mounted() {
    var authId = localStorage.getItem("authId");
    this.authId = authId;
    console.log("this-authId---m", this.authId);
  },
  methods: {
    menuClick: function (title) {
      var str = title.toString();
      if (str.includes("out")) {
        localStorage.setItem("authId", null);
        this.authId = null;
      }
    },
  },
  watch: {
    functin() {
      this.authId = localStorage.getItem("authId");
    },
  },
};
</script>
