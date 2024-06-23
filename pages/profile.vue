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
    <pre>{{ useAuthStore().user }}</pre>
  </div>
</template>

<style scoped></style>
