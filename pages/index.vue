<script setup lang="ts">
definePageMeta({
  middleware: [
    function ({ params }, from) {
      // console.log('middleware', params, from)
    },
  ]
})
</script>

<template>
  <h3>
    Page: Home page
  </h3>
  <p>
    Welcome to the home page
  </p>
</template>

<style scoped></style>
