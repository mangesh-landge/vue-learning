<template>
  <div>

    <h1>Conditional rendering</h1>
    <!-- <h2>{{ data }}</h2>
    <p>{{ msg }}</p> -->
    <!-- v-on is used for button events -->
    <!-- <button v-on:click="hello('Click')">Call Click Btn</button>
    <button v-on:mouseover="hello('MouseOver')">Call mouseover Btn</button> -->
    <h1 v-if="show">Conditional rendering if block</h1>
    <h1 v-else>Conditional rendering in else block</h1>
    <button v-on:click="display">Toggle Element</button>
  </div>

</template>

<script >
  export default {
    name: 'Home',
    props: {
      data: String,
      msg: String
    },
    data(){
      return {show: true}
    },
    methods:{
      // hello(data){
      //   console.log('BTN')
      //   alert(data)
      // }
      display(){
        this.show = !this.show;
      }
    },
    
    
  }
</script> 