import { apiUrl, listings } from "../constants.mjs";
import { load } from "../storage/load.mjs";
import { errorMessage } from "../../components/errorMsg.mjs";

const errorContainer = document.querySelector(".errorBox");

export async function createListing(data) {
  console.log(data);
  const body = JSON.stringify(data);

  try {
    const response = await fetch(`${apiUrl}${listings}`, {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const json = await response.json();

    if (response.ok) {
      console.log(json);
      console.log(response);
      errorContainer.innerHTML = errorMessage("success", true);

      setTimeout(() => {
        location.reload();
      }, 1300);
    }

    errorContainer.innerHTML = errorMessage(json.errors[0].message, false);
  } catch (error) {
    console.log(error);
  }
}
