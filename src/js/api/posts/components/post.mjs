/**
 * creates the cards item container
 * @returns
 */
export const cardContainer = () => {
  const container = document.createElement("div");
  container.className = "w-9/12 shadow-xl card-itm-group";

  return container;
};

export const imageHtml = (media) => {
  let image;

  if (media.length === 0) {
    image = "/assets/images/placeholder/Item-placeholder.jpg";
  } else {
    image = media[0];
  }

  const figureBox = document.createElement("figure");
  figureBox.className = "bg-paper-white flex justify-center max-h-72 shadow-md";
  const img = document.createElement("img");
  img.className = "corner";
  img.src = image;

  figureBox.appendChild(img);

  return figureBox;
};

const contentHeader = (title) => {
  const contentTitle = document.createElement("h3");
  contentTitle.className = "card-title text-xs md:text-lg";
  contentTitle.textContent = title;

  return contentTitle;
};

const description = (info) => {
  const paragraph = document.createElement("p");
  paragraph.className = "mt-1 text-xs md:text-lg";
  paragraph.textContent = info;

  return paragraph;
};

const tagsHtml = (tag) => {
  const tagHtml = document.createElement("div");
  tagHtml.className = "text-xs md:text-lg font-bold";
  tagHtml.textContent = tag;

  return tagHtml;
};

const bids = (bid) => {
  let bidAmount = 0;

  for (let i = 0; i < bid.length; i++) {
    bidAmount += bid[i].amount;
  }

  // creates wrapper for the bids
  const bidsWrapper = document.createElement("div");
  bidsWrapper.className = "mt-10 flex justify-between";

  // current bid object
  const currentBid = document.createElement("p");
  currentBid.className = "rounded bg-midnight-gray py-1 px-2 text-xs md:text-lg font-bold text-golden-brown";
  currentBid.textContent = `Current bid: ${bidAmount}`;

  // latest bid object (is currently number of bids)
  const bids = document.createElement("p");
  bids.className = "rounded bg-midnight-gray py-1 px-2 text-xs md:text-lg font-bold text-golden-brown";
  bids.textContent = `bids: ${bid.length}`;

  // Assembled big HTML node
  bidsWrapper.append(currentBid, bids);

  // returns the bid HTML node
  return bidsWrapper;
};

export const listingContent = (listing) => {
  const tags = listing.tags;

  /**
   * Container for tags
   */
  const tagsWrapper = document.createElement("div");
  tagsWrapper.className = "card-actions mt-4 justify-start";

  /**
   * Creates tag html per tag.
   */
  tags.forEach((tag) => {
    tagsWrapper.appendChild(tagsHtml(tag));
  });

  /**
   * Html container for the content
   */
  const contentContainer = document.createElement("div");
  contentContainer.className = "mt-2 border border-paper-white bg-midnight-blue p-2 shadow-md";

  // appends content to the content container.
  contentContainer.append(contentHeader(listing.title), description(listing.description), tagsWrapper, bids(listing.bids));

  return contentContainer;
};
