<template>
  <div>
    <h1>API Calls</h1>
    <GetData />
  </div>
</template>

<script>
import GetData from './GET'
export default{
  name: 'API',
  components: {
    GetData,
  }
}
</script>

<!-- 
  first install axios and vue-axios
 -->