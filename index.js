const rollButton = document.getElementById("rollButton");
const quoteElement = document.getElementById("adviceQuote");
const quoteIdElement = document.getElementById("adviceId");

writeAdvice();

rollButton.addEventListener("click", () => writeAdvice());

async function writeAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  quoteElement.innerText = data.slip.advice;
  quoteIdElement.innerText = data.slip.id;
}
