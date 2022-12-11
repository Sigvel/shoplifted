export const feedback = document.querySelectorAll(".feedback-msg");

export function errorMessage(message, status) {
  let bgColor = "bg-error";
  let color = "text-error-txt";

  console.log(status, message);

  if (status) {
    bgColor = "bg-success";
    color = "text-success-txt";
  }

  feedback.forEach((container) => {
    container.innerHTML = `<div class="${bgColor} w-full px-1">
    <p class="${color} text-center font-bold">${message}</p>
    </div>`;
  });
}
