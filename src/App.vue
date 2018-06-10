<template>
  <div id="app">
    <router-view/>
    <vue-highcharts></vue-highcharts>
  </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'

export default {
    name: 'App',
    components: {
        VueHighcharts
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
  margin-top: 60px;
}
</style>
