<script>
import store from "./store";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  data() {
    return {
      store,
      Header,
      Main,
    };
  },
};
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss"></style>
