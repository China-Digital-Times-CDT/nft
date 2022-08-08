<template>
  <div class="d-flex">
    <router-link to="/" class="logo-link" :class="classname">
      <img
        class="logo-dark logo-img bell"
        :src="require('@/images/logo-black.jpg')"
        alt="logo"
      />
    </router-link>
    <div class="mt-3 mx-3">
      <span class="d-flex1"
        ><h4 class="text-danger">CDToken</h4>
        <h5 class="mt-1 text-danger">-- censors verified content --</h5>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "LogoLink",
  props: ["classname"],
};
</script>
