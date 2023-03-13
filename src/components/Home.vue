<template>
  <div>

    <h1>Hello from home component</h1>
    <h2>{{ data }}</h2>
    <p>{{ msg }}</p>
  </div>

</template>

<script >
  export default {
    name: 'Home',
    props: {
      data: String,
      msg: String
    }
  }
</script> 