<template>
  <div>
    {{ rawHTML }}
    <p v-html="rawHTML"></p>
    <h1>Template in vue js</h1>
    <h3>{{ name }}</h3>
    <h3 v-once>{{ name }}</h3>
    <h3>{{ a + b }}</h3>
    <h3>{{ok ? 'YES' : 'NO' }}</h3>
    <button v-bind:disabled="disableBtn" v-on:click="updateText">Click me</button>
  </div>
</template>
<script>
export default {
  name: 'TemplateComponent',
  data(){
    return {
      name: 'ABCD',
      a : 10,
      b : 20,
      ok : true,
      rawHTML: "<h1>RawHTML Template in vue js</h1>",
      disableBtn : false
    }
  },
  methods: {
    updateText(){
      this.name = 'EFGH',
      this.ok = !this.ok
    }
  }
}
</script>

<!-- 
  Template gives extra features, we can directly manupulate JS properties
  also we can run js with {{}} like sum, or other math calculation
  v-once behaves like constant we cannot change the value with v-once
  use v-html to render HTML element

 -->