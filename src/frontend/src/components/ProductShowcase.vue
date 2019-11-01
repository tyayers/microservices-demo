<template>
    <div>
        <section class="jumbotron text-center mb-0" style="background-color: light-gray;">
            <div class="container">
                <h1 class="jumbotron-heading">
                    One-stop for Hipster Fashion &amp; Style Online
                </h1>
                <p class="lead text-muted">
                    Tired of mainstream fashion ideas, popular trends and
                    societal norms? This line of lifestyle products will help
                    you catch up with the hipster trend and express your
                    personal style. Start shopping hip and vintage items now!
                </p>

                <router-link to="/bar">Visit our latest addition to the family: Baby Hipster!</router-link>
            </div>
        </section>
        <div class="py-5 bg-light">
            <div class="container">
            <div class="row">
                <div v-for="product in products"  v-bind:key="product" class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <a :href="'/product/' + product.id">
                            <img class="card-img-top" alt =""
                                style="width: 100%; height: auto;"
                                :src="product.picture">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ product.name }}
                            </h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="#">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                                    </a>
                                </div>
                                <small class="text-muted">
                                    <strong>
                                    {{ $root.currency + " " + product.priceUsd }} 
                                    </strong>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'ProductShowcase',
    data () {
        return {
            products: []
        }
    },
    mounted() {
        var router = this.$router;
        var url = process.env.VUE_APP_PRODUCT_SVC_URL + "/v1/products?api_key=" + localStorage.getItem("PRODUCT_KEY");;

        axios({ method: "GET", "url": url, headers: {"x-api-key": localStorage.getItem("PRODUCT_KEY")}}).then(result => {
            this.products = result.data.products;
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
