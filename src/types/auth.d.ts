export interface RegisterError {
  errors: {
    email?: string[];
    password?: string[];
    username?: string[];
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
