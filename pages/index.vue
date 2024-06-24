<script setup lang="ts">
// @ts-nocheck

definePageMeta({
  middleware: [
    function ({ params }, from) {
      // console.log('middleware', params, from)
    },
  ]
})

import { useQuery } from "@tanstack/vue-query";

import queryBuilder from "~/services/APIQueries";
import queryOptions from "~/services/APIQueryOptions";

const queries = new queryBuilder(useRuntimeConfig().public.apiBaseUrlJsonPh, queryOptions.passive);

const todosResponse = await useQuery(queries.todos());

</script>

<template>
  <div>
    <h3>
      Page: Home page
    </h3>
    <p>
      Welcome to the home page
    </p>
    <h4>Vue Query options:</h4>
    <pre>{{ queryOptions }}</pre>
    <h4>To dos:</h4>
    <pre>{{ todosResponse }}</pre>
  </div>
</template>

<style scoped></style>
