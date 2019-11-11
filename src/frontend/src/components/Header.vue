<template>
    <header>
        <div class="navbar navbar-dark bg-dark box-shadow">
            <div class="container d-flex justify-content-between">
                <a href="/" class="navbar-brand d-flex align-items-center">
                    Hipster Shop
                </a>
                
                <form class="form-inline ml-auto" method="POST" action="/setCurrency" id="currency_form">
                    <select name="currency_code" class="form-control"
                     @change="onCurrencyChange($event)" style="width:auto;">
                        <option v-for="currency in currencies" v-bind:key="currency" :value="currency" :selected="currency == $root.currency ? true : false">{{currency}}</option>
                    </select>
                    <a class="btn btn-primary btn-light ml-2" href="#" role="button">View Cart (0)</a>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
import axios from "axios";

export default {
    name: 'Header',
    data () {
        return {
            currencies: []
        }
    },
    mounted() {
        var router = this.$router;
        var url = process.env.VUE_APP_CURRENCY_SVC_URL + "/v1/currencies?api_key=" + localStorage.getItem("CURRENCY_KEY");
        var key = localStorage.getItem("CURRENCY_KEY");
        axios({ method: "GET", "url": url, "headers": {"x-api-key": key}}).then(result => {
            this.currencies = result.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            router.push('config');
        });
    },  
    methods: {
        onCurrencyChange(event) {
            this.$root.currency = event.target.value;
            // for(var i = 0; i < this.$root.showcaseProducts.length; i++) {
            //     var product = this.$root.showcaseProducts[i];
            //     if (this.$root.currency == "USD")
            //         product.price = product.priceUsd;
            //     else {
            //         var url = process.env.VUE_APP_CURRENCY_SVC_URL + "/v1/convert?api_key=" + localStorage.getItem("PRODUCT_KEY");
            //         axios.post(url, {
            //             priceUsd: product.priceUsd,
            //             toCurrency: this.$root.currency
            //         })
            //         .then(function (response) {
            //             product.price = response.data.price;
            //         })
            //         .catch(function (error) {
            //             console.log(error);
            //         });                    
            //     }
            // }            
        }
    },
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
