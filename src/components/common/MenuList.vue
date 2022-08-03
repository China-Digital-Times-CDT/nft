<template>
  <ul class="menu-list ms-lg-auto">
    <li class="menu-item">
      <a href="/" class="menu-link menu-item">{{
        $t("headerData.menuList.title")
      }}</a>
    </li>
    <li class="menu-item">
      <!-- <a href="/workdes" class="menu-link menu-item">{{
        SectionData.headerData.menuList2.title
      }}</a> -->
      <router-link
        :to="$t('headerData.menuList2.path')"
        class="menu-link menu-item"
        >{{ $t("headerData.menuList2.title") }}</router-link
      >
    </li>
    <li class="menu-item">
      <!-- <a href="#" class="menu-link menu-toggle">{{
        SectionData.headerData.menuList3.title
      }}</a> -->
      <router-link
        :to="$t('headerData.menuList3.path')"
        class="menu-link menu-item"
        >{{ $t("headerData.menuList3.title") }}</router-link
      >
    </li>
    <li v-if="this.authId.length == 0" class="menu-item">
      <!-- <a href="#" class="menu-link menu-toggle">{{
        SectionData.headerData.menuList4.title
      }}</a> -->
      <router-link
        :to="$t('headerData.menuList4.path')"
        class="menu-link menu-item"
        >{{ $t("headerData.menuList4.title") }}</router-link
      >
    </li>
    <li v-if="this.authId.length > 0" class="menu-item has-sub">
      <a href="#" class="menu-link menu-toggle">{{
        $tm("headerData.menuList5.title")
      }}</a>
      <div class="menu-sub menu-mega">
        <div class="menu-mega-row">
          <ul class="menu-list menu-list-mega">
            <li
              class="menu-item"
              v-for="nav in $tm('headerData.menuList5.navList')"
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
  <div class="lang-dropdown">
    <select v-model="lang">
      <option
        v-for="(lang, i) in languageArray"
        :key="`lang${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
export default {
  name: "MenuList",
  data() {
    return {
      SectionData,
      authId: "",
      languageArray: ["en", "ja"],
    };
  },
  computed: {
    lang: {
      get: function () {
        return this.$i18n.locale;
      },
      set: function (newVal) {
        this.$i18n.locale = newVal;
        console.log("emits-start--");
        this.$emit("success", newVal);
      },
    },
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
        localStorage.setItem("authId", "");
        this.authId = "";
      }
    },
  },
  // watch: {
  //   functin() {
  //     this.authId = localStorage.getItem("authId");
  //   },
  // },
};
</script>
