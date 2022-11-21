<template>
  <div>
    <nav-bar :logFlag="logFlag"></nav-bar>
  </div>
  <router-view @handleLogFlag="handleLogFlag" />
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      logFlag: false,
    };
  },
  methods: {
    handleLogFlag(logFlag) {
      this.logFlag = logFlag;
    },
  },
   mounted() {
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (loggedUser){
      this.logFlag = true
      this.$emit("handleLogFlag", this.logFlag)
      console.log(this.logFlag);

    }
  },
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
