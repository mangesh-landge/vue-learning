<template>
  <div>
    <h1>Composition perant</h1>
    <Child />
  </div>
</template>
<script>
import Child from './Child'

export default {
  name : 'CompositionPage',
  components: {
    Child
  }
}
</script>
<!-- component is a piece of code whice defines special functionality -->