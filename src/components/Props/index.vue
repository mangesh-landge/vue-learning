<template>
  <div>
    <h1>Props in Vue JS</h1>
    <Child v-bind:users='users' />
  </div>
</template>

<script>
import Child from './Child.vue'
export default{
  name: 'PropsComponent',
  components: {Child},
  data(){
   return{ users: [
    {name: 'ABC'}, 
    {name: 'DEF'}, 
    {name: 'GHI'}, 
    {name: 'JKL'}, 
    {name: 'MNO'}, 
   ]}
  }
}
</script>

<!-- 
  props takes an array
 -->