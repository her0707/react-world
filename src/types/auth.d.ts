export interface RegisterError {
  errors: {
    email?: string[];
    password?: string[];
    username?: string[];
    "email or password"?: string[];
  };
}

export interface ResponseUser {
  user: {
    email: string;
    username: string;
    bio: string;
    image: string;
    token: string;
  };
}
