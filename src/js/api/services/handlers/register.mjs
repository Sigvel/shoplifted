import { registerUser } from "../register.mjs";

export const registerForm = document.getElementById("register-form");

export const register = () => {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const userData = Object.fromEntries(data.entries());

    registerUser(userData);
  });
};
