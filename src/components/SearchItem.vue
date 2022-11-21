<template>
  <div class="container">
    <!-- <h2>Item : {{ searcedItems }}</h2> -->
    <!-- Sand -->
    <h2 style="margin: 6rem 6rem 3rem 0rem; text-align: left">Sandwiches</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      <div class="col" v-for="sandwich in searchSand" :key="sandwich.pid">
        <div class="card shadow-sm" style="width: 100%; height: 100%">
          <img
            :src="sandwich.listImg"
            class="card-img-top"
            :alt="sandwich.pName"
          />
          <div class="card-body">
            <h5 class="card-title" style="text-align: left">
              <router-link
                :to="{ name: 'show-details', params: { id: sandwich.pid } }"
                class="card-title"
                style="text-align: left"
                >{{ sandwich.pName }}</router-link
              >
            </h5>
          </div>
        </div>
      </div>
    </div>
    <!-- Salada -->
    <h2 style="margin: 6rem 6rem 3rem 0rem; text-align: left">Salads</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      <div class="col" v-for="salad in searchSalads" :key="salad.pid">
        <div class="card shadow-sm" style="width: 100%; height: 100%">
          <img :src="salad.listImg" class="card-img-top" :alt="salad.pName" />
          <div class="card-body">
            <h5 class="card-title" style="text-align: left">
              <router-link
                :to="{ name: 'show-details', params: { id: salad.pid } }"
                class="card-title"
                style="text-align: left"
                >{{ salad.pName }}</router-link
              >
            </h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Breakfast -->
    <h2 style="margin: 6rem 6rem 3rem 0rem; text-align: left">Breakfast</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      <div
        class="col"
        v-for="breakfast in searchBreakfasts"
        :key="breakfast.pid"
      >
        <div class="card shadow-sm" style="width: 100%; height: 100%">
          <img
            :src="breakfast.listImg"
            class="card-img-top"
            :alt="breakfast.pName"
          />
          <div class="card-body">
            <router-link
              :to="{ name: 'show-details', params: { id: breakfast.pid } }"
              class="card-title"
              style="text-align: left"
              >{{ breakfast.pName }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import readJson from "../services/JsonService";
export default {
  name: "SearchItem",
  data() {
    return {
      searchSand: [],
      searchSalads: [],
      searchBreakfasts: [],
    };
  },
  props: ["searcedItems"],
  methods: {
    SeaechloadJson() {
      readJson.getProductsJson().then((res) => {
        this.searchSand = [];
        this.searchSalads = [];
        this.searchBreakfasts =[];
        for (let i = 0; i < res.data.sandwiches.length; i++) {
          if (
            res.data.sandwiches[i].pName
              .toLowerCase()
              .includes(this.searcedItems.toLowerCase())
          ) {
            this.searchSand.push(res.data.sandwiches[i]);
          }
        }
        for (let i = 0; i < res.data.salads.length; i++) {
          if (
            res.data.salads[i].pName
              .toLowerCase()
              .includes(this.searcedItems.toLowerCase())
          ) {
            this.searchSalads.push(res.data.salads[i]);
          }
        }
        for (let i = 0; i < res.data.breakfasts.length; i++) {
          if (
            res.data.breakfasts[i].pName
              .toLowerCase()
              .includes(this.searcedItems.toLowerCase())
          ) {
            this.searchBreakfasts.push(res.data.breakfasts[i]);
          }
        }
      });
    },
  },
  watch: {
    searcedItems: function () {
      this.SeaechloadJson();
    },
  },
  mounted() {
    this.SeaechloadJson();
  },
};
</script>