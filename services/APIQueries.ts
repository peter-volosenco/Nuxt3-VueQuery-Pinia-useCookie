class queryBuilder {
  baseURL = "";
  queryDefaultOptions = {};

  constructor(url: string, options = {}) {
    this.baseURL = url;
    this.queryDefaultOptions = options;
  }

  todos = (options = this.queryDefaultOptions) => {
    return {
      queryKey: "todos",
      queryFn: () => {
        return fetch(`${this.baseURL}/todos`).then((res) => res.json());
      },
    };
  };

  users = () => {
    return {
      queryKey: "users",
      queryFn: () => {
        return fetch(`${this.baseURL}/users`).then((res) => res.json());
      },
    };
  };

  posts = () => {
    return {
      queryKey: "posts",
      queryFn: () => {
        return fetch(`${this.baseURL}/posts`).then((res) => res.json());
      },
    };
  };
}

export default queryBuilder;
