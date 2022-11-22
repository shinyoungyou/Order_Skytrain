<template>
    <section>
        <table v-if="cartFlag">
            <tbody>
                <tr v-for="item in selectItems" :key="item.iid">
                    <td>{{item.iName}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.cals}}</td>
                    <td>{{item.amount}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><button>-</button>{{}}<button>+</button></td>
                    <td>{{total}}</td>
                </tr>
            </tfoot>
        </table>
        <table>
            <thead>
                <tr>
                    <th>Products</th>
                    <th>Amount</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                
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
            products: null
        }
    },
    methods: {
        addCart(){
            this.products = new ProductClass(this.selectItems.iid, this.selectItems.iName, this.selectItems.cals, this.selectItems.price);
        }
    }
}
</script>