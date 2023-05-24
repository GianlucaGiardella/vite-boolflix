<script>
import store from "../store";
import CardList from "./Movies-Series.vue";
export default {
  data() {
    return {
      store,
      CardList,
    };
  },
};
</script>

<template>
  <CardList />
</template>

<style lang="scss" scoped></style>
