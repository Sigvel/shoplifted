import { apiUrl, listings } from "../constants.mjs"
// import * as create from "./components/post.mjs";
import { createSliderPosts } from "/src/js/components/slider.mjs"

// export let listingsArray = []

export async function fetchPosts() {
  try {
    const response = await fetch(`${apiUrl}${listings}?_seller=true&_bids=true`)
    const json = await response.json()

    if (response.ok) {
      // listingsArray = json
      createSliderPosts(json)
    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {
    console.log(error)
  }
}
