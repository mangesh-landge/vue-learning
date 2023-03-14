<template>
  <div>
    <h1 class="homeStyle">Class and Style Binding</h1>
    <h1 v-bind:style="{color: show ? color1 : color2}" class="homeStyle">Style Bindings</h1>
    <h1 v-bind:class="{diplay:show, displayColor : show}" class="display">Style Bindings with Object</h1>
    <!-- <h1 v-bind:class="['arrayClass']" class="arrayStyle">class binding with array</h1> -->
    <!-- obove or below one also in the array we can handle the dynamic classes -->
    <h1 v-bind:class="[aClass ]" class="arrayStyle">class binding with array</h1>
  </div>
</template>
<script>
export default {
  name: 'ClassAndStyleBindings',
  data(){
    return {
      show : true,
      aClass: 'arrayClass',
      color1: 'blue',
      color2: 'red'
    }
  } 
}
</script>

<style  scoped>
.homeStyle{
  color: red;
}
.diplay{
  background-color: brown;
}
.arrayStyle{
  background-color: aqua;
}
</style>

<!-- 

 -->