<script>
import store from "./store";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Header,
    Main,
  },
  methods: {
    getResults(inputSearch) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=4ffc9c2cabb7a0565658597d4cddb688&query=" +
            inputSearch
        )
        .then((response) => (this.store.movies = response.data.results));

      axios
        .get(
          "https://api.themoviedb.org/3/search/tv?api_key=4ffc9c2cabb7a0565658597d4cddb688&query=" +
            inputSearch
        )
        .then((response) => (this.store.series = response.data.results));
    },
  },
};
</script>

<template>
  <Header @search="getResults" />
  <Main />
</template>

<style lang="scss"></style>
