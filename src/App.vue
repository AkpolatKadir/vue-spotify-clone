<template>
  <div id="app">
    <NavBar />
    <MainContent />
  </div>
</template>

<script>
import NavBar from "./components/TheNavBar.vue";
import MainContent from "./components/TheMainContent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MainContent,
  },
};
</script>

<style>
body {
  height: 100vh;
}

#app {
  display: grid;
  grid-template-columns: 232px auto;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
