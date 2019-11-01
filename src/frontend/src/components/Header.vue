<template>
    <header>
        <div class="navbar navbar-dark bg-dark box-shadow">
            <div class="container d-flex justify-content-between">
                <a href="/" class="navbar-brand d-flex align-items-center">
                    Hipster Shop
                </a>
                
                <form class="form-inline ml-auto" method="POST" action="/setCurrency" id="currency_form">
                    <select name="currency_code" class="form-control"
                    onchange="document.getElementById('currency_form').submit();" style="width:auto;">
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
            currencies: ["EUR", "USD"]
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
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
