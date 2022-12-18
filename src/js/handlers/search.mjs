import { search } from "../components/search.mjs";

export const searchForm = document.getElementById("search");

export const searchSetup = () => {
  searchForm.addEventListener("input", (e) => {
    e.preventDefault();

    const form = e.target;
    const term = form.value;

    search(term.toLowerCase());
  });
};
