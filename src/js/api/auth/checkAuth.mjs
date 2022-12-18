import { load } from "../storage/load.mjs";

export const checkUserAuth = () => {
  if (load("token") !== null) {
    return;
  }
  return null;
};
