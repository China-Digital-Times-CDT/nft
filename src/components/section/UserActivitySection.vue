<template>
  <div class="col-lg-9 ps-xl-5">
    <div class="user-panel-title-box">
      <h3>{{ $t("userActivityItems.mainTitle") }}</h3>
      <!-- <h1>{{ localTime }}</h1> -->
    </div>
    <!-- end user-panel-title-box -->
    <div class="profile-setting-panel-wrap pt-2">
      <ul class="nav nav-tabs nav-tabs-s3 mb-2" id="myTab" role="tablist">
        <!-- <li
          class="nav-item"
          role="presentation"
          v-for="list in SectionData.userActivityTabNav"
          :key="list.id"
        >
          <button
            class="nav-link"
            :class="list.isActive"
            :id="list.slug"
            data-bs-toggle="tab"
            :data-bs-target="list.bsTarget"
            type="button"
          >
            {{ list.title }}
          </button>
        </li> -->
      </ul>
      <div class="tab-content mt-4 tab-content-desktop" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="all"
          role="tabpanel"
          aria-labelledby="all-tab"
        >
          <div class="activity-tab-wrap">
            <div
              class="card card-creator-s1 mb-4"
              v-for="item in displayData"
              :key="item.id"
            >
              <div class="card-body d-flex align-items-center">
                <div class="avatar avatar-1 flex-shrink-0">
                  <img :src="item.img" alt="avatar" />
                </div>
                <div class="flex-grow-1">
                  <h6 class="card-s1-title" v-html="item.name"></h6>
                  <p class="card-s1-text" v-html="item.title"></p>
                  <p class="card-s1-text" v-html="item.dateText"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- end tab-pane -->
      </div>
      <!-- end tab-content -->
    </div>
    <!-- end profile-setting-panel-wrap-->
  </div>
  <!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import { get } from "lodash";

export default {
  name: "UserActivitySection",
  data() {
    return {
      SectionData,
      localTime: " ",
      row: [],
      displayData: [],
      streamData: [
        {
          id: 4,
          name: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.adam",
            ""
          ),
          img: require("@/images/thumb/avatar-1.jpg"),
          title: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.title1",
            ""
          ),
          dateText: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.dateText",
            ""
          ),
        },
        {
          id: 3,
          name: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.Bob",
            ""
          ),
          img: require("@/images/thumb/avatar-2.jpg"),
          title: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.title2",
            ""
          ),
          dateText: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.dateText",
            ""
          ),
        },
        {
          id: 2,
          name: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.Alice",
            ""
          ),
          img: require("@/images/thumb/avatar-3.jpg"),
          title: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.title3",
            ""
          ),
          dateText: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.dateText",
            ""
          ),
        },
        {
          id: 1,
          name: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.Carol",
            ""
          ),
          img: require("@/images/thumb/avatar-3.jpg"),
          title: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.title4",
            ""
          ),
          dateText: get(
            this.$i18n.messages[this.$i18n.locale],
            "usrActivity.dateText",
            ""
          ),
        },
      ],
    };
  },
  methods: {
    showLocaleTime: function () {
      var time = this;
      setInterval(function () {
        time.localTime = new Date().toLocaleString("en-GB", {
          timeZone: "UTC",
        });
        // var ass = [];
        // ass.id = "5";
        // ass.img = require("@/images/thumb/avatar-2.jpg");
        // ass.title =
        //   'Carl commit merged into repo <a href="item-details" class="btn-link fw-medium">#7243</a>';
        // ass.dateText = "today";
        var imgSrc = require("@/images/thumb/avatar-" +
          time.generateRandom(3).toString() +
          ".jpg");
        time.streamData.push({
          id: time.streamData.length + 1,
          name: get(
            time.$i18n.messages[time.$i18n.locale],
            "usrActivity.Carol",
            ""
          ),
          img: imgSrc,
          title: get(
            time.$i18n.messages[time.$i18n.locale],
            "usrActivity.title2",
            ""
          ),
          dateText: get(
            time.$i18n.messages[time.$i18n.locale],
            "usrActivity.dateText",
            ""
          ),
        });
        time.streamData.sort((a, b) => (a.id < b.id ? 1 : -1));
        time.displayData = time.streamData.slice(0, 10);
        // console.log("time.streamData", time.streamData);
        // console.log("time.displayData", time.displayData);
      }, 10000);
    },
    generateRandom: function (maxLimit = 3) {
      let rand = Math.random() * maxLimit;
      rand = Math.floor(rand);

      return rand;
    },
    onSuccess(newVale) {
      console.log("emit-test------", newVale); // someValue
    },
  },
  mounted() {
    console.log("local-------", this.$i18n.locale);
    //  this.$i18n.locale = "ja";
    this.showLocaleTime();
    this.displayData = this.streamData;
    localStorage.setItem("authId", "");
    console.log("aaaaaaaaaaa", this.$i18n.locale);
  },

  // computed: {
  //   sortedArray: function () {
  //     return this.streamData.sort(compare);
  //   },
  // },
};
</script>
