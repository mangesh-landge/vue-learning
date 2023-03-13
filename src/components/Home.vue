<template>
  <div>

    <h1>Hello from home component</h1>
    <!-- <h2>{{ data }}</h2>
    <p>{{ msg }}</p> -->
    <!-- v-on is used for button events -->
    <button v-on:click="hello('Click')">Call Click Btn</button>
    <button v-on:mouseover="hello('MouseOver')">Call mouseover Btn</button>
  </div>

</template>

<script >
  export default {
    name: 'Home',
    props: {
      data: String,
      msg: String
    },
    methods:{
      hello(data){
        console.log('BTN')
        alert(data)
      }
    }
  }
</script> 