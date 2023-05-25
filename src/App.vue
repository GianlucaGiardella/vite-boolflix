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
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "4ffc9c2cabb7a0565658597d4cddb688",
            query: inputSearch,
          },
        })
        .then((response) => (this.store.movies = response.data.results));

      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "4ffc9c2cabb7a0565658597d4cddb688",
            query: inputSearch,
          },
        })
        .then((response) => (this.store.series = response.data.results));
    },
  },
};
</script>

<template>
  <Header @searchRequest="getResults" />
  <Main />
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

html {
  font-family: sans-serif;
}

body {
  min-height: 100vh;
  background-color: #222;
}

ul {
  list-style-type: none;
}

img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}
</style>
