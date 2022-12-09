export const feedback = document.getElementById("feedback-msg");

export function errorMessage(message, status) {
  let bgColor = "bg-error";
  let color = "text-error-txt";

  console.log(status, message);

  if (status) {
    bgColor = "bg-success-txt";
    color = "text-success";
  }

  feedback.innerHTML = `<div class="${bgColor} w-full">
  <p class="${color} text-center font-bold">${message}</p>
  </div>`;
}
