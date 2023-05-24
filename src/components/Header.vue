<script>
import store from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <img src="" alt="" />
    <input
      type="text"
      v-model="store.imputSearch"
      @keyup.enter="$emit('searchMovies', store.imputSearch)"
    />
    <button @click="$emit('searchMovies', store.imputSearch)">Cerca</button>
  </header>
</template>

<style lang="scss" scoped></style>
