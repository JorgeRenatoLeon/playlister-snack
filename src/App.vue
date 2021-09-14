<template>
  <div id="app">
    <PrincipalView/>
  </div>
</template>

<script>
import PrincipalView from './views/PrincipalView.vue'

export default {
  name: 'App',
  components: {
    PrincipalView,
  }
}
</script>

<style>
#app {
  font-family: Montserrat, sans-serif;
  color: rgba(255,255,255,0.9);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
