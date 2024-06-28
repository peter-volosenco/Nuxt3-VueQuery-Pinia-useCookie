<script setup lang="ts">
definePageMeta({
  middleware: [
    function ({ params }, from) {

      const { query } = useRoute();

      //default to homepage in case logged in
      if (useAuthStore().loggedIn)
        return navigateTo(query.redirectTo as string, {
          replace: true,
        });

    },
  ]
})

const { query } = useRoute();

const login = () => {
  useAuthStore().signIn();
}

watchEffect(async () => {
  if (useAuthStore().user) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});

</script>

<template>
  <div class="page">
    <h1>
      Page: Login
    </h1>

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
