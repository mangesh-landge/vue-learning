<template>
  <div>
    <h1>Props child</h1>
     <button v-on:click="updateTitle">Update Parent Title</button>
  </div>
</template>

<script>
export default{
  name: 'ChildComponent',
  methods: {
    updateTitle(){
      this.$emit('changeTitle', 'Props Updated')
    }
  }
}
</script>