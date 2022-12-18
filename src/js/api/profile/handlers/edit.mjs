import { editProfile } from "../put.mjs";

export const profileForm = document.getElementById("profile-form");

export const edit = () => {
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const userData = Object.fromEntries(data.entries());

    editProfile(userData);
  });
};
