import { fetchListings } from "./api/posts/read.mjs";
import { fetchListing } from "./api/posts/details/read.mjs";
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
import { isLoggedIn } from "./api/services/logout.mjs";

// all pages
isLoggedIn();

showCreateForm();

addUrl();

create();

hamburgerMenu.addEventListener("click", menu);

// profile
fetchProfile();

// Login & register
register();
login();

if (location.pathname === "/pages/profile/index.html") {
  // Profile handlers
  edit();
} else if (location.pathname === "/pages/details/index.html") {
  const url = new URL(location.href);
  const listingId = url.searchParams.get("id");

  fetchListing(`${apiUrl}${listings}/${listingId}?_seller=true&_bids=true`);

  makeBid();
} else if (location.pathname === "/pages/listing/index.html") {
  searchSetup();

  // homepage, listings page
  fetchListings();
} else if (location.pathname === "/index.html") {
  fetchListings();
  // slider button listeners
  slideRightBtn.addEventListener("click", slideRight);

  slideLeftBtn.addEventListener("click", slideLeft);
}
