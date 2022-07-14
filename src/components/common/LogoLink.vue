<template>
  <router-link to="/" class="logo-link" :class="classname">
    <img
      class="logo-dark logo-img bell"
      :src="require('@/images/logo-black.jpg')"
      alt="logo"
    />
  </router-link>
</template>
<script>
export default {
  name: "LogoLink",
  props: ["classname"],
};
</script>
