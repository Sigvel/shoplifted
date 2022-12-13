import { createUrl } from "../templates/inputUrl.mjs";

const urlButtons = document.querySelector(`[data-type="add-btn"]`);
const mediaContainer = document.querySelector(".media-container");

export const addUrl = () => {
  urlButtons.addEventListener("click", () => {
    mediaContainer.append(createUrl());
  });
};
