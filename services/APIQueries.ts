import { Sleep } from "~/helpers/Sleep";
class queryBuilder {
  baseURL = "";
  queryDefaultOptions = {};
  toDoId = 0;

  constructor(url: string, options = {}) {
    this.baseURL = url;
    this.queryDefaultOptions = options;
  }

  Sleep = async (ms: number) => {
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }

  fetcherOne = async (id: number | null) => {
    this.toDoId++;
    return await fetch(`${this.baseURL}/todos/${id ?? this.toDoId}`).then((res) => res.json());
  };

  fetcherMany = async () => {
    return await fetch(`${this.baseURL}/todos`).then((res) => res.json());
  };

  todo =  (index: number) => {
    return {
      queryKey: ['todo', index],
      queryFn: async () => {
        await Sleep(2000);
        return fetch(`${this.baseURL}/todos/${index}`).then((res) => res.json()); //this.fetcherOne(index)
      },
      staleTime: Infinity,
      cacheTime: Infinity,
    };
  };

  todos = () => {
    return {
      queryKey: ["todos"],
      queryFn: async () => {
        await Sleep(2000);
        return fetch(`${this.baseURL}/todos`).then((res) => res.json()); //this.fetcherMany() //
      },
      staleTime: Infinity,
      cacheTime: Infinity,
    };
  };

  users = () => {
    return {
      queryKey: ["users"],
      queryFn: () => {
        return fetch(`${this.baseURL}/users`).then((res) => res.json());
      },
      staleTime: Infinity,
      cacheTime: Infinity,
    };
  };

  posts = () => {
    return {
      queryKey: ["posts"],
      queryFn: () => {
        return fetch(`${this.baseURL}/posts`).then((res) => res.json());
      },
      staleTime: Infinity,
      cacheTime: Infinity,
    };
  };
}

export default queryBuilder;
