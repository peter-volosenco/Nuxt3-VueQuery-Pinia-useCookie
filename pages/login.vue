<script setup lang="ts">
definePageMeta({
  middleware: [
    function ({ params }, from) {

      //default to homepage in case logged in
      if (useAuthStore().loggedIn)
        return navigateTo("/");
    },
  ]
})



const login = () => {
  useAuthStore().signIn();
  navigateTo("/");
}



</script>

<template>
  <div>
    <h3>
      Page: Login
    </h3>

    <p>
      Login before accesing protected page.
    </p>

    <div>
      <div class="btn-login" @click="login">Login</div>
    </div>
  </div>
</template>

<style scoped>
.btn-login {
  padding: 2px 4px;
  background-color: gray;
  display: inline-block;
  cursor: pointer;
  color: white;
}
</style>
