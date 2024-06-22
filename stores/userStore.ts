type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export const useUsersStore = defineStore("Users", () => {
  // Create state for holding users
  const errors = ref<string[]>([]);
  const users = ref<User[]>([]);

  /** Function to load user data */
  const loadData = async () => {
    try {
      // Fetch data from the server
      users.value = await $fetch("/api/users");
    } catch (error: any) {
      errors.value.push(error.message);
    }
  };

  return {
    errors,
    users,
    loadData,
  };
});
