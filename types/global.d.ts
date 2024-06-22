// auth.d.ts
declare module '#auth-utils' {
    interface User {
      id?: string;
      name?: string;
      email?: string;
      role?: string;
    }

    interface UserSession {
      user?: User;
      token?: string;
      loggedInAt?: Date;
    }
  }

  export {}