<script setup lang="ts">
// import { useUserStore } from '~/stores/userStore'
// import { fetchUsers } from '~/composables/useUsers'
// const { loggedIn, user, session, clear } = useUserSession()

// const { isLoading, isError, data: users, token, error } = await fetchUsers()

// const userStore = useUserStore();

// // userStore.setToken('123');

// watch(users, async (newUsers, oldUsers) => {
//   // console.log('newUsers', newUsers);

//   console.log("loggedIn", loggedIn.value);

//   const users = newUsers?.data.map((x) => x);
//   userStore.setUsers(users);
// });

const { session } = useUserSession()
const token = "HELLO 11";

const { $api } = useNuxtApp()
const { data: users } = await useAsyncData('users', () => $api('/users?delay=5'))

</script>

<template>
  <div>
    <pre>
      <h1>token</h1>
      {{ token }}

      <h1>users</h1>
      <div v-if="isLoading">Loading..</div>
      <pre v-else>
        {{ users }}
      </pre>
    </pre>
  </div>
</template>

<style scoped></style>
