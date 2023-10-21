import { atom } from "nanostores";

export const currentUser = atom<ResponseUser>({
  user: {
    email: "",
    username: "",
    bio: "",
    image: "",
    token: "",
  },
});
