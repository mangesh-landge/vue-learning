<template>
  <div>
    <h1>Form with checkbox and radio button in Vue JS</h1>
    <input type="text" placeholder="enter your name" v-model="formData.username" /> <br> <br>
    <input type="text" placeholder="enter your password"  v-model="formData.password"/> <br> <br>
    <p>Choose Hobbies</p>
    <input type="checkbox" id="cricket" value="cricket" v-model="formData.hobbies">
    <label for="cricket">Cricket</label>
    <br> <br>
    <input type="checkbox" id="football" value="football" v-model="formData.hobbies">
    <label for="football">Football</label> <br> <br>
    <p>Select gender</p>
    <input type="radio" id="male" value="male" v-model="formData.gender">
    <label for="male">Male</label> <br> <br>
    <input type="radio" id="female" value="female" v-model="formData.gender">
    <label for="female">Female</label> <br> <br>

    <button v-on:click="submitForm">Submit</button>
  </div>
</template>
<script>
  export default{
    name: 'FormWithCheckBox',
    data(){
      return {
          formData: {
            username: null, 
            password: null, 
            hobbies: [], 
            gender: null
          }
        }
    },
    methods:{
      submitForm(){
        console.log(this.formData);
      }
    }
  }
</script>