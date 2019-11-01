import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import Product from './components/Product.vue'
import Config from './components/Config.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: ProductShowcase },
  { path: '/product/:id', component: Product },
  { path: '/config', component: Config }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

Vue.use(VueRouter);

new Vue({
  router,
  data: {
    currency: "USD",
    currencyKey: "",
    productKey: "",
    recommendationKey: ""
  },
  mounted: function() {
    this.currencyKey = localStorage.getItem("CURRENCY_KEY");
    this.productKey = localStorage.getItem("PRODUCT_KEY");
    this.recommendationKey = localStorage.getItem("RECOMMENDATION_KEY");
  },
  render: h => h(App),
}).$mount('#app')
