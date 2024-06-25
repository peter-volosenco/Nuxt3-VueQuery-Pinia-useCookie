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
    <h4>To dos:</h4>
    <pre>{{ useTodosStore().todo }}</pre>
  </div>
</template>

<style scoped></style>
