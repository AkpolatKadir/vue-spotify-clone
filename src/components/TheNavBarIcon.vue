<template>
  <img src="../assets/logo.png" v-bind:width="width" v-bind:height="height" />
</template>

<script>
export default {
  name: "NavBarIcon",
  props: { height: String, width: String },
};
</script>

<style scoped>
/* img {
  width: 300px;
  height: 300px;
} */
</style>
