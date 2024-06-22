// @ts-nocheck
export default defineEventHandler(async (event) => {
  const q = getQuery(event);

  const count = Number(q.count || 10);

  const config = useRuntimeConfig();

  const response = await $fetch(`${config.public.apiBaseUrl}/users?count=${count}`);

  return response;
});
