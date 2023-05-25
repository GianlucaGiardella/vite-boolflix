<script>
import store from "../store";
export default {
  data() {
    return {
      store,
    };
  },

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
    <form @submit.prevent="searchInput">
      <input type="text" v-model="store.imputSearch" />
      <button>Cerca</button>
    </form>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 0.8rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  background-color: black;
}
header {
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #e50914;
    position: relative;
  }

  form {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  form {
    input {
      padding-inline-start: 0.5rem;
      color: white;
      border: unset;
      border: 1px solid #666;
      border-radius: 0.2rem;
      background-color: #222;
    }

    button {
      padding: 0.6rem 1.2rem;
      font-size: 0.8rem;
      font-weight: 600;
      border: unset;
      border-radius: 0.2rem;
      color: white;
      background-color: red;
    }

    button:hover {
      cursor: pointer;
      background-color: rgb(193, 17, 25);
    }
  }
}
</style>
