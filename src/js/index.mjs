import { fetchPosts } from "./api/posts/read.mjs";
import { menu, hamburgerMenu } from "./components/hamburger.mjs";
import { slideLeftBtn, slideLeft, slideRightBtn, slideRight } from "./components/slider.mjs";

hamburgerMenu.addEventListener("click", menu);

// fetch posts
fetchPosts();

if (location.pathname === "/index.html") {
  // slider button listeners
  slideRightBtn.addEventListener("click", slideRight);

  slideLeftBtn.addEventListener("click", slideLeft);
}
