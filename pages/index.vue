<script setup lang="ts">
// @ts-nocheck

definePageMeta({
  middleware: [
    function ({ params }, from) {
      // console.log('middleware', params, from)
    },
  ]
})
</script>

<template>
  <div>
    <h3>
      Page: Home page
    </h3>
    <p>
      Welcome to the home page
    </p>
    <h4>Status:</h4>
    <pre>{{ useTodosStore().allStatus }}</pre>
    <h4>Erros:</h4>
    <pre>{{ useTodosStore().errors?.[0] }}</pre>
    <h4>Loading:</h4>
    <pre>{{ useTodosStore().loading }}</pre>
    <h4>To dos:</h4>
    <pre>{{ useTodosStore().todo }}</pre>
  </div>
</template>

<style scoped></style>
