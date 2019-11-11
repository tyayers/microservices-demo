<template>
    <div v-if="products.length > 0">
        <h5 class="text-muted">Products you might like</h5>
        <div class="row my-2 py-3">
            <div v-for="product in products" class="col-sm-6 col-md-4 col-lg-3">
                <div class="card mb-3 box-shadow">
                    <a :href="'/product/' + product.id">
                        <img class="card-img-top border-bottom" alt =""
                            style="width: 100%; height: auto;"
                            :src="product.picture">
                    </a>
                    <div class="card-body text-center py-2">
                        <small class="card-title text-muted">
                            {{product.name}}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Recommendations',
  data () {
      return {
          products: []
      }
  },
  mounted() {
    var router = this.$router;
    var pathArray = window.location.pathname.split('/');
    var recUrl = process.env.VUE_APP_RECOMMENDATION_SVC_URL + "/v1/recommendations/" + pathArray[pathArray.length-1] + "?api_key=" + localStorage.getItem("RECOMMENDATION_KEY");;

    axios({ method: "GET", "url": recUrl, headers: {"x-api-key": localStorage.getItem("RECOMMENDATION_KEY")}}).then(result => {
        var recommendations = result.data;

        if (recommendations != undefined && recommendations.length > 0) {
            
            for (var i = 0; i < recommendations.length; i++) {
                var prodUrl = process.env.VUE_APP_PRODUCT_SVC_URL + "/v1/product/" + recommendations[i] + "?api_key=" + localStorage.getItem("PRODUCT_KEY");;
                axios({ method: "GET", "url": prodUrl, headers: {"x-api-key": localStorage.getItem("PRODUCT_KEY")}}).then(result => {
                    this.products.push(result.data);
                }).catch(function (error) {
                    // handle error
                    console.log(error);
                    // Don't go to config because of recommendations
                    //router.replace('/config');
                });  
            }
        }
    }).catch(function (error) {
        // handle error
        console.log(error);

        // The recommendationservice isn't so important, we won't go to config if the connection is broken
        //router.replace('/config');
    });
  },  
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
