<template>
  <div>
    <h1>Dynamic Component</h1>
    <!-- <SignUp />
    <Login /> -->
    <component v-bind:is="cmp" />
    <button v-on:click="updateCMP('Login')">Change Login component</button>
    <button v-on:click="updateCMP('SignUp')">Change SignUp component</button>

  </div>
</template>

<script>
import SignUp from './SignUp.vue';
import Login from './Login.vue'
export default{
  name: 'DynamicComponent',
  components: {
    Login,
    SignUp
  },
  data(){
    return {cmp: Login}
  },
  methods :{
    updateCMP(item){
      this.cmp = item
    }
  }
}</script>