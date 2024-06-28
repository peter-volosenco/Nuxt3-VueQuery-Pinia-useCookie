<script setup>

// import { useQuery } from "@tanstack/vue-query";
// import queryBuilder from "~/services/APIQueries";
// import queryOptions from "~/services/APIQueryOptions";
// const queries = new queryBuilder(useRuntimeConfig().public.apiBaseUrlJsonPh, queryOptions.passive);
// let queryTodo = useQuery(queries.todo(1));
// useTodosStore().setOne(queryTodo.data);

// useTodosStore().loadBeta(1);
// const doerefresh = ref(false);
// import { useQueryClient } from "@tanstack/vue-query";
// const queryClient = useQueryClient()
// const test = () => {
//   queryClient.invalidateQueries({ queryKey: ['todo', 1] })
//   console.log('test');
// }

// <div style="cursor: pointer; background-color: aliceblue; display: inline-block;" @click="test">Invalidate</div>

// const runWithDelay = async (callback) => {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   if (typeof callback === 'function') {
//     callback();
//   }
// };

// onMounted(() => {
//   console.log('mounted');
//   // test();

//   runWithDelay(() => {
//     console.log('runWithDelay');
//     doerefresh.value = true;
//     test();
//   });
// })
</script>

<template>
  <div id="app">
    <NuxtLayout name="main-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#layout {
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 20px;
}

.page {
  margin-top: 40px;
}


h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
