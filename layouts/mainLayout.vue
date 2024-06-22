<script setup lang="ts">

const logout = () => {
  useAuthStore().clear();
  navigateTo("/");
}

</script>

<template>
  <div>
    <h2>Nav</h2>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/Profile">My Profile</nuxt-link>
      <nuxt-link to="/Users">Users</nuxt-link>
      <span href="/login" class="btn-logout" v-if="useAuthStore().loggedIn" @click="logout">Logout</span>
    </div>
    <slot />
  </div>
</template>

<style scoped>
a {
  margin-right: 10px;
}

.btn-logout {
  padding: 2px 4px;
  background-color: gray;
  display: inline-block;
  cursor: pointer;
  color: white;
}
</style>
