import { User } from "../types";

export const prepareUsers = (data: User) => {
  const user = [];
  Object.entries(data).map(([key, value]) => user.push([key, value]));

  return user;
}