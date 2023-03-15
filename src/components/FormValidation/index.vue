<template>
  <div>
    <div v-if="error.length">
      <h3>Please correct the following errors</h3>
      <ul>
        <li v-for="e in error" v-bind:key="e.id">
        {{ e }}</li>
      </ul>
    </div>
    <h1>Form Validation</h1>
    <form @submit="login">
      <input type="text" placeholder="enter name" v-model="name"> <br><br>
      <input type="text" placeholder="enter password" v-model="password"> <br><br>
      <input type="submit" value="Submit"> <br><br>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormValidation',
  data(){
    return{
      error : [],
      name: null,
      password: null
    }
  },
  methods: {
    login(e){
      this.error = []
      if(this.name && this.password){
        console.warn('No Error')
      }
      if(!this.name){
        this.error.push('user name is required')
      }
      if(!this.password){
        this.error.push('password is required')
      }
      console.warn('Error', this.error)
      e.preventDefault();
    }
  }
}
</script>