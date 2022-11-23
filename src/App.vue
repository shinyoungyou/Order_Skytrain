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
      selectItems: null
    };
  },
  methods: {
    selected(selectItems){
      this.selectItems = selectItems;
      console.log(this.selectItems);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
