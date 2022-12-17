import { load } from "./storage/load.mjs";

let userName = load("user");

if (userName !== null) {
  userName = userName.name;
}

export const apiUrl = "https://nf-api.onrender.com/api/v1";
export const listings = "/auction/listings";
export const profileUrl = `/auction/profiles/${userName}?_listings=true`;
export const MEDIA_update = `/auction/profiles/${userName}/media`;
export const bids = `/auction/profiles/${userName}/bids?_listings=true`;
export const profileAlt = `/auction/profiles/${userName}/listings?bids=true`;
export const REG_URL = "/auction/auth/register";
export const LOGIN_URL = "/auction/auth/login";
