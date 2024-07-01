// @ts-nocheck

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoResponse = {
  data: Todo;
  error: any;
  isLoading: boolean;
  status: string;
  isFetching: boolean;
  isPending: boolean;
};

import { useQueryClient, useQuery } from "@tanstack/vue-query";

export const useTodosStore = defineStore("Todos", () => {
  // Create state for holding Todos

  // Effect scope required to avoid memory leaks warning
  // 1. Vue Query doesn't allow usage of 'useQuery' outside of a component
  // 2. To fix this pass queryClient as a parameter
  // 3. To avoid console warnings, use effectScope
  const scope = effectScope();

  const queryClient = useQueryClient();
  const config = useRuntimeConfig();

  const todoResponse = ref({});
  const todosResponse = ref([]);

  const loadOneBeta = async (index = 1) => {

    console.log('Start effect scope for use query todo index ',  index);

    scope.run(async () => {
      todoResponse.value = await useQuery(
        {
          queryKey: ["todo", index],
          queryFn: async () => {
            return fetch(
              `${config.public.apiBaseUrlJsonPh}/todos/${index}`
            ).then((res) => res?.json()); //this.fetcherOne(index)
          },
          staleTime: 5000, //Infinity
          cacheTime: 5000, //Infinity
        },
        queryClient
      );

      /*
       Doesn't matter, because pinia is already in an effect scope
      */
      // watch(todoResponse.value, () => {
      //    // to dispose all effects in the scope
      //    scope.stop()
      // })
    });
  };


  //many
  const loadManyBeta = async () => {

    console.log('Start effect scope for use query todos');

    scope.run(async () => {
      todosResponse.value = await useQuery(
        {
          queryKey: ["todos"],
          queryFn: async () => {
            return fetch(
              `${config.public.apiBaseUrlJsonPh}/todos/`
            ).then((res) => res.json()); //this.fetcherOne(index)
          },
          staleTime: 5000, //Infinity
          cacheTime: 5000, //Infinity
        },
        queryClient
      );

      /*
       Doesn't matter, because pinia is already in an effect scope
      */
      // watch(todoResponse.value, () => {
      //    // to dispose all effects in the scope
      //    scope.stop()
      // })
    });
  };

  return {
    todoResponse,
    todosResponse,

    loadOneBeta,
    loadManyBeta,
  };
});
