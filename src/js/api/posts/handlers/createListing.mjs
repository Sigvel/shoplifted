import { createListing } from "../create.mjs";

export const showFormBtn = document.getElementById("create-listing_btn");
export const dropDown = document.getElementById("create-listing");

export const showCreateForm = () => {
  showFormBtn.addEventListener("click", () => {
    if (showFormBtn.innerHTML === `<i class="create-listing_btn cursor-pointer fa-solid fa-angle-down text-2xl md:text-3xl"></i>`) {
      showFormBtn.innerHTML = `<i class="create-listing_btn cursor-pointer fa-solid fa-angle-up text-2xl md:text-3xl"></i>`;
    } else {
      showFormBtn.innerHTML = `<i class="create-listing_btn cursor-pointer fa-solid fa-angle-down text-2xl md:text-3xl"></i>`;
    }

    dropDown.classList.toggle("hidden");
  });
};

export const listingForm = document.getElementById("listing-form");

export const create = () => {
  listingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const imgs = document.querySelectorAll(`[data-type="url"]`);
    let media = [];

    const form = e.target;
    const data = new FormData(form);
    const userData = Object.fromEntries(data.entries());

    imgs.forEach((input) => {
      if (input.value !== "") {
        media.push(input.value);
      }
    });

    const tags = userData.tags.replace(/\s+/g, "").split(",");

    let dataObject = {
      title: userData.title,
      description: userData.description,
      tags: tags,
      endsAt: userData.endsAt,
      media: media,
    };

    if (!media || media === "" || media === []) {
      delete dataObject.media;
    }

    createListing(dataObject);
  });
};
