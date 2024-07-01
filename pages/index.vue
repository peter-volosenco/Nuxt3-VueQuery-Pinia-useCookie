<script setup lang="ts">
// @ts-nocheck

definePageMeta({
  middleware: [
    function ({ params }, from) {
      // console.log('middleware', params, from)
    },
  ]
})

import { QueryClient } from '@tanstack/vue-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

const toDoIndex = ref(1)


/*
  This Use Query doesn't share cache with Pinia use Query

  Uncomment the code below to see

  It will load same data twice
*/
// const config = useRuntimeConfig();
// const loadsTwiceWithPinia = await useQuery({
//   queryKey: ["todos", 1],
//   queryFn: async () => {
//     return fetch(`${config.public.apiBaseUrlJsonPh}/todos/9`).then(
//       (res) => res.json()
//     );
//   },
//   staleTime: Infinity,
//   cacheTime: Infinity,
// });


const loadMany = async () => {
  useTodosStore().loadManyBeta();
}

const loadOne = async () => {
  useTodosStore().loadOneBeta(toDoIndex.value);
}
const loadOneStoreAuth = async () => {
  useAuthStore().loadOneBeta(toDoIndex.value);
}

//Pinia Store load data through Vue Query

onMounted(() => {
  useTodosStore().loadOneBeta(1);
})

// useTodosStore().loadManyBeta();

/*
  Older code
*/
// const r = ref({})
// const load1 = async () => {
//   try {
//     const queryKey = ['posts'];
//     const queryFn = () => fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json());
//     const data = await queryClient.fetchQuery({ queryKey, queryFn })

//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// }
</script>

<template>
  <div id="indexPage" class="page">
    <h1>
      Page: Home page
    </h1>
    <p>
      Welcome to the Home Page
    </p>

    <div class="btn-load" @click="loadOne">Load 'To do' by index</div>
    <input type="number" v-model="toDoIndex" min="1" step="1" />
    <hr />
    <div class="btn-load" @click="loadMany">Load Many 'To dos'</div>
    <hr />
    <!-- <pre>{{ loadsTwiceWithPinia }}</pre> -->

    <h4>Pinia store: To do one (response):</h4>
    <pre>{{ useTodosStore().todoResponse }}</pre>

    <h4>Pinia store: To do list (response):</h4>
    <div v-if="useTodosStore().todoResponse.loading">Loading...</div>
    <div v-if="useTodosStore().todoResponse.error"> {{ useTodosStore().todoResponse.error }}</div>
    <pre
      v-if="!useTodosStore().todoResponse.loading && !useTodosStore().todoResponse.error">{{ useTodosStore().todosResponse }}</pre>
  </div>
</template>


<style scoped>
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-left: 3px solid darkmagenta;
  width: calc(100% - 30px);
}

.btn-load {
  padding: 2px 4px;
  background-color: darkmagenta;
  display: inline-block;
  cursor: pointer;
  color: white;
  margin: 0 10px 15px 0;
}
</style>
