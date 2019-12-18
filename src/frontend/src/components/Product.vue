<template>
    <main role="main">
        <div class="py-5">
            <div class="container bg-light py-3 px-lg-5 py-lg-5">
                <div class="row">
                    <div class="col-12 col-lg-5">
                            <img class="img-fluid border" style="width: 100%;"
                            :src="product.picture" />
                    </div>
                    <div class="col-12 col-lg-7">
                            <h2>{{product.name}}</h2>
                            
                            <p class="text-muted" v-if="product.price">
                                {{ $root.currency + " " + product.price }}
                            </p>
                            <hr/>
                            <p>
                                <h6>Product Description:</h6>
                                {{product.description}}
                            </p>
                            <hr/>

                            <form method="POST" action="/cart" class="form-inline text-muted">
                                <input type="hidden" name="product_id" value="1234"/>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="quantity">Quantity</label>
                                    </div>
                                    <select name="quantity" id="quantity" class="custom-select form-control form-control-lg">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>10</option>
                                    </select>
                                    <button type="submit" disabled class="btn btn-info btn-lg ml-3">Add to Cart</button>
                                </div>
                            </form>
                    </div>
                </div>
                <br>
                <Recommendations />
            </div>
        </div>
    
    </main>
</template>

<script>
import axios from "axios";
import Recommendations from "./Recommendations.vue";

export default {
  name: 'Product',
  data () {
      return {
          product: {}
      }
  },
  mounted() {
        var router = this.$router;
        var pathArray = window.location.pathname.split('/');
        var url = process.env.VUE_APP_PRODUCT_SVC_URL + "/product/" + pathArray[pathArray.length-1] + "?api_key=" + localStorage.getItem("PRODUCT_KEY");;

        axios({ method: "GET", "url": url, headers: {"x-api-key": localStorage.getItem("PRODUCT_KEY")}}).then(result => {
            this.product = result.data;
            this.refreshPrice(this.product);
        }).catch(function (error) {
            // handle error
            console.log(error);
            router.replace('/config');
        });
  },
    methods: {
        refreshPrice(product) {
            var url = process.env.VUE_APP_CURRENCY_SVC_URL + "/convert?api_key=" + localStorage.getItem("PRODUCT_KEY");
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
        }
    },  
  props: {
  },
    watch: {
        '$root.currency': function (val) {
            if (this.$root.currency == "USD")
                this.product.price = this.product.priceUsd;
            else {
                this.refreshPrice(this.product);
            }
        }
    },  
  components: {
    Recommendations
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
