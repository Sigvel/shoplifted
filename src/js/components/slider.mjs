import * as create from "../api/posts/components/post.mjs"

export const slideRightBtn = document.getElementById("slide-right")
export const slideLeftBtn = document.getElementById("slide-left")

const card = document.getElementsByClassName("card-itm-group")

let active = 0

export const slideRight = () => {
  const nextIndex = active + 1 <= card.length - 1 ? active + 1 : 0

  const currentItem = document.querySelector(`[data-index="${active}"]`),
    nextItem = document.querySelector(`[data-index="${nextIndex}"]`)

  /**
   * active becomes inactive
   */
  currentItem.dataset.status = "none"

  setTimeout(() => {
    nextItem.dataset.status = "active"
    active = nextIndex
  })
}

export const slideLeft = () => {
  const nextIndex = active - 1 >= 0 ? active - 1 : card.length - 1

  const currentItem = document.querySelector(`[data-index="${active}"]`),
    nextItem = document.querySelector(`[data-index="${nextIndex}"]`)

  /**
   * active becomes inactive
   */
  currentItem.dataset.status = "none"

  setTimeout(() => {
    nextItem.dataset.status = "active"
    active = nextIndex
  })
}

const cardSlider = document.getElementById("card-slider")

/**
 *
 * @param {*} response
 */
export const createSliderPosts = (response) => {
  console.log(response)

  response.map((listing, index) => {
    // Creating container the cardContainer
    const container = create.cardContainer()

    if (index === 0) {
      container.dataset.status = "active"
    } else {
      container.dataset.status = "none"
    }

    container.dataset.index = index

    container.append(create.imageHtml(listing.media), create.listingContent(listing))

    // appending to the section of the slider
    cardSlider.appendChild(container)
  })
}
