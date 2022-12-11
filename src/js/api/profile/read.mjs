import { apiUrl, profileUrl } from "../constants.mjs";
import { options } from "../auth/header.mjs";

// HTML targets
const holdings = document.querySelectorAll(".curr-holdings");
const listings = document.getElementById("listings");
const bidWins = document.getElementById("bids-won");
const userName = document.getElementById("username");
const media = document.getElementById("profileImg");

export async function fetchProfile() {
  try {
    const response = await fetch(`${apiUrl}${profileUrl}`, options);
    const json = await response.json();

    console.log(json);

    buildProfile(json);
  } catch (error) {
    console.log(error);
  }
}

const buildProfile = (profile) => {
  /** setting current currency to nav and profile */
  holdings.forEach((container) => {
    container.innerHTML = `${profile.credits}`;
  });

  if (profile.avatar === null) {
    media.src = "/assets/images/placeholder/profile/avatar-g70ad01aee_640.png";
  } else {
    media.src = profile.avatar;
  }

  listings.innerHTML = `${profile.listings.length}`;
  bidWins.innerHTML = `${profile.wins.length}`;
  userName.innerHTML = `${profile.name}`;
};
