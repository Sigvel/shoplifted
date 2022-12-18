import { apiUrl, listings } from "../constants.mjs";
import * as create from "./templates/listings.mjs";
import { createSliderPosts } from "/src/js/components/slider.mjs";

/**
 * Listings container
 */
const listingsContainer = document.getElementById("listings");

export let listingArray = [];

export async function fetchListings() {
  try {
    const response = await fetch(`${apiUrl}${listings}?_seller=true&_bids=true&sort=created&sortOrder=desc`);
    const json = await response.json();

    if (response.ok) {
      listingArray = json;
      if (location.pathname === "/index.html") {
        createSliderPosts(json);
      } else if (location.pathname === "/pages/listing/index.html") {
        createListings(json);
      }
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

const createListings = (array) => {
  listingArray = array.map((listings) => {
    const card = create.card();

    card.append(create.listingsContent(listings));

    listingsContainer.appendChild(card);

    return { title: listings.title, description: listings.description, element: card };
  });
};
