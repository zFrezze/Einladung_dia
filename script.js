const sealWrapper = document.getElementById("sealWrapper");
const flap = document.getElementById("flap");
const diamond = document.getElementById("diamond");
const cardFold = document.querySelector(".card-fold");

let step = 0;

sealWrapper.addEventListener("click", () => {
  if (step === 0) {
    sealWrapper.classList.add("break");
    setTimeout(() => { sealWrapper.style.display = "none"; }, 900);
    step = 1;
  } else if (step === 1) {
    flap.classList.add("open");
    setTimeout(() => {
      diamond.classList.remove("hidden");
      diamond.classList.add("show");
    }, 800);
    step = 2;
  }
});
diamond.addEventListener("click", () => {
  if (step === 2) {
    cardFold.classList.add("open");
    step = 3;
  }
});
