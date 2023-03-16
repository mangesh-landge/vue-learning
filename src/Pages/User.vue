<template>
  <div>
    <h1>User page</h1>
    <h3>User ID: {{ userId }}</h3>
  </div>
</template>

<script>
export default{
  name: 'UserDetails',
  data(){
    return {userId: this.$route.params.id}
  }
}
</script>