<template>
<div>
  <router-link to="/">Login</router-link>
  <router-link to="/sandwiches">Sandwiches</router-link>
  <router-link to="/salads">Salads</router-link>
  <router-link to="/breakfast">Breakfast</router-link>
</div>
  <router-view />
  <SandwicheList />
  <SaladList />
  <BreakfastList />
  <LogIn />
</template>
<script>
import SandwicheList from "./views/SandwichPage.vue"
import SaladList from "./views/SaladPage.vue"
import BreakfastList from './views/BreakfastPage.vue'
import LogIn from "./views/LogInPage.vue";

export default {
  name: "App",
  components: {
    SandwicheList,
    SaladList,
    BreakfastList,
    LogIn
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
  margin-top: 60px;
}
</style>

<style scoped>
div{
  display: flex;
  justify-content: space-evenly;
}
</style>
