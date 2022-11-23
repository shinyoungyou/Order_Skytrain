<template>
    <section>
        <article id="incart">
            <aside>Ingredients</aside>
            <aside></aside>
            <table v-if="cartFlag">
                <tbody>
                    <tr v-for="item in selectItems" :key="item[1].iid">
                        <td>{{item[1].iName}}</td>
                        <td>${{item[1].price}}</td>
                        <td>{{item[1].cals}}cal</td>
                        <td>{{item[1].amount}}</td>
                    </tr>
                </tbody>
            </table>
        </article>
        <aside class="total">
            <button @click="flagCtrl">-</button>{{total}}<button @click="prodTotal">+</button>
            {{total}}
        </aside>
        <table v-if="!cartFlag" id="cart">
            <thead>
                <tr>
                    <th>Products</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Calories</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, iid) in products" :key="iid">
                    <td>{{product}}</td>
                    <td>{{product.amount}}</td>
                    <td>{{product.total()}}</td>
                    <td>{{product.calTotal()}}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
import ProductClass from "../classes/productClass.js";
export default {
    name: "ShoppingCart",
    props: [
        'selectItems',
        'cartFlag'
    ],
    data(){
        return {
            products: new Map(),
            shopFlag: false,
            priceFlag: false,
            selProd: null,
            asdf: ''
        }
    },
    methods: {
        addCart(){
            if(this.products.has(this.selectItems.iid)){
                this.selProd = this.products.get(this.selectItems.iid);
                this.selProd.amount = this.selProd.amount + 1;
            }else{
                this.selProd = new ProductClass(this.selectItems.iid, this.selectItems.iName, this.selectItems.cals, this.selectItems.price);
                console.log(this.selProd);
            }
            this.products.set(this.selProd.iid, this.selProd);
        },
        prodTotal(e){
            switch(e.target.textContent){
                case "+":
                    this.selProd.price += this.selProd.price;
                break;
                case "-":
                    this.selProd.price -= this.selProd.price;
                break;
            }
        }
    },
}
</script>
<style scoped>
    #incart {
        border: 3px solid #3d8a39;
        border-bottom: 0;
        border-radius: 10px 10px 0 0;
        background-color: white;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
    #incart aside {
        width: 100%;
        padding: 1%;
        background-color: #3d8a39;
        color: whitesmoke;
        text-align: right;
    }
    button {
        width: 40px;
        height: 35px;
        border: 0;
        border-radius: 5px;
        background-color: #3d8a39;
        color: white;
        font-size: 22pt;
        display: flex;
    }
    #incart td {
        padding: 3%;
        border-bottom: 0.5px solid #eee;
    }
    .total {
        width: 100%;
        padding: 2%;
        border-width: 0 3px;
        border-style: solid;
        border-color: #3d8a39;
        display: flex;
        justify-content: right;
    }
</style>