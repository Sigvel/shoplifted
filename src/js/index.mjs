import { fetchPosts } from "./api/posts/read.mjs";
import { menu, hamburgerMenu } from "./components/hamburger.mjs";
import { slideLeftBtn, slideLeft, slideRightBtn, slideRight } from "./components/slider.mjs";
import { register } from "./api/services/handlers/register.mjs";
import { login } from "./api/services/handlers/login.mjs";
import { fetchProfile } from "./api/profile/read.mjs";
import { edit } from "./api/profile/handlers/edit.mjs";

hamburgerMenu.addEventListener("click", menu);

// fetch posts
fetchPosts();

fetchProfile();

// Login & register
register();

login();

// Profile

edit();

// routers

if (location.pathname === "/index.html") {
  // slider button listeners
  slideRightBtn.addEventListener("click", slideRight);

  slideLeftBtn.addEventListener("click", slideLeft);
}
