<template>
    <section>
        <table v-if="cartFlag">
            <tbody>
                <tr v-for="item in selectItems" :key="item.iid">
                    <td>{{item.iName}}</td>
                    <td v-if="!cartFlag">{{item.price}}</td>
                    <td>{{item.cals}}</td>
                    <td>{{item.amount}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><button @click="flagCtrl">-</button>{{total}}<button>+</button></td>
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
import ProductClass from "../classes/productClass.js"
export default {
    name: "ShoppingCart",
    props: [
        'selectItems'
    ],
    data(){
        return {
            products: new Map(),
            shopFlag: false
        }
    },
    methods: {
        addCart(){
            let selProd = null;
            if(this.products.has(this.selectItems.iid)){
                selProd = this.products.get(this.selectItems.iid);
                selProd.amount = selProd.amount + 1;
            }else{
                selProd = new ProductClass(this.selectItems.iid, this.selectItems.iName, this.selectItems.cals, this.selectItems.price);
            }
            this.products.set(selProd.iid, selProd);
        },
        flagCtrl(){
            return this.cartFlag = true;
        }
    },
    mounted(){
        
    }
}
</script>
<style scoped>

</style>