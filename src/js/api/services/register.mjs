import { apiUrl, REG_URL } from "../constants.mjs";
import { errorMessage, feedback } from "../../components/errorMsg.mjs";
import { registerForm } from "../services/handlers/register.mjs";

export async function registerUser(userData) {
  const body = JSON.stringify(userData);

  try {
    const response = await fetch(`${apiUrl}${REG_URL}`, {
      method: "post",
      body,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const json = await response.json();

    if (response.ok) {
      feedback.innerHTML = errorMessage("Account registered", true);
      setTimeout(() => {
        location.reload();
      }, 1500);
      return await response.json();
    }

    setTimeout(() => {
      registerForm.reset();
    }, 1000);

    console.log(json.errors[0].message);

    feedback.innerHTML = errorMessage(json.errors[0].message, false);
    throw new Error(await response.statusText);
  } catch (error) {
    console.log(error);
  }
}
