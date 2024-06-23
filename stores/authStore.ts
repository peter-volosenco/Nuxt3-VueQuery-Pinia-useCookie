export const useAuthStore = defineStore("Auth", () => {
  const { loggedIn, user, session, clear, fetch } = useUserSession();
  const signIn = async () => {
    await $fetch("/api/auth/login", { method: "POST" });
    await fetch();
  };

  return { signIn, loggedIn, user, session, clear, fetch, };
});
