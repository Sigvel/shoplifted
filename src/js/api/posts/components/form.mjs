export const createForm = () => {
  const form = document.createElement("form");
  form.className = "";

  const titleLabel = document.createElement("label");
  titleLabel.className = "";
  const title = document.createElement("input");
  title.type = "text";
  title.placeholder = "Title";
};
