export const feedback = document.getElementById("feedback-msg");

export function errorMessage(message, status) {
  let bgColor = "bg-error";
  let color = "text-error-txt";

  console.log(status, message);

  if (status) {
    bgColor = "bg-success";
    color = "text-success-txt";
  }

  feedback.innerHTML = `<div class="${bgColor} w-full py-1">
  <p class="${color} text-center font-bold">${message}</p>
  </div>`;
}
