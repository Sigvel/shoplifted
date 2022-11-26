import { fetchPosts } from "./api/posts/read.mjs"
import { menu, hamburgerMenu } from "./components/hamburger.mjs"

hamburgerMenu.addEventListener("click", menu)

fetchPosts()
