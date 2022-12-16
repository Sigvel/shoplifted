import { createBid } from "../bid.mjs";

export const biddingForm = document.getElementById("bid-form");

export const makeBid = () => {
  biddingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const userData = Object.fromEntries(data.entries());

    createBid(userData);
  });
};
