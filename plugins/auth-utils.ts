export default defineNuxtPlugin(() => {
    const { session } = useUserSession()

    const config = useRuntimeConfig();

    const api = $fetch.create({
      baseURL: config.public.apiBaseUrl,
      onRequest({ request, options, error }) {
        if (session.value?.token) {
          const headers = options.headers ||= {}
          if (Array.isArray(headers)) {
            headers.push(['Authorization', `Bearer ${session.value?.token}`])
          } else if (headers instanceof Headers) {
            headers.set('Authorization', `Bearer ${session.value?.token}`)
          } else {
            headers.Authorization = `Bearer ${session.value?.token}`
          }
        }
      },
      async onResponseError({ response }) {
        if (response.status === 401) {
          await navigateTo('/login')
        }
      }
    })

    // Expose to useNuxtApp().$api
    return {
      provide: {
        api
      }
    }
  })
