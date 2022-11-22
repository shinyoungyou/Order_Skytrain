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
export default {
    name: "ShoppingCart",
    props: [
        'selectItems'
    ],
    data(){
        return {
            products: new Array()
        }
    },
    methods: {
        addNew(){
            this.products.push(this.selectItems);
        }
    }
}
</script>