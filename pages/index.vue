<script setup lang="ts">
definePageMeta({
  middleware: [
    function ({ params }, from) {
      // console.log('middleware', params, from)
    },
    'auth'
  ]
})
</script>

<template>
  <h3>
    Page: index
  </h3>
</template>

<style scoped></style>
