const seal = document.getElementById("seal");
const sealWrapper = document.querySelector(".seal");
const diamond = document.querySelector(".diamond");
const cardContent = document.querySelector(".card-content");

// Schritt 1: Siegel anklicken -> zerbricht
sealWrapper.addEventListener("click", () => {
  sealWrapper.style.animation = "crack 0.8s forwards";
  setTimeout(() => {
    sealWrapper.style.display = "none";
    diamond.classList.remove("hidden");
    diamond.style.opacity = "1";
    diamond.style.transform = "translate(-50%, -50%) scale(1)";
  }, 900);
});

// Schritt 2: Diamant anklicken -> öffnet sich, zeigt Text
diamond.addEventListener("click", () => {
  cardContent.classList.remove("hidden");
});

// Animation für Siegel (rudimentär, du kannst GSAP oder Canvas für echtes Splitten nutzen)
const style = document.createElement("style");
style.textContent = `
@keyframes crack {
  0%   { transform: scale(1) rotate(0); opacity: 1; }
  50%  { transform: scale(1.2) rotate(10deg); }
  100% { transform: scale(0) rotate(20deg); opacity: 0; }
}`;
document.head.appendChild(style);
