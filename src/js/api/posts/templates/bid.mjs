export const listingBids = (bid) => {
  const container = document.createElement("div");
  container.className = "bg-water-blue rounded w-11/12 lg:w-8/12 justify-between mx-auto mt-5 flex font-bold py-5";

  const biddersName = document.createElement("p");
  biddersName.className = "ml-3";
  biddersName.textContent = bid.bidderName;

  const amountCont = document.createElement("div");
  amountCont.className = "flex";

  const bidTxt = document.createElement("p");
  bidTxt.textContent = "Bidded";

  const bidAmount = document.createElement("p");
  bidAmount.className = "mr-3 pl-2";
  bidAmount.textContent = `${bid.amount} Cr`;

  amountCont.append(bidTxt, bidAmount);

  container.append(biddersName, amountCont);

  return container;
};
