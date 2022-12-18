import { createBid } from "../bid.mjs";
import { checkUserAuth } from "../../auth/checkAuth.mjs";
import { errorMessage } from "../../../components/errorMsg.mjs";

export const biddingForm = document.getElementById("bid-form");

export const makeBid = () => {
  if (checkUserAuth() === null) {
    biddingForm.innerHTML = errorMessage("Must be logged in to make a bid", false);
  } else {
    biddingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const data = new FormData(form);
      const userData = Object.fromEntries(data.entries());

      createBid(userData);
    });
  }
};
