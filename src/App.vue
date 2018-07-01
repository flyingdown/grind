<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style>
/*html, body {
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    overflow: hidden;
}*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  margin: 0px, auto;
  /*transform: scale(0.5,0.5);*/
  /*zoom: 0.61;*/
}

/*html {
  transform:scale(1.10)
  background-color: black;
}*/
</style>
