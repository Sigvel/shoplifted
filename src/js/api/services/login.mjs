import { apiUrl, LOGIN_URL } from "../constants.mjs";
import { errorMessage } from "../../components/errorMsg.mjs";
import { loginForm } from "./handlers/login.mjs";
import { save } from "../storage/save.mjs";

export async function loginUser(userData) {
  const body = JSON.stringify(userData);

  try {
    const response = await fetch(`${apiUrl}${LOGIN_URL}`, {
      method: "post",
      body,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const { accessToken, ...user } = await response.json();

    if (response.ok) {
      save("token", accessToken);
      save("user", user);
      errorMessage("Login successful", true);

      setTimeout(() => {
        location.reload();
      }, 1300);
    }

    errorMessage(user.errors[0].message, false);

    throw new Error(await response.statusText);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      loginForm.reset();
    }, 1000);
  }
}
