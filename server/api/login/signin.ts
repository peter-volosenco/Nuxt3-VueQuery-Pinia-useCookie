export default defineEventHandler(async (event) => {
  const user = {
    id: '123',
    name: 'John Doe',
    email: 'johndoe@test.com',
  }

  await setUserSession(event, {
    user: user,
    loggedInAt: new Date(),
  });

  return user;
});