// Récupérer le bouton
const boutontheme = document.getElementById("theme-toggle");

// Récupérer le thème enregistré
const themeSauvegarde = localStorage.getItem("theme");

// Appliquer le thème sauvegardé
if (themeSauvegarde === "clair") {
    document .body.classList.add("light");
}

// Mettre à jour l'icône du bouton
function actualiserIcone() {
    const modeClair = document.body.classList.contains("light");

boutonTheme.textContent = modeClair ? "🌙" : "☀️";
boutonTheme.setAttribute(
    "aria-label", 
    modeClair ? "Activer le mode sombre" : "Activer le mode clair"
);
}

// Réagir au clic 
if (boutonTheme) {
    actualiserIcone();
    boutonTheme.addEventListener("click", () => {
        // Ajouter ou retirer lz classe light
        document.body.classList.toggle("light");
        const modeClair = document.body.classList.contains("light");
        // Enregister le choix
        localStorage.setItem("theme",modeClair ? "clair" : "sombre");
        // Actualiser le bouton
         actualiserIcone();
    });
}