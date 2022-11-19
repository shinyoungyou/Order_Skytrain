<template>
  <div>
    <nav-bar></nav-bar>
  </div>
  <router-view />
</template>
<script>
import NavBar from "./components/NavBar.vue"
export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      logFlag: false,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
