export const feedback = document.querySelector(".feedback-msg");

export function errorMessage(message, status) {
  let bgColor = "bg-error";
  let color = "text-error-txt";

  console.log(status, message);

  if (status) {
    bgColor = "bg-success";
    color = "text-success-txt";
  }

  return `<div class="${bgColor} w-full px-2">
    <p class="${color} text-center font-bold">${message}</p>
    </div>`;
}
