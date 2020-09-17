<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
  // import Vue from 'vue'
  // import VuePageTransition from 'vue-page-transition'
  
  // Vue.use(VuePageTransition)
</script>

<style lang="scss">
#app {
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
p {
    margin-bottom: -15px;
    color: black;
    font-style: normal;
    font-size: 10px;
    line-height: 22px;
  }

h1{
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 96px;
}
</style>
