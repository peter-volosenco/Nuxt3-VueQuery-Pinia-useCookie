<script setup lang="ts">
// @ts-nocheck

definePageMeta({
  middleware: [
    function ({ params }, from) {
      // console.log('middleware', params, from)
    },
  ]
})

//Pinia Store load data through Vue Query
useTodosStore().loadOneBeta(9);
useTodosStore().loadManyBeta();
</script>

<template>
  <div>
    <h1>
      Page: Home page
    </h1>
    <p>
      Welcome to the Home Page
    </p>
    <h4>Pinia store: To do one (response):</h4>
    <pre>{{ useTodosStore().todoResponse }}</pre>
    <h4>Pinia store: To do list (response):</h4>
    <pre>{{ useTodosStore().todosResponse }}</pre>
  </div>
</template>

<style scoped></style>
