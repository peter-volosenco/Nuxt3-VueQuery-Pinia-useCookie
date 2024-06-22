// @ts-nocheck

export default defineNuxtRouteMiddleware(async (to, from) => {

    const {user} = await $fetch('http://localhost:3000/api/login/check')

    console.log('auth check', user);

    if (user?.id != null) {
        return
    }

    return navigateTo('/login')
})
