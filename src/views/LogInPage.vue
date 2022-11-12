<template>
  <div class="hello">
    <input v-model="uname" placeholder="Username" />
    <input v-model="pass" placeholder="Password" type="password" />
    <input type="checkbox" id="remember"/>Remember me
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import userClass from "../classes/user.js"

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){
    return {
      uname: "",
      pass: ""
    }
    
  },
  methods: {
    login(){
      fetch('./data/customers.json').then(
            (data)=>{
                data.json().then((users)=>{
                    users.forEach((user)=>{
                        if(user.userName== this.uname && user.password==this.pass){
                            // $rootScope.logFlag = true;
                            logedUser = new userClass(user.customerId,user.userName,user.first_name,user.last_name,user.email);
                            $rootScope.logedUser = logedUser;
                            $rootScope.shopCart = new shoppingCart(logedUser.toObject().cid);
                            this.$router.push('/products');
                        }
                    })
                })
            }
        )
    }

  }
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
