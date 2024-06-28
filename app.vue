<script setup>

// import { useQuery } from "@tanstack/vue-query";
// import queryBuilder from "~/services/APIQueries";
// import queryOptions from "~/services/APIQueryOptions";
// const queries = new queryBuilder(useRuntimeConfig().public.apiBaseUrlJsonPh, queryOptions.passive);
// let queryTodo = useQuery(queries.todo(1));
// useTodosStore().setOne(queryTodo.data);

useTodosStore().loadBeta(1);


const doerefresh = ref(false);

import { useQueryClient } from "@tanstack/vue-query";
const queryClient = useQueryClient()

const test = () => {
  queryClient.invalidateQueries({ queryKey: ['todo', 1] })

  console.log('test');
}


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
  <div>
    <div style="cursor: pointer; background-color: aliceblue; display: inline-block;" @click="test">Invalidate
    </div>
    <NuxtLayout name="main-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
