import { fetchListings, fetchListing } from "./api/posts/read.mjs";
import { menu, hamburgerMenu } from "./components/hamburger.mjs";
import { slideLeftBtn, slideLeft, slideRightBtn, slideRight } from "./components/slider.mjs";
import { register } from "./api/services/handlers/register.mjs";
import { login } from "./api/services/handlers/login.mjs";
import { fetchProfile } from "./api/profile/read.mjs";
import { edit } from "./api/profile/handlers/edit.mjs";
import { create, showCreateForm } from "./api/posts/handlers/createListing.mjs";
import { addUrl } from "./api/posts/handlers/addUrl.mjs";
import { apiUrl, listings } from "./api/constants.mjs";
import { makeBid } from "./api/posts/handlers/makeBid.mjs";
import { searchSetup } from "./handlers/search.mjs";

// all pages
showCreateForm();

addUrl();

create();

hamburgerMenu.addEventListener("click", menu);

// FETCH POSTS

// homepage, listings page
fetchListings();

// profile
fetchProfile();

if (location.pathname === "/pages/profile/index.html") {
  // Profile handlers
  edit();
}

if (location.pathname === "/pages/details/index.html") {
  const url = new URL(location.href);
  const listingId = url.searchParams.get("id");

  fetchListing(`${apiUrl}${listings}/${listingId}?_seller=true&_bids=true`);

  makeBid();
}

if (location.pathname === "/pages/listing/index.html") {
  searchSetup();
}

// Login & register
register();
login();

// routers
if (location.pathname === "/index.html") {
  // slider button listeners
  slideRightBtn.addEventListener("click", slideRight);

  slideLeftBtn.addEventListener("click", slideLeft);
}
