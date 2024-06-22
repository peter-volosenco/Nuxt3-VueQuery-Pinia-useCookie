<script setup lang="ts">

const login = async () => {
  const user = $fetch('http://localhost:3000/api/login/signin')

  user.then((res) => {
    navigateTo('/')
  });
}
</script>

<template>
  <div>
    <h3>
      Page: login
    </h3>

    <div>
      <div @click="login">Login</div>
    </div>
  </div>
</template>

<style scoped></style>
