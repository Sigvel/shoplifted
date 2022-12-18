import { load } from "../storage/load.mjs";

const loginButton = document.querySelector(".loginBtn");
const profileLink = document.querySelector(".profile-link");
const profileLinkLabel = document.querySelector(".profile-label");
const loginLabel = document.querySelector(".login-label");

export const isLoggedIn = () => {
  if (load("token") === null) {
    loginButton.innerHTML = "login";
    profileLink.removeAttribute("href");
    profileLinkLabel.setAttribute("for", "login-modal");
    loginLabel.setAttribute("for", "login-modal");
    if (location.pathname === "/pages/profile/index.html") {
      location.replace("/index.html");
    }
    return;
  }
  loginLabel.removeAttribute("for", "login-modal");
  loginButton.innerHTML = "logout";
  loginButton.addEventListener("click", logout);
  return;
};

export const logout = () => {
  localStorage.clear();

  setTimeout(() => {
    location.reload();
  }, 1500);
};
