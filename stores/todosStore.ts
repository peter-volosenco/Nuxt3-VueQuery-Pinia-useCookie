// @ts-nocheck

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

import { useQuery } from "@tanstack/vue-query";
import queryBuilder from "~/services/APIQueries";
import queryOptions from "~/services/APIQueryOptions";

export const useTodosStore = defineStore("Todos", () => {
  // Create state for holding Todos

  const todoResponse = ref({
    data: {} as Todo,
    error: null,
    isLoading: false,
    status: null,
    isFetching: false,
    isPending: false
   });

   const todosResponse = ref({
    data: [] as Todo[],
    error: null,
    isLoading: false,
    status: null,
    isFetching: false,
    isPending: false
   });

   const loadManyBeta = async (index = 1) => {
    const queries = new queryBuilder(useRuntimeConfig().public.apiBaseUrlJsonPh, queryOptions.passive);

    let {
      data, error, isLoading, status, isFetching, isPending
    } = useQuery(queries.todos());

    todosResponse.value.data = data;
    todosResponse.value.error = error;
    todosResponse.value.isLoading = isLoading;
    todosResponse.value.status = status;
    todosResponse.value.isFetching = isFetching;
    todosResponse.value.isPending = isPending;
  }

  const loadOneBeta = async (index = 1) => {
    const queries = new queryBuilder(useRuntimeConfig().public.apiBaseUrlJsonPh, queryOptions.passive);

    let {
      data, error, isLoading, status, isFetching, isPending
    } = useQuery(queries.todo(index));

    todoResponse.value.data = data;
    todoResponse.value.error = error;
    todoResponse.value.isLoading = isLoading;
    todoResponse.value.status = status;
    todoResponse.value.isFetching = isFetching;
    todoResponse.value.isPending = isPending;
  }

  return {
    todoResponse,
    todosResponse,
    loadOneBeta,
    loadManyBeta
  };
});
