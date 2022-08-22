<template>
  <router-view :key="$route.path" />
</template>

<script>
import SocketioService from "./socket.js";

export default {
  name: "App",
  data() {
    return {
      locale: "ja",
    };
  },
  created() {
    SocketioService.setupSocketConnection();
  },
};
</script>
