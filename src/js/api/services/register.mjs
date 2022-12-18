import { apiUrl, REG_URL } from "../constants.mjs";
import { errorMessage } from "../../components/errorMsg.mjs";
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
      errorMessage("Account registered", true);
      return await response.json();
    }

    setTimeout(() => {
      registerForm.reset();
    }, 1000);

    console.log(json.errors[0].message);

    errorMessage(json.errors[0].message, false);
    throw new Error(await response.statusText);
  } catch (error) {
    console.log(error);
  }
}
