import * as create from "../api/posts/templates/slideCard.mjs";

export const slideRightBtn = document.getElementById("slide-right");
export const slideLeftBtn = document.getElementById("slide-left");

const card = document.getElementsByClassName("card-itm");

let active = 0;

export const slideRight = () => {
  const nextIndex = active + 1 <= card.length - 1 ? active + 1 : 0;

  const currentItem = document.querySelector(`[data-index="${active}"]`),
    nextItem = document.querySelector(`[data-index="${nextIndex}"]`);

  /**
   * active becomes inactive
   */
  currentItem.dataset.status = "none";

  setTimeout(() => {
    nextItem.dataset.status = "active";
    active = nextIndex;
  });
};

export const slideLeft = () => {
  const nextIndex = active - 1 >= 0 ? active - 1 : card.length - 1;

  const currentItem = document.querySelector(`[data-index="${active}"]`),
    nextItem = document.querySelector(`[data-index="${nextIndex}"]`);

  /**
   * active becomes inactive
   */
  currentItem.dataset.status = "none";

  setTimeout(() => {
    nextItem.dataset.status = "active";
    active = nextIndex;
  });
};

const cardSlider = document.getElementById("card-slider");

/**
 *
 * @param {*} response
 */
export const createSliderPosts = (response) => {
  response.map((listing, index) => {
    // card
    const card = create.sliderCard();

    if (index === 0) {
      card.dataset.status = "active";
    } else {
      card.dataset.status = "none";
    }

    card.dataset.index = index;

    card.append(create.sliderContent(listing));

    // appending to the section of the slider
    cardSlider.appendChild(card);
  });
};
