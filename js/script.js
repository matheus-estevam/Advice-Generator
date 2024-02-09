const botaoAdvice = document.querySelector(".button-advice");
const textAdvice = document.querySelector(".advice-text");

async function mostrarAdvice() {
  await fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((r) => {
      textAdvice.innerHTML = r.slip.advice;
    });
}

botaoAdvice.addEventListener("click", mostrarAdvice);
