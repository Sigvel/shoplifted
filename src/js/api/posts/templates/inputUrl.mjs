export const createUrl = () => {
  const container = document.createElement("div");
  container.className = "flex w-11/12 lg:w-8/12 justify-between mb-3";

  const urlInput = document.createElement("input");
  urlInput.className = "py-1 px-1 w-full rounded md:text-base";
  urlInput.type = "text";
  urlInput.dataset.type = "url";
  urlInput.placeholder = "media url";

  container.append(urlInput);

  return container;
};
