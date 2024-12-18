// Sélectionne l'élément par son ID
document
  .getElementById("IdiconAcceuil_1")
  .addEventListener("click", function () {
    // Redirige vers la page projetInscri.html
    window.location.href = "./projet.html";
  });

// ===================================

// Sélection des éléments
const dii = document.querySelector(".dii");
const dii2 = document.querySelector(".dii2");
const btnInscrire = document.getElementById("btnInscrire");
const btnConnecter = document.getElementById("btnConnecter");

// Gestion des clics sur "J'ai pas encore un compte"
btnInscrire.addEventListener("click", (event) => {
  event.preventDefault(); // Empêcher le comportement par défaut
  dii.style.display = "none";
  dii2.style.display = "block";
});

// Gestion des clics sur "J'ai un compte"
btnConnecter.addEventListener("click", (event) => {
  event.preventDefault(); // Empêcher le comportement par défaut
  dii2.style.display = "none";
  dii.style.display = "block";
});
