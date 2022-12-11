import { errorMessage, feedback } from "../../components/errorMsg.mjs";
// import { header } from "../auth/header.mjs";
import { apiUrl, MEDIA_update } from "../constants.mjs";
import { profileForm } from "./handlers/edit.mjs";
import { load } from "../storage/load.mjs";

// headers: {
//     Authorization: `Bearer ${load("token")}`,
//     "Content-Type": "application/json; charset=utf-8",
//   },

export async function editProfile(data) {
  console.log(JSON.stringify(data));

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
      console.log(response.json());
      feedback.innerHTML = errorMessage("success", true);
    }

    feedback.innerHTML = errorMessage(json.errors[0].message, false);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      profileForm.reset();
    }, 1000);
  }
}
