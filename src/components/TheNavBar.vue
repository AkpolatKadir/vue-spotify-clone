<template>
  <section class="navbar">
    <img class="navbar-icon" />

    <ul class="mainNavList">
      <NavigationButton
        v-for="(navItem, index) in navbarList"
        v-bind:key="index"
        v-bind:nav-item="navItem"
      ></NavigationButton>
    </ul>

    <NavBarPlayList />
  </section>
</template>

<script>
import NavBarPlayList from "./NavBarPlayList.vue";
import NavigationButton from "./NavigationButton.vue";

export default {
  name: "NavBar",
  components: { NavigationButton, NavBarPlayList },
  data: function() {
    return {
      navbarList: [
        { text: "Home", iconModifier: "home" },
        { text: "Search", iconModifier: "search" },
        { text: "Your Library", iconModifier: "library" },
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
    mask: url("../assets/icons/logo.svg");
  }
}
.mainNavList {
  display: grid;
  grid-template-rows: repeat(3, 40px);
  margin-bottom: 20px;
}
</style>
