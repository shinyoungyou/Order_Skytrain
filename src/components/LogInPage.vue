<template>
  <div class="hello">
    <input v-model="uname" placeholder="Username" />
    <input v-model="pass" placeholder="Password" type="password" />
    <input v-on:click="isChecked" type="checkbox" id="remember" />Remember me
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import readJson from "../services/JsonService";
import userClass from "../classes/user"
import cookieClass from "../classes/cookieClass"

export default {
  name: "LoginPage",
  props: ["loginFlag"],
  data() {
    return {
      uname: "",
      pass: "",
    };
  },
  methods: {
    login() {
      readJson
        .getUsersJson()
        .then((res) =>
          res.data.forEach((user) => {
            if (user.username == this.uname && user.password == this.pass) {
              let loggedUser = new userClass(user.cid, user.firstName, user.lastName, user.username, user.email, user.address, user.cardNum, user.expDate)
            
              sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser.toObject()));

              if(document.querySelector("#remember").checked){
                const cookieObj = new cookieClass();
                cookieObj.setCookie('uname', loggedUser.toObject().uname);
              }
              alert(`Welcome, ${loggedUser.toObject().fullname}`)

              this.$router.push("/sandwiches");
              // this.loginFlag = true;
            }
          })
        )
        .catch((err) => console.log(err));
    },
    // isChecked(e) {
    //   if (e.target.checked) {
    //     const cookieObj = new cookieClass();
    //     console.log(this.userObj);
    //     console.log(this.userObj.uname);
    //     cookieObj.setCookie('username', this.userObj.uname);
    //   }
    // },
  },
  mounted() {
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (loggedUser){
      this.$router.push("/sandwiches");
    }
    console.log(loggedUser);

    const cookieObj = new cookieClass();
    if(cookieObj.getCookie('uname')!=''){
    this.uname = cookieObj.getCookie('uname');
}
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
