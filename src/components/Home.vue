<template>
  <div>

    <h1>Conditional rendering</h1>
    <!-- <h2>{{ data }}</h2>
    <p>{{ msg }}</p> -->
    <!-- v-on is used for button events -->
    <!-- <button v-on:click="hello('Click')">Call Click Btn</button>
    <button v-on:mouseover="hello('MouseOver')">Call mouseover Btn</button> -->
    <!-- <h1 v-if="show">Conditional rendering if block</h1>
    <h1 v-else>Conditional rendering in else block</h1>
    <button v-on:click="display">Toggle Element</button> -->
    <h1>for loop in vue js</h1>
    <table border="1px solid">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">  
          <th>{{ user.id }}</th>
          <th>{{ user.name }}</th>
          <th>{{ user.email }}</th>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script >
  export default {
    name: 'HomePage',
    props: {
      data: String,
      msg: String
    },
    data(){
      // return {show: true}
      return {
        users: [
          {id: 1, name: 'abc', email: 'abc@gmail.com'},
          {id: 2, name: 'def', email: 'def@gmail.com'},
          {id: 3, name: 'ghi', email: 'ghi@gmail.com'},
          {id: 4, name: 'jkl', email: 'jkl@gmail.com'},
          {id: 5, name: 'mnl', email: 'mnl@gmail.com'},
      ]
      }
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