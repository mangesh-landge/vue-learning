<template>
  <div>
    <h1>Home Page</h1>
    <p><router-link to="user/1">Mangesh</router-link></p>
    <p><router-link to="user/2">Ganesh</router-link></p>
    <p><router-link to="user/3">Suresh</router-link></p>
    <p><router-link to="user/4">Mukesh</router-link></p>
  </div>
 </template>

 <script>
  export default{
    name: 'PageOne'
  }
</script>