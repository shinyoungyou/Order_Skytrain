<template>
  <article class="hello">
    <aside v-for="salad in products.salads" :key="salad.pid">
        <img :src="salad.listImg" :alt="salad.pName">
        <h3>{{salad.pName}}</h3>
    </aside>
  </article>
</template>

<script>
import productList from '../data/products-data.json'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){
    return {
      products: productList
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
article {
  display: flex;
  flex-wrap: wrap;

}
</style>
