import { errorMessage } from "../../components/errorMsg.mjs";
import { apiUrl, MEDIA_update } from "../constants.mjs";
import { profileForm } from "./handlers/edit.mjs";
import { load } from "../storage/load.mjs";

const editFeedback = document.querySelector(".edit-feedback");

export async function editProfile(data) {
  const body = JSON.stringify(data);

  try {
    const response = await fetch(`${apiUrl}${MEDIA_update}`, {
      method: "PUT",
      body,
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const json = await response.json();

    if (response.ok) {
      editFeedback.innerHTML = errorMessage("success", true);
      setTimeout(() => {
        location.reload();
      }, 1500);
    } else {
      editFeedback.innerHTML = errorMessage(json.errors[0].message, false);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      profileForm.reset();
    }, 1000);
  }
}
