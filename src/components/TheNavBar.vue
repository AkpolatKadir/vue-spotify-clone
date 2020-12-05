<template>
  <section class="navbar">
    <NavBarIcon width="131" height="40" />

    <ul class="mainNavList">
      <li>
        <a class="mainNavList-item">
          <div class="mainNavList-icon"></div>
          <div class="mainNavList-text">Home</div>
        </a>
      </li>
      <li>
        Search
      </li>
      <li>
        Your Library
      </li>
    </ul>
  </section>
</template>

<script>
import NavBarIcon from "./TheNavBarIcon.vue";

export default {
  name: "NavBar",
  components: { NavBarIcon },
};
</script>

<style scoped>
.navbar {
  background-color: black;
  height: 100%;
}
.mainNavList {
  margin: 0;
}
</style>
