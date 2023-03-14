<template>
  <div>
    <h1>Child to parent</h1>
    <h1>{{ title }}</h1>
    <Child v-on:changeTitle="updateTitle($event)" />
  </div>
</template>

<script>
import Child from './Child.vue'
export default{
  name: 'ChildToParent',
  components: {Child},
  data(){
   return{title:'Props tutorial'}
  },
  methods: {
    updateTitle(title){
      this.title = title;
    }
  }
}
</script>

<!-- 
  props takes an array
 -->