let random = Math.floor(Math.random() * 100);

const input = document.querySelector(".input");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const allguesses = document.querySelector(".all-guesses");
const submitBtn = document.querySelector(".submitBtn");
const Restart = document.querySelector(".restart");

(function () {
  let guessesarray = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = parseInt(input.value);
    if (value === random) {
      result.innerText = "Congrats its a right Guess";
      submitBtn.setAttribute("disabled", true);
      Restart.disabled = false;
    } else if (value > random) {
      result.innerText = "Guess is Too high";
    } else {
      result.innerText = "Guess is Too Low";
    }

    // console.log(input.value)
    guessesarray.push(input.value);
    allguesses.innerText = guessesarray;

    form.reset();
  });
})();

Restart.addEventListener("click", () => {
  allguesses.innerText = "";
  result.innerText = "";
  submitBtn.disabled = false;
  Restart.disabled = true;
  random = Math.floor(Math.random() * 100);
});

const body = document.body;

for (let i = 1; i <= 100; i++) {
  const span = document.createElement("span");
  span.textContent = i;
  span.className = "number";

  // Random start position
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;

  span.style.left = `${startX}px`;
  span.style.top = `${startY}px`;

  // Random direction
  const angle = Math.random() * 2 * Math.PI;
  const distance = 300 + Math.random() * 500;

  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;

  span.style.setProperty("--x", `${dx}px`);
  span.style.setProperty("--y", `${dy}px`);

  // Add small delay to spread animation start times
  span.style.animationDelay = `${Math.random() * 10}s`;

  body.appendChild(span);
}
