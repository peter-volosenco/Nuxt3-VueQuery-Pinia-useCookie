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
  const allStatus = ref<string>('');
  const loading = ref<boolean>(false);
  const errors = ref<string[]>([]);
  const todos = ref<Todo[]>([]);
  const todo = ref<Todo>({} as Todo);

  /** Function to load Todo data */
  const setData = (data:any) => {
    todos.value = data;
  };

  const setOne = (data:any) => {
    todo.value = data;
  };

  const loadData = async () => {
    try {
      // Fetch data from the server
      todos.value = await $fetch("/api/todos");
    } catch (error: any) {
      errors.value.push(error.message);
    }
  };

  const loadBeta = async (index = 1) => {
    errors.value = [];


    const queries = new queryBuilder(useRuntimeConfig().public.apiBaseUrlJsonPh, queryOptions.passive);
    let {
      data, error, isLoading, status
    } = useQuery(queries.todo(index));

    todo.value = data;
    errors.value.push(error);
    loading.value = isLoading;
    allStatus.value = status;
  }

  return {
    loading,
    errors,
    todos,
    todo,
    loadData,
    setData,
    setOne,
    loadBeta,
    allStatus
  };
});
