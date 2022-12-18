import { load } from "../storage/load.mjs";

const loginButton = document.querySelector(".loginBtn");
const profileLink = document.querySelector(".profile-link");
const profileLinkLabel = document.querySelector(".profile-label");

export const isLoggedIn = () => {
  if (load("token") === null) {
    loginButton.innerHTML = "login";
    profileLink.removeAttribute("href");
    profileLinkLabel.setAttribute("for", "login-modal");
    return;
  }
  loginButton.innerHTML = "logout";
  loginButton.addEventListener("click", logout);
  return;
};

export const logout = () => {
  localStorage.clear();
};
