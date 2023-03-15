<template>
  <div>
    <h1>API Calls</h1>
    <!-- <GetData /> -->
    <!-- <PosrRequest /> -->
    <DeleteRequest />
  </div>
</template>

<script>
// import GetData from './GET'
// import PosrRequest from './POST'
import DeleteRequest from './Delete'
export default{
  name: 'API',
  components: {
    // GetData,
    // PosrRequest,
    DeleteRequest
  }
}
</script>

<!-- 
  first install axios and vue-axios
 -->