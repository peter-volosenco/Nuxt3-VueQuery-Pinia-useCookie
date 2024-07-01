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

const r = ref({})
const toDoIndex = ref(1)

const load1 = async () => {

  // useTodosStore().loadOneBeta(9);

  // const todos = () => {
  //   return {
  //     queryKey: ["todos"],
  //     queryFn: () => {
  //       return fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json());
  //     },
  //     staleTime: Infinity,
  //     cacheTime: Infinity,
  //   };
  // };

  // let r1 = queryClient.fetchQuery(todos());

  try {
    const queryKey = ['posts'];
    const queryFn = () => fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json());
    const data = await queryClient.fetchQuery({ queryKey, queryFn })

    console.log(data);
  } catch (error) {
    console.log(error)
  }

  // const r1 = await queryClient.fetchQuery({
  //   queryKey: ['posts'],
  //   queryFn: fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json())
  // })

  // r.value = r1;
}

// const config = useRuntimeConfig();

// const x = await useQuery({
//   queryKey: ["todos", 9],
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
// useTodosStore().loadOneBeta(9);
// useTodosStore().loadManyBeta();


</script>

<template>
  <div id="indexPage" class="page">
    <h1>
      Page: Home page
    </h1>
    <p>
      Welcome to the Home Page
    </p>

    <div class="btn-load" @click="loadOne">Load One</div>
    <input type="number" v-model="toDoIndex" min="1" step="1" />
    <hr />
    <div class="btn-load" @click="loadMany">Load Many</div>
    <hr />

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
