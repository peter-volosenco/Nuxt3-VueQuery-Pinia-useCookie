<script setup lang="ts"></script>

<template>
  <div>
    <h2>Nav</h2>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
      <br /><br />
      <nuxt-link to="/User">User</nuxt-link>
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
