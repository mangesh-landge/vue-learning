<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Home /> -->
    <!-- <Home data="Mangesh is here" msg="Hi from Mangesh" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Composition /> -->
    <!-- <Template /> -->
    <!-- <StyleBinding /> -->
    <!-- <DataBinding /> -->
    <!-- <Props /> -->
    <ChildToParent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Composition from './components/Composition'
// import Template from './components/Template'
// import StyleBinding from './components/ClassAndStyleBindings'
// import DataBinding from './components/DataBinding'
// import Props from './components/Props'
import ChildToParent from './components/ChildTOParent'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home,
    // Composition,
    // Template,
    // StyleBinding,
    // DataBinding,
    // Props,
    ChildToParent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
