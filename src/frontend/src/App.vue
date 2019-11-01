<template>
  <div id="app">

    <Header/>
    <main role="main">

        <router-view></router-view>

        <!-- <ProductShowcase /> -->

    </main>
  </div>
  
</template>

<script>
import Header from './components/Header.vue'
import ProductData from './data/products.json'

export default {
  name: 'app',
  data: function() {
    return {
      products: ProductData
    }
  },  
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
