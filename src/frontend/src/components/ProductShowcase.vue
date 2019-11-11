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

                <div v-if="showHipsterKids" style="font-family: Roboto"><a href="#" v-on:click="goToKids();"><h3><i>Check out the latest addition in the family:  </i> <img src="img/hipster-kids.png" width="100px"></h3></a></div>
            </div>
        </section>
        <div class="py-5 bg-light">
            <div class="container">
                <ul v-if="showHipsterKids" class="nav nav-tabs" id="hipster-tabs">
                    <li class="active">
                        <a class="nav-link active" id="hipster-adult-tab" data-toggle="tab" href="#hipster-adult" aria-controls="hipster-adult">Hipster Classic</a>
                    </li>
                    <li>
                        <a class="nav-link" id="hipster-kids-tab" data-toggle="tab" href="#hipster-kids" aria-controls="hipster-kids">Hipster Kids (NEW!)</a>
                    </li>
                </ul>
                <div class="row">
                    <div class="tab-content" id="hipster-tab-content">
                        <div class="tab-pane fade in show active" id="hipster-adult" role="tabpanel" aria-labelledby="hipster-adult-tab">
                            <div class="row">
                                <div v-for="product in $root.showcaseProducts['adults']" v-bind:key="product.id" class="col-md-4">
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
                                                    {{ $root.currency + " " + product.price }} 
                                                    </strong>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>                       
                        </div>
                        <div  v-if="showHipsterKids" class="tab-pane fade" id="hipster-kids" role="tabpanel" aria-labelledby="hipster-kids-tab">
                            <div class="row">
                                <div v-for="product in $root.showcaseProducts['kids']" v-bind:key="product.id" class="col-md-4">
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
                                                    {{ $root.currency + " " + product.price }} 
                                                    </strong>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
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
            products: [],
            showHipsterKids: true
        }
    },
    mounted() {

        var router = this.$router;
        var url = process.env.VUE_APP_PRODUCT_SVC_URL + "/v1/products?api_key=" + localStorage.getItem("PRODUCT_KEY");

        axios({ method: "GET", "url": url, headers: {"x-api-key": localStorage.getItem("PRODUCT_KEY")}}).then(result => {
            this.$root.showcaseProducts = result.data;
            for (const [key, value] of Object.entries(this.$root.showcaseProducts)) {
                for(var i = 0; i < value.length; i++) {
                    var product = value[i];
                    if (this.$root.currency == "USD")
                        product.price = product.priceUsd;
                    else {
                        this.refreshPrice(product);
                    }
                }
            }

            var me = this;
            setTimeout(function() {
                me.$forceUpdate();
            }, 1000);
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            router.push('/config');
        });

        axios({ method: "GET", "url": "/parameters/v1/SHOW_HIPSTER_KIDS"}).then(result => {
            this.showHipsterKids = (result.data.result.toLowerCase() == "true");
            console.log("SHOW_HIPSTER_KIDS: " +  this.showHipsterKids);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

    },
    methods: {
        refreshPrice(product) {
            var url = process.env.VUE_APP_CURRENCY_SVC_URL + "/v1/convert?api_key=" + localStorage.getItem("PRODUCT_KEY");
            var me = this;
            axios.post(url, {
                priceUsd: product.priceUsd,
                toCurrency: this.$root.currency
            })
            .then(function (response) {
                product.price = parseFloat(response.data.price);
                me.$forceUpdate(); 
            })
            .catch(function (error) {
                console.log(error);
            });             
        },
        goToKids() {
            $('.nav-tabs a[href="#hipster-kids"]').tab('show');            
        },
        goToClassic() {
            $('.nav-tabs a[href="#hipster-adults"]').tab('show');            
        }
    },
    computed: {

    },     
    props: {
    },
    watch: {
        '$root.currency': function (val) {
            for (const [key, value] of Object.entries(this.$root.showcaseProducts)) {
                for(var i = 0; i < value.length; i++) {
                    var product = value[i];
                    if (this.$root.currency == "USD")
                        product.price = product.priceUsd;
                    else {
                        this.refreshPrice(product);
                    }
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    color: #33C2F8
}
</style>
