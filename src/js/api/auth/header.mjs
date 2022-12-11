import { load } from "../storage/load.mjs";

export const options = {
  headers: {
    Authorization: `Bearer ${load("token")}`,
    "Content-Type": "application/json; charset=utf-8",
  },
};
