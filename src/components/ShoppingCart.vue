<template>
    <section id="cart">
        <table v-if="cartFlag">
            <tbody>
                <tr v-for="item in selectItems" :key="item[1].iid">
                    <td>{{item[1].iName}}</td>
                    <td>{{item[1].price}}</td>
                    <td>{{item[1].cals}}</td>
                    <td>{{item[1].amount}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><button @click="addCart">-</button><button>+</button></td>
                    <td>{{total}}</td>
                </tr>
            </tfoot>
        </table>
        <table v-if="!cartFlag">
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
            shopFlag: true,
            priceFlag: false,
            selProd: null,
            total: 0
        }
    },
    methods: {
        addCart(){
            if(this.products.has(this.selectItems.iid)){
                this.selProd = this.products.get(this.selectItems.iid);
                this.selProd.amount = this.selProd.amount + 1;
            }else{
                this.selProd = new ProductClass(this.selectItems.iid, this.selectItems.iName, this.selectItems.cals, this.selectItems.price);
            }
            this.products.set(this.selProd.iid, this.selProd);
        },
        prodTotal(){
            this.selProd.price += this.selProd.price;
        }
    },
    mounted(){
    }
}
</script>
<style scoped>
    #cart table:first-child {
        width: 100%;
        height: 4vh;
        background-color: white;
    }
    #cart table:last-child {
        width: 70%;
        border-width: 1px 0;
        border-color: #eee;
    }
</style>