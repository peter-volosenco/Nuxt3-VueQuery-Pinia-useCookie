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
  <div class="page">
    <h1>
      Page: My Profile
    </h1>
    <p>User:</p>
    <pre>{{ useAuthStore().user }}</pre>
    <p>Session:</p>
    <pre>{{ useAuthStore().session }}</pre>
  </div>
</template>

<style scoped></style>
