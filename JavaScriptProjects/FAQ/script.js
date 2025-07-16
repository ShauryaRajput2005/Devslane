document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.parentElement.parentElement.nextElementSibling;

      if(answer.classList.contains("max-h-0","opacity-0")){
        answer.classList.remove("max-h-0","opacity-0");
        answer.classList.add("max-h-40-","opacity-100")
      }else{
        answer.classList.add("max-h-0","opacity-0");
        answer.classList.remove("max-h-40-","opacity-100")

      }
      btn.textContent = answer.classList.contains("max-h-0") ? "+" : "−";
    });
  });
});
