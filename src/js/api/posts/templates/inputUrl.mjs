export const createUrl = () => {
  const container = document.createElement("div");
  container.className = "flex w-11/12 lg:w-8/12 justify-between mb-3";

  const urlInput = document.createElement("input");
  urlInput.className = "py-1 px-1 rounded w-11/12 lg:w-8/12 md:text-base";
  urlInput.type = "text";
  urlInput.dataset.type = "url";
  urlInput.placeholder = "media url";

  const addButton = document.createElement("button");
  addButton.className = "text-paper-white rounded bg-sky-blue py-1 px-2 font-bold";
  addButton.dataset.type = "add-btn";
  addButton.textContent = "+";

  container.append(urlInput, addButton);

  return container;
};

{
  /* <div class="flex w-11/12 lg:w-8/12 justify-between mb-3 hidden">
<input data-type="url" name="media" type="text" class="py-1 px-1 rounded w-11/12 lg:w-8/12 md:text-base" placeholder="media url" disabled>
<button data-type="add-btn" type="button" class="url-add_btn text-paper-white rounded bg-sky-blue py-1 px-2 font-bold">+</button>
</div> */
}
