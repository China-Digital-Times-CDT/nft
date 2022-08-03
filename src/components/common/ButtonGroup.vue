<template>
  <ul class="btns-group" :class="classname">
    <li v-for="(btn, i) in btns" :key="i">
      <a
        v-if="btn.external"
        href="https://github.com/China-Digital-Times-CDT/nft/discussions"
        class="btn"
        :class="btn.btnClass"
        target="_blank"
      >
        {{ $t("btnDataHome[" + i + "].title") }}
        <span class="d-none d-xl-inline-block" v-if="istext">{{
          btn.titleTwo
        }}</span>
      </a>
      <router-link
        v-if="!btn.external"
        :to="btn.path"
        class="btn"
        :class="btn.btnClass"
      >
        {{ $t("btnDataHome[" + i + "].title") }}
        <span class="d-none d-xl-inline-block" v-if="istext">{{
          btn.titleTwo
        }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ButtonGroup",
  props: ["btns", "istext", "classname"],
};
</script>
