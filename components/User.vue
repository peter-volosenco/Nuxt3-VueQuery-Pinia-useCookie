<script setup lang="ts">
import { useUserStore } from '~/stores/userStore'
import { fetchUsers } from '~/composables/useUsers'

const { isLoading, isError, data: users, token, error } = await fetchUsers()

const userStore = useUserStore();

// userStore.setToken('123');

watch(users, async (newUsers, oldUsers) => {
  console.log('newUsers', newUsers);

  const users = newUsers?.data.map((x) => x);
  userStore.setUsers(users);
});

</script>

<template>
  <div>
    <pre>
      <h1>token</h1>
      {{ token }}

      <h1>users</h1>
      <div v-if="isLoading">Loading..</div>
      <pre v-else>
        {{ users?.data }}
      </pre>
    </pre>
  </div>
</template>

<style scoped></style>
