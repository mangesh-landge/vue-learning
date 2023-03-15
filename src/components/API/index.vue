<template>
  <div>
    <h1>API Calls</h1>
    <!-- <GetData /> -->
    <PosrRequest />
  </div>
</template>

<script>
// import GetData from './GET'
import PosrRequest from './POST'
export default{
  name: 'API',
  components: {
    // GetData,
    PosrRequest
  }
}
</script>

<!-- 
  first install axios and vue-axios
 -->