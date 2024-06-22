// @ts-nocheck

export default defineNuxtRouteMiddleware(async (to, from) => {

    try {
        const {user} = await $fetch("/api/auth/check")

        console.log('auth check', user);

        if (user?.id != null) {
            return;
        }
    }catch(e){
        console.error('auth check error', e);
    }

    return navigateTo('/login')
})
