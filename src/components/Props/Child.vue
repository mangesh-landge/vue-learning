<template>
  <div>
    <h1>Props child</h1>
      <h3>{{name}}</h3>

      <h3 v-for="user in users" :key="user.name ">
      {{ user.name }}</h3>
  </div>
</template>

<script>
export default{
  name: 'ChildComponent',
  props: ['users']
}
</script>