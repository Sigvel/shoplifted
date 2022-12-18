import { slideRight, slideLeft } from "../../../components/slider.mjs";

// LISTINGS CARD

/**
 * creates the html for the card container
 * @returns a div html node
 */
export const card = () => {
  const container = document.createElement("div");
  container.className = "w-90 mt-5 md:mt-0";

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
  figureBox.className = "bg-paper-white";
  const img = document.createElement("img");
  img.className = "corner h-full w-full object-cover md:max-h-36 lg:max-h-56 xl:max-h-40 shadow-lg";
  img.src = image;
  img.onerror = `src="/assets/images/placeholder/Item-placeholder.jpg"`;

  figureBox.appendChild(img);

  return figureBox;
};
/**
 * creates a node element with the title provided from the api
 * @param {string} title contains the title of the listing
 * @returns a html node with the title.
 */
export const contentHeader = (title) => {
  const contentTitle = document.createElement("h3");
  contentTitle.className = "card-title text-xs md:text-sm truncate";
  contentTitle.textContent = title;

  return contentTitle;
};

/**
 * creates the expired date time html for the specific listing.
 * @param {string} time contains the date time format from API
 */
export const listingEndsAt = (time) => {
  const section = document.getElementById("expireTimeSection");

  const container = document.createElement("div");
  container.className = "mt-4 rounded w-11/12 lg:w-8/12 mx-auto bg-water-blue flex justify-between px-3 py-3";

  const expires = document.createElement("p");
  expires.className = "font-bold";
  expires.textContent = "Expire date:";

  const endsAt = document.createElement("p");

  const listingDate = new Date(time).toLocaleString("eu", { timeZone: "Europe/Stockholm" });

  const listingTime = new Date(time).getTime();
  const currentTime = new Date().getTime();

  const distance = listingTime - currentTime;

  const [liDate, liHours] = listingDate.split(",");

  if (distance >= 0) {
    endsAt.textContent = `${liDate}, ${liHours}`;
    endsAt.classList.add("font-bold");
  } else {
    endsAt.textContent = "EXPIRED";
    endsAt.classList.add("text-error-txt", "font-bold");
  }

  container.append(expires, endsAt);

  section.appendChild(container);
};

/**
 * creates a html node with the description of the listing
 * @param {string} info contains the description provided from the API
 * @returns a html node with the description
 */
export const description = (info) => {
  const paragraph = document.createElement("p");
  paragraph.className = "mt-1 text-xs md:text-sm truncate";
  paragraph.textContent = info;

  return paragraph;
};

/**
 * Goes through the tags and create html
 * elements for each tag and returns them in a container.
 * @param {array} tagsArr
 * @returns html node with the tags
 */
export const tags = (tagsArr) => {
  /**
   * Container for tags
   */
  const tagsWrapper = document.createElement("div");
  tagsWrapper.className = "card-actions mt-4 justify-start";

  /**
   * Creates tag html per tag.
   */
  tagsArr.forEach((tag) => {
    tagsWrapper.appendChild(tagsHtml(tag));
  });

  return tagsWrapper;
};

/**
 * creates a html node with the tags from the listing
 * @param {Array} tag contains an array of tags provided from the api
 * @returns a html node with the tags
 */
export const tagsHtml = (tag) => {
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
export const bids = (bid) => {
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
 * creates listings
 * @param {array} listings contains response from api
 * @returns constricted html node of listing elements
 */
export const listingsContent = (listings) => {
  /**
   * content to hold everything together
   */
  const contentAnchor = document.createElement("a");
  contentAnchor.className = "cursor-pointer";
  contentAnchor.href = `/pages/details/index.html?id=${listings.id}`;
  /**
   * about listing container
   */
  const contentAbout = document.createElement("div");
  contentAbout.className = "border border-paper-white bg-midnight-blue p-2 shadow-md mt-1.5 shadow-lg";

  contentAbout.append(contentHeader(listings.title), bids(listings.bids));

  // appends content to the content container.
  contentAnchor.append(imageHtml(listings.media), contentAbout);

  return contentAnchor;
};

// SPECIFIC LISTING

export const sliderContainer = () => {
  const imgCont = document.createElement("div");
  return imgCont;
};

export const slideBtnLeft = () => {
  const btnLeft = document.createElement("button");
  btnLeft.className = "absolute z-50 top-2% h-full w-5% hover:border hover:border-paper-white hover:opacity-30 bg-midnight-gray opacity-40";

  btnLeft.addEventListener("click", slideLeft);

  const leftIcon = document.createElement("i");
  leftIcon.className = "fa-solid fa-angle-left text-2xl md:text-4xl";

  btnLeft.appendChild(leftIcon);

  return btnLeft;
};

export const sliderImgs = (imgs) => {
  // images need a dataset data-index using map index ISH DONE
  // images needs a dataset.status DONE
  const container = sliderContainer();

  imgs.forEach((img, index) => {
    const imgWrapper = document.createElement("figure");
    imgWrapper.className = "card-itm img-box mb-4";

    const media = document.createElement("img");
    media.src = img;
    media.className = "corner h-full w-full object-cover max-h-32 sm-tablet:max-h-44 sm:max-h-52 md:max-h-64 lg:max-h-72 xl:max-h-96";

    imgWrapper.appendChild(media);

    imgWrapper.dataset.index = index;
    media.dataset.index = index;

    if (index === 0) {
      imgWrapper.dataset.status = "active";
    } else {
      imgWrapper.dataset.status = "none";
    }

    container.appendChild(imgWrapper);
  });

  return container;
};

export const slideBtnRight = () => {
  const btnRight = document.createElement("button");
  btnRight.className = "absolute top-2% h-full w-5% right-0% hover:border hover:border-paper-white hover:opacity-30 bg-midnight-gray opacity-40";

  btnRight.addEventListener("click", slideRight);

  const rightIcon = document.createElement("i");
  rightIcon.className = "fa-solid fa-angle-right text-2xl md:text-4xl z-49";

  btnRight.appendChild(rightIcon);

  return btnRight;
};

export const listing = (listing) => {
  console.log(listing);

  listingEndsAt(listing.endsAt);

  const cardImgs = document.createElement("div");
  cardImgs.className = "slider-container h-full relative";

  // Holds the image sliders
  if (listing.media.length <= 1) {
    cardImgs.append(sliderImgs(listing.media));
  } else {
    cardImgs.append(slideBtnLeft(), sliderImgs(listing.media), slideBtnRight());
  }

  // listing content
  const infoWrapper = document.createElement("div");
  infoWrapper.className = "border border-paper-white bg-midnight-blue p-2 shadow-md mt-1.5 shadow-lg";

  infoWrapper.append(contentHeader(listing.title), description(listing.description), tags(listing.tags), bids(listing.bids));

  const card = document.createElement("div");
  card.className = "w-11/12 lg:w-8/12 mx-auto mt-1";

  card.append(cardImgs, infoWrapper);

  return card;
};
