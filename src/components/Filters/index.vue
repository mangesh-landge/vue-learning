<template>
  <div>
    <h1>Filters in Vue js</h1>
    {{ name | Ucase }}
    {{ amount | currencyConverter}}
  </div>
</template>

<script>
export default{
  name: 'FiltersComponent',
  data(){
    return {name: 'Mangesh Landge', amount: 108}
  }
}
</script>

<!-- 
  filters are used to change the output;
  filters are created globally and without import we can use them anywhere in project
 -->

 