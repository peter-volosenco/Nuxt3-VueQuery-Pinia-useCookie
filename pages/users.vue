<script setup lang="ts">
definePageMeta({
  middleware: [
    function ({ params }, from) {
      // console.log('middleware', params, from)
    },
    'auth'
  ]
})

const rUsers = ref(null);

const loadUsers = async () => {
  const users = await $fetch("/api/users");

  rUsers.value = users;
}

</script>

<template>
  <div class="page">
    <h1>
      Page: Users
    </h1>

    <p class="btn-load" @click="loadUsers">Load users</p>

    <pre>{{ JSON.stringify(rUsers?.data, null, 2) }}</pre>
  </div>
</template>

<style scoped>
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-left: 3px solid darkmagenta;
  width: calc(100% - 30px);
}

.btn-load {
  padding: 2px 4px;
  background-color: darkmagenta;
  display: inline-block;
  cursor: pointer;
  color: white;
}
</style>
