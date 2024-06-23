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
  <div>
    <h3>
      Page: My Profile
    </h3>
    <div>User:</div>
    <pre>{{ useAuthStore().user }}</pre>
    <div>Session:</div>
    <pre>{{ useAuthStore().session }}</pre>
  </div>
</template>

<style scoped></style>
