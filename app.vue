<script setup>


import { useQuery } from "@tanstack/vue-query";

import queryBuilder from "~/services/APIQueries";
import queryOptions from "~/services/APIQueryOptions";

const queries = new queryBuilder(useRuntimeConfig().public.apiBaseUrlJsonPh, queryOptions.passive);

let queryTodo = useQuery(queries.todo(1));

useTodosStore().setOne(queryTodo.data);

</script>

<template>
  <div>
    <NuxtLayout name="main-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
