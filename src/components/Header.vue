<script>
import store from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  emits: ["search"],

  methods: {
    searchInput() {
      this.$emit("searchRequest", this.store.imputSearch);
    },
  },
};
</script>

<template>
  <header>
    <h1>boolflix</h1>
    <input type="text" v-model="store.imputSearch" @keyup.enter="searchInput" />
    <button @click="searchInput">Cerca</button>
  </header>
</template>

<style lang="scss" scoped></style>
