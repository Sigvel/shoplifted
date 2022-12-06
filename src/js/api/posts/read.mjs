import { apiUrl, listings } from "../constants.mjs";
import * as create from "./components/listing.mjs";
import { createSliderPosts } from "/src/js/components/slider.mjs";

/**
 * Listings container
 */
const listingsContainer = document.getElementById("listings");

export let listingsArray = [];

export async function fetchPosts() {
  try {
    const response = await fetch(`${apiUrl}${listings}?_seller=true&_bids=true`);
    const json = await response.json();

    if (response.ok) {
      listingsArray = json;
      if (location.pathname === "/index.html") {
        createSliderPosts(json);
      } else if (location.pathname === "/pages/listing/index.html") {
        createListingPosts();
      }
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

const createListingPosts = () => {
  listingsArray.map((listings) => {
    const card = create.card();

    card.append(create.listingContent(listings));

    listingsContainer.appendChild(card);
  });
};
