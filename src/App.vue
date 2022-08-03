<template>
  <router-view :key="$route.path" />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      locale: "ja",
    };
  },
};
</script>
