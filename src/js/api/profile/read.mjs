import { apiUrl, profileUrl } from "../constants.mjs";
import { options } from "../auth/header.mjs";
import { checkUserAuth } from "../auth/checkAuth.mjs";

// HTML targets
const usersListings = document.getElementById("listings");
const bidWins = document.getElementById("bids-won");
const userName = document.getElementById("username");
const profileMedia = document.getElementById("profileImg");

export async function fetchProfile() {
  if (checkUserAuth() !== null) {
    try {
      const response = await fetch(`${apiUrl}${profileUrl}`, options);
      const json = await response.json();

      if (location.pathname === "/pages/profile/index.html") {
        buildProfile(json);
        checkCredits(json.credits);
      } else {
        checkCredits(json.credits);
      }
    } catch (error) {
      console.log(error);
    }
    return;
  }
  return;
}

export let userCredits = "none";

export const holdings = document.querySelectorAll(".curr-holdings");

export const checkCredits = (userCredits) => {
  holdings.forEach((container) => {
    container.innerHTML = `${userCredits}`;
  });
};

const buildProfile = (profile) => {
  /** setting current currency to nav and profile */
  console.log(profile);

  if (!profile.avatar) {
    profileMedia.src = "/assets/images/placeholder/profile/avatar-g70ad01aee_640.png";
  } else {
    profileMedia.src = profile.avatar;
  }

  usersListings.innerHTML = `${profile.listings.length}`;
  bidWins.innerHTML = `${profile.wins.length}`;
  userName.innerHTML = `${profile.name}`;
};
