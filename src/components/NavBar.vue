<template>
  <nav
    v-show="logFlag && loginFlag"
    class="navbar navbar-expand-sm navbar-light"
    style="background-color: #fff; border-bottom: 1px solid #ececec"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/menu" style="font-weight: bold"
        ><span style="color: #f2b840">Order</span
        ><span style="color: #3d8a39">SkyTrain</span></router-link
      >
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              to="/menu"
              aria-current="page"
              >Menu<span class="visually-hidden">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/sandwiches"
              >Sandwiches</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/salads"
              >Salads</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/breakfast"
              >Breakfast</router-link
            >
          </li>
          <form class="d-flex my-2 my-lg-0">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
              v-model="itemSelector" 
              
            />
            <router-link
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              to="searchitem"
              @click="displaySearch"
              >Search</router-link
            >
          </form>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Account</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <!-- <router-link class="nav-link dropdown-item" v-show="!logFlag" to="/Login">Login</router-link> -->
              <router-link
                @click="logout(logFlag)"
                class="nav-link dropdown-item"
                to="/Logout"
                >Logout</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/Cart">Cart</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  props: ["logFlag"],
  data() {
    return {
      loginFlag: true,
      itemSelector: "",
      // routeName: "",
    };
  },
  methods: {
    logout(logFlag) {
      logFlag = false;
      this.loginFlag = logFlag;
    },
    displaySearch() {
      if(!this.itemSelector.match(/\S/g)){
          alert("Write something")
      }else{
        this.$emit("SearcedItems", this.itemSelector);
      }
    },
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
