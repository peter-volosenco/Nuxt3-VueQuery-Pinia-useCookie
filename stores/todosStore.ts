type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const useTodosStore = defineStore("Todos", () => {
  // Create state for holding Todos
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

  return {
    errors,
    todos,
    todo,
    loadData,
    setData,
    setOne
  };
});
