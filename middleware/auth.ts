// @ts-nocheck

export default defineNuxtRouteMiddleware(async (to, from) => {
    const data = await $fetch("/api/auth/check")

    console.log(to);

    if(data?.loggedInAt != null)
        return;


    return navigateTo('/login?redirectTo=' + to.path)
})
