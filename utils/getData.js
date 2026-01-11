import { users } from "../data/users.js";
export const userData = (id) => {
  return users.find((user) => user.id == id);
};
