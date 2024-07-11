<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@media screen and (width: 1920px){
  html,body{
    overflow-x: hidden;
  }
}
@media screen and (height: 1080px){
  html,body{
    overflow-y:hidden;
  }
}
html,body{
  margin:0;
  background: #000000;
}
</style>
