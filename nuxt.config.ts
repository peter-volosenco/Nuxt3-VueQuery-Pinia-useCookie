// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL, // Accessible client-side
    },
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt","@hebilicious/vue-query-nuxt"],
  vueQuery: {
    // useState key used by nuxt for the vue query state.
    stateKey: "vue-query-nuxt", // default
    // If you only want to import some functions, specify them here.
    // You can pass false or an empty array to disable this feature.
    // default: ["useQuery", "useQueries", "useInfiniteQuery", "useMutation", "useIsFetching", "useIsMutating", "useQueryClient"]
    autoImports: ["useQuery"],
    // Pass the vue query client options here ...
    queryClientOptions: {
      defaultOptions: { queries: { staleTime: 5000 } } // default
    },
    // Pass the vue query plugin options here ....
    vueQueryPluginOptions: {}
  }
})
