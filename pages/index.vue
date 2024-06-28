<script setup lang="ts">
// @ts-nocheck

definePageMeta({
  middleware: [
    function ({ params }, from) {
      // console.log('middleware', params, from)
    },
  ]
})

useTodosStore().loadOneBeta(9);
useTodosStore().loadManyBeta();
</script>

<template>
  <div>
    <h3>
      Page: Home page
    </h3>
    <p>
      Welcome to the home page
    </p>
    <h4>To do one response:</h4>
    <pre>{{ useTodosStore().todoResponse }}</pre>
    <h4>To do one response:</h4>
    <pre>{{ useTodosStore().todosResponse }}</pre>
  </div>
</template>

<style scoped></style>
