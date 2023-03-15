<template>
  <div>
    <h2>Get Data</h2>
    <table border="1px solid">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userData" v-bind:key="user.id">
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <img width="100px" height="100px" :src= "user.avatar" alt='logo'>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)
export default{
  name: 'GetData',
  data(){
    return {
      userData : []
    }
  },
  mounted(){
    Vue.axios.get('https://reqres.in/api/users').then((res)=> this.userData = res?.data.data)
  }
}
</script> 