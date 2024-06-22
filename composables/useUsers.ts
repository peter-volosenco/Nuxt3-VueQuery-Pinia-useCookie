const fetchWithAuth = async (url: string, options:any) => {
  // const tokenFromCookie = useCookie('token');
  // const token = String(tokenFromCookie.value);

  const token = useCookie('token')

  const response = await fetch(url, {
      ...options,
      headers: {
          ...options.headers,
          Authorization: `Bearer ${String(token)}`,
      },
  });
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchUsers = async () => {
  const config = useRuntimeConfig()
  const apiBaseUrl = config.public.apiBaseUrl

  const response = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchWithAuth(`${apiBaseUrl}/users?delay=5`, {}),
  })




// //get user
// const response = axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
//   // handle success
//   console.log(response);
// })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

  // { isLoading, isError, data, error }
  // return response; //response.json()

  return {...response, token: useCookie('token').value
  }
}