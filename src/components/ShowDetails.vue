<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h1 style="text-align: left; font-weight: bold">{{ product.pName }}</h1>
        <p class="prodDescription" style="text-align: left">
          {{ product.description }}
        </p>
        <p style="text-align: left">*Fields Required.</p>
      </div>
      <div class="col-md-5 col-lg-5 col-sm-12">
        <img class="prodImage" :src="product.detailImg" :alt="product.pName" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">Size*</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="size in ingredients.size" :key="size.iid">
            <div class="card shadow-sm" style="width: 100%; height: 100%">
              <img :src="size.img" :alt="size.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{size.iName}}</h5>
                <p class="card-text">
                  ${{ size.price }}<span>•</span>{{ size.cals }}Cals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">Bread*</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="bread in ingredients.bread" :key="bread.iid">
            <div class="card shadow-sm" style="width: 100%; height: 100%">
              <img :src="bread.img" :alt="bread.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{bread.iName}}</h5>
                <p class="card-text">
                  {{ bread.cals }}Cals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">Protein*</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="protein in ingredients.protein" :key="protein.iid">
            <div class="card shadow-sm" style="width: 100%; height: 100%">
              <img :src="protein.img" :alt="protein.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{protein.iName}}</h5>
                <p class="card-text">
                  {{ protein.cals }}Cals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">Cheese</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="cheese in ingredients.cheese" :key="cheese.iid">
            <div class="card shadow-sm" style="width: 100%; height: 100%">
              <img :src="cheese.img" :alt="cheese.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{cheese.iName}}</h5>
                <p class="card-text">
                  {{ cheese.cals }}Cals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">Veggies</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="veggies in ingredients.veggies" :key="veggies.iid">
            <div class="card shadow-sm" style="width: 100%; height: 100%">
              <img :src="veggies.img" :alt="veggies.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{veggies.iName}}</h5>
                <p class="card-text">
                  {{ veggies.cals }}Cals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">Sauces</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="sauces in ingredients.sauces" :key="sauces.iid">
            <div class="card shadow-sm" style="width: 100%; height: 100%">
              <img :src="sauces.img" :alt="sauces.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{sauces.iName}}</h5>
                <p class="card-text">
                  {{ sauces.cals }}Cals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">Seasonings</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="seasonings in ingredients.seasonings" :key="seasonings.iid">
            <div class="card shadow-sm" style="width: 100%; height: 100%">
              <img :src="seasonings.img" :alt="seasonings.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{seasonings.iName}}</h5>
                <p class="card-text">
                  {{ seasonings.cals }}Cals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">Extras</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="extras in ingredients.extras" :key="extras.iid">
            <div class="card shadow-sm" style="width: 100%; height: 100%">
              <img :src="extras.img" :alt="extras.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{extras.iName}}</h5>
                <p class="card-text">
                  ${{ extras.price }}<span>•</span>{{ extras.cals }}Cals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 pdpLeftPart">
        <h2 style="text-align: left; font-weight: bold">Egg</h2>
        <div class="row g-3">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="egg in ingredients.egg" :key="egg.iid">
            <div class="card shadow-sm" style="width: 100%; height: 100%">
              <img :src="egg.img" :alt="egg.iName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{egg.iName}}</h5>
                <p class="card-text">
                  {{ egg.cals }}Cals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import readJson from "../services/JsonService";

export default {
  name: "ShowDetails",
  data() {
    return {
      products: [],
      product: {},
      id: 0,
      ingredients: [],
    };
  },
  methods: {
    findId() {
      this.products.find((product) => product.pid == parseInt(this.id));
    },
    loadIngredients() {
      readJson.getIngredientsJson().then((res) => {
        this.ingredients = res.data;
        console.log(this.ingredients);
      });
    },
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
</style>
