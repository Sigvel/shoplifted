import { loginUser } from "../login.mjs";

export const loginForm = document.getElementById("login-form");

export const login = () => {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const userData = Object.fromEntries(data.entries());

    loginUser(userData);
  });
};
