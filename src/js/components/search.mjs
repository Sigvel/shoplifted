import { listingArray } from "../api/posts/read.mjs";

export const search = (term) => {
  listingArray.forEach((listing) => {
    const listingObj = listing.title.toLowerCase() || listing.description.toLowerCase();

    const visible = listingObj.includes(term);
    listing.element.classList.toggle("hidden", !visible);
  });
};
