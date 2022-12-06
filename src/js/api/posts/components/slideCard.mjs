// SLIDER CARD

/**
 * carousel slide card
 * @returns html node of card container.
 */
export const sliderCard = () => {
  const container = document.createElement("div");
  container.className = "card-itm-group absolute w-full top-0 bottom-0 max-h-32 sm-tablet:max-h-44 xl:max-h-96";

  return container;
};

/**
 * creates a html node with the provided image.
 * @param {Array} media contains the image array of the listing
 * @returns a html node with the image
 */
export const imageHtml = (media) => {
  let image;

  if (media.length === 0) {
    image = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png";
  } else {
    image = media[0];
  }

  const figureBox = document.createElement("figure");
  const img = document.createElement("img");
  img.className = "corner h-full w-full object-cover max-h-32 sm-tablet:max-h-44 sm:max-h-52 lg:max-h-64 xl:max-h-96";
  img.src = image;

  figureBox.appendChild(img);

  return figureBox;
};
/**
 * creates a node element with the title provided from the api
 * @param {string} title contains the title of the listing
 * @returns a html node with the title.
 */
const contentHeader = (title) => {
  const contentTitle = document.createElement("h3");
  contentTitle.className = "card-title text-xs md:text-sm";
  contentTitle.textContent = title;

  return contentTitle;
};

/**
 * creates a html node with the description of the listing
 * @param {string} info contains the description provided from the API
 * @returns a html node with the description
 */
const description = (info) => {
  const paragraph = document.createElement("p");
  paragraph.className = "mt-1 text-xs md:text-sm";
  paragraph.textContent = info;

  return paragraph;
};

/**
 * creates a html node with the tags from the listing
 * @param {Array} tag contains an array of tags provided from the api
 * @returns a html node with the tags
 */
const tagsHtml = (tag) => {
  const tagHtml = document.createElement("div");
  tagHtml.className = "text-xs md:text-sm font-bold";
  tagHtml.textContent = tag;

  return tagHtml;
};

/**
 * creates a html node with the amount of bids and total bid
 * @param {Array} bid contains the array of the bids.
 * @returns html node with amount of bids and total bid.
 */
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

/**
 * Creates the complete html node for the slider
 * @param {Array} listing contains the results from the api fetch
 * @returns a complete assembled html node of necessary objects.
 */
export const sliderContent = (listing) => {
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
   * content to hold everything together. QUESTIONABLE?
   */
  const contentContainer = document.createElement("div");
  contentContainer.className = "";

  /**
   * about listing container
   */
  const contentAbout = document.createElement("div");
  contentAbout.className = "border border-paper-white bg-midnight-blue p-2 shadow-md mt-1.5";

  contentAbout.append(contentHeader(listing.title), description(listing.description), tagsWrapper, bids(listing.bids));

  // appends content to the content container.
  contentContainer.append(imageHtml(listing.media), contentAbout);

  return contentContainer;
};
