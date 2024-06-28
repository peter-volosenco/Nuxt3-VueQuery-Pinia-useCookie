<script setup lang="ts">

const logout = () => {
  useAuthStore().clear();
  navigateTo("/");
}

const { query } = useRoute();

const login = () => {
  useAuthStore().signIn();
}

</script>

<template>
  <div id="layout">
    <h1>Navigation</h1>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/Profile">My Profile</nuxt-link>
      <nuxt-link to="/Users">Users</nuxt-link>
      <span class="btn-logout" v-if="useAuthStore().loggedIn" @click="logout">Logout</span>
      <span class="btn-login" v-if="!useAuthStore().loggedIn" @click="login">Login</span>
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

.btn-login {
  padding: 2px 4px;
  background-color: gray;
  display: inline-block;
  cursor: pointer;
  color: white;
}
</style>
