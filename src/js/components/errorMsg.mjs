export const feedback = document.querySelector(".feedback-msg");

export function errorMessage(message, status) {
  let bgColor = "bg-error";
  let color = "text-error-txt";

  console.log(status, message);

  if (status) {
    bgColor = "bg-success";
    color = "text-success-txt";
  }

  return `<div class="${bgColor} w-11/12 lg:w-8/12 mx-auto px-2 py-1 my-2">
    <p class="${color} text-center font-bold">${message}</p>
    </div>`;
}
