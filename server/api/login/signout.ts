export default defineEventHandler(async (event) => {
    const user = await clearUserSession(event)

    return user;
  });