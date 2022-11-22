<template>
  <div class="container" :style="{'background-image': 'url(' + product.detailImg +')'}">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h1 style="text-align: left; font-weight: bold">{{ product.pName }}</h1>
        <p class="prodDescription" style="text-align: left">
          {{ product.description }}
        </p>
        <p style="text-align: left">*Fields Required.</p>
      </div>
      <div class="col-md-5 col-lg-5 col-sm-12">
        <!-- <img class="prodImage" :alt="product.pName" /> -->
      </div>
    </div>
    <div class="row" v-for="(value, ingredientName, idx) in ingredients" :key="idx">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">{{ingredientName}}</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in value" :key="item.iid">
            <!-- item card -->
            <div class="card shadow-sm" @click="showEditBtn($event, item)" v-show="!editFlag || !(selected.iid==item.iid)" style="width: 100%; height: 100%">
              <img :src="item.img" :alt="item.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{item.iName}}</h5>
                <p class="card-text">
                  <span v-show="item.price">${{ item.price }} · </span>{{ item.cals }}Cals
                </p>
                <button v-show="selected.iid==item.iid" @click="editItem(item)" class="btn btn-outline-success">Edit</button>
              </div>
            </div>
            <!-- edit item card -->
            <div class="card shadow-sm" style="width: 100%; height: 100%" v-show="selected.iid==item.iid&& editFlag">
              <nav v-show="!item.editPrice">
                <ul>
                  <li v-for="(option, idx) in item.edit" :key="idx">{{option}}</li>
                </ul>
                <button @click="doneEdit(item)" class="btn btn-outline-success">Done</button>
              </nav>  
              <nav v-show="item.editPrice">
                <ul>
                  <li v-for="(option, idx) in item.editPrice" :key="idx">{{option.eName}} +${{option.ePrice}}</li>
                </ul>
                <button @click="doneEdit(item)" class="btn btn-outline-success">Done</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <shopping-cart></shopping-cart>
  </div>
</template>
<script>
import readJson from "../services/JsonService";
// import jQuery from "jquery";
// const $ = jQuery;
import ShoppingCart from "./ShoppingCart.vue"

export default {
  name: "ShowDetails",
  components: {
    ShoppingCart
  },
  data() {
    return {
      products: [],
      product: {},
      id: 0,
      ingredients: [],
      editFlag: false,
      selected: '',
      selectItems: new Map()
    };
  },
  methods: {
    loadIngredients() {
      readJson.getIngredientsJson().then((res) => {
        this.ingredients = res.data;
        console.log(this.ingredients);
      });
    },
    showEditBtn(event, item){
      this.selectItems.set(item.iid, {...item, amount:1});
      this.$emit('selectItems', this.selectItems);
      event.currentTarget.style = "border: 3px solid #00491e; height: 100%";
      if (item.edit || item.editPrice){
        this.selected = item
      }
    },
    editItem(){
      this.editFlag = true
    },
    doneEdit(){
      this.editFlag = false
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id > 100 && this.id < 200) {
      readJson
        .getProductsJson()
        .then((res) => {
          res.data.sandwiches.forEach((product) => {
            if (product.pid == this.id) {
              this.product = product;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (this.id > 200 && this.id < 300) {
      readJson
        .getProductsJson()
        .then((res) => {
          res.data.salads.forEach((product) => {
            if (product.pid == this.id) {
              this.product = product;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (this.id > 300) {
      readJson
        .getProductsJson()
        .then((res) => {
          res.data.breakfasts.forEach((product) => {
            if (product.pid == this.id) {
              this.product = product;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.loadIngredients();
  },
};
</script>
<style scoped>
.container {
  background-repeat: no-repeat;
}

.pdpLeftPart {
  padding: 60px 0 15px 0;
}
.prodImage {
  width: 40%;
  padding: 0;
  padding-top: 60px;
  position: fixed;
  right: 0;
}

.card.shadow-sm {
  transition: 0.4s;
}
</style>
