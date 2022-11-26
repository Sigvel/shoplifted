import { apiUrl, listings } from "../constants.mjs"

// const listingsWrapper = document.getElementById("listing-container");

export let listingsArray = []

export async function fetchPosts() {
  try {
    const response = await fetch(`${apiUrl}${listings}`)
    const json = await response.json()

    if (response.ok) {
      listingsArray = json
      console.log(json)
      createPosts(json)
    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {
    console.log(error)
  }
}

export const createPosts = (postsArray) => {
  listingsArray = postsArray.map((posts) => {
    console.log(posts)
  })
}
