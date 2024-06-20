import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers() {
      return this.users;
    },
  },
  actions: {
    setUsers(users) {
      this.users = users
    },
  },
})