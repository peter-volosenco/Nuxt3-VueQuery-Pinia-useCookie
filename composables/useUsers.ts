
const fetchWithAuth = async (url: string, options:any) => {
  const tokenFromCookie = useCookie('token');
  const token = String(tokenFromCookie.value);

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

  const tokenFromCookie = useCookie('token')
  // tokenFromCookie.value = token;

  const response = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchWithAuth(`${apiBaseUrl}/users?delay=5`, {}),
  })

  // { isLoading, isError, data, error }
  // return response; //response.json()

  return {...response, token: tokenFromCookie.value
  }
}