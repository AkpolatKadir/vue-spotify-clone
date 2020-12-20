<template>
  <nav class="navbar">
    <img class="navbar-icon" />

    <ul class="mainNavList">
      <NavigationButton
        v-for="(navItem, index) in navbarList"
        v-bind:key="index"
        v-bind:nav-item="navItem"
      ></NavigationButton>
    </ul>

    <NavBarPlaylist />
  </nav>
</template>

<script>
import NavBarPlaylist from "./TheNavBarPlaylist.vue";
import NavigationButton from "./NavigationButton.vue";

export default {
  name: "NavBar",
  components: { NavigationButton, NavBarPlaylist },
  data: function () {
    return {
      navbarList: [
        { text: "Home", iconName: "fas fa-home fa-2x" },
        { text: "Search", iconName: "fas fa-search fa-2x" },
        { text: "Your Library", iconName: "fas fa-book fa-2x" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  background-color: black;
  height: 100%;
  padding-left: 24px;

  &-icon {
  }
}
.mainNavList {
  display: grid;
  grid-template-rows: repeat(3, 40px);
  margin-bottom: 20px;
}
</style>
