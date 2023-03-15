<template>
  <div>
    <h2>Post Request</h2>
    <form action="" @submit="submitData" method="post">
      <input type="text" placeholder="enter user email" v-model="post.email"> <br> <br>
      <input type="password" placeholder="enter user password" v-model="post.password"> <br> <br>
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default{
  name: 'PostRequest',
  data(){
    return {
      post: {
        email: null,
        password: null
      }
    }
  },
  methods:{
    submitData(e){
      this.axios.post('https://reqres.in/api/login', this.post).then((res)=> console.log(res))
      e.preventDefault();
      console.log(this.post) // give the tocken as QpwL5tke4Pnpja7X4
    }
  }
}
</script> 