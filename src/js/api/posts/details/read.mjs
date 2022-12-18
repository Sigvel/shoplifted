import { listingBids } from "../templates/bid.mjs";
import * as create from "../templates/listings.mjs";

export async function fetchListing(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    if (response.ok) {
      createListing(json);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

// listing container.
const listingSection = document.getElementById("listing");

// Other html elements
const seller = document.getElementById("seller");
const sellerImg = document.getElementById("seller-img");
const headings = document.querySelector(".product-heading");
const pageHeader = document.getElementById("page-header");

const bidsSection = document.getElementById("listing-bids");

// const listingBids = document.getElementById("listing-bids");

const createListing = (listing) => {
  document.body.title = `Shoplifted | ${listing.title}`;
  headings.innerHTML = `Shoplifted ${listing.title}`;
  pageHeader.innerHTML = `Shoplifted ${listing.title}`;

  const bids = listing.bids.sort((a, b) => {
    if (a.created.toLowerCase() < b.created.toLowerCase()) return 1;
    return -1;
  });

  bids.forEach((bid) => {
    bidsSection.append(listingBids(bid));
  });

  seller.innerHTML = listing.seller.name;
  sellerImg.src = listing.seller.avatar;

  listingSection.appendChild(create.listing(listing));
};
