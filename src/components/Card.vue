<script>
export default {
  props: {
    movieTitle: String,
    movieOriginalTitle: String,
    movieLanguage: String,
    movieVote: Number,
  },
};
</script>

<template>
  <li>
    {{ movieTitle }} {{ movieOriginalTitle }} {{ movieLanguage }}
    {{ movieVote }}
  </li>
</template>

<style lang="scss" scoped></style>
