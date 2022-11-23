<template>
  <div>
    <nav-bar :logFlag="logFlag"></nav-bar>
  </div>
<<<<<<< HEAD
  <router-view @selectItems="selected" :selectItems="selectItems"/>
=======
  <router-view @handleLogFlag="handleLogFlag" />
>>>>>>> 67d9d4056c74ef8a42521cadcccdf8c4cd0a0c15
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
      selectItems: null
    };
  },
  methods: {
<<<<<<< HEAD
    selected(selectItems){
      this.selectItems = selectItems;
    }
  }
=======
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
>>>>>>> 67d9d4056c74ef8a42521cadcccdf8c4cd0a0c15
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
