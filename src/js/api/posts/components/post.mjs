/**
 * carousel slide card
 * @returns
 */
export const card = () => {
  const container = document.createElement("div");
  container.className = "card-itm-group absolute w-full top-0 bottom-0 max-h-32 sm-tablet:max-h-44 xl:max-h-96";

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
  figureBox.className = "";
  const img = document.createElement("img");
  img.className = "corner h-full w-full object-cover max-h-32 sm-tablet:max-h-44 sm:max-h-52 lg:max-h-64 xl:max-h-96";
  img.src = image;

  figureBox.appendChild(img);

  return figureBox;
};

const contentHeader = (title) => {
  const contentTitle = document.createElement("h3");
  contentTitle.className = "card-title text-xs md:text-sm";
  contentTitle.textContent = title;

  return contentTitle;
};

const description = (info) => {
  const paragraph = document.createElement("p");
  paragraph.className = "mt-1 text-xs md:text-sm";
  paragraph.textContent = info;

  return paragraph;
};

const tagsHtml = (tag) => {
  const tagHtml = document.createElement("div");
  tagHtml.className = "text-xs md:text-sm font-bold";
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
  bidsWrapper.className = "mt-5 flex justify-between";

  // current bid object
  const currentBid = document.createElement("p");
  currentBid.className = "rounded bg-midnight-gray py-1 px-2 text-xs md:text-sm font-bold text-golden-brown";
  currentBid.textContent = `Curr bid: ${bidAmount}`;

  // latest bid object (is currently number of bids)
  const bids = document.createElement("p");
  bids.className = "rounded bg-midnight-gray py-1 px-2 text-xs md:text-sm font-bold text-golden-brown";
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
   * content for title and stuff
   */
  // card-content
  const contentContainer = document.createElement("div");
  contentContainer.className = "";

  const contentAbout = document.createElement("div");
  contentAbout.className = "border border-paper-white bg-midnight-blue p-2 shadow-md mt-1.5";

  contentAbout.append(contentHeader(listing.title), description(listing.description), tagsWrapper, bids(listing.bids));

  // appends content to the content container.
  contentContainer.append(imageHtml(listing.media), contentAbout);

  return contentContainer;
};
