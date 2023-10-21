export const API = {
  ARTICLES: makePrefix("/articles"),
  TAGS: makePrefix("/tags"),
  LOGIN: makePrefix("/users/login"),
  USERS: makePrefix("/users"),
};

function makePrefix(path: string) {
  return `/api${path}`;
}
