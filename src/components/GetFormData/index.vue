<template>
  <div>
    <h1>Get Form Data</h1>
    <input type="text" v-model="loginForm.username" name="username" placeholder="enter user name" > <br> <br>
    <input type="password" v-model="loginForm.password" name="password" placeholder="enter password"> <br> <br>
    <button v-on:click="submitForm">submit</button>
  </div>
</template>

<script>
  export default{
    name: 'GetFormData',
    methods: {
      submitForm(){
        console.log('loginData', this.loginForm)
      }

    },
    data(){
      return {loginForm: {
        username: null,
        password: null
      }}
    }
  }
</script>