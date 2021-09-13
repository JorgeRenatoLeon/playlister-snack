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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
