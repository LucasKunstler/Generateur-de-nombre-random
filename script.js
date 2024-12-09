// Sélectionner le bouton et le conteneur du résultat
const generateBtn = document.getElementById('generateBtn');
const resultDiv = document.getElementById('result');

// Ajouter un événement au clic
generateBtn.addEventListener('click', () => {
  // Générer un nombre aléatoire entre 0 et 30
  const randomNumber = Math.floor(Math.random() * 21) + 1;

  // Ajouter une animation au résultat
  resultDiv.textContent = randomNumber;
  resultDiv.classList.add('pop');

  // Supprimer l'animation après 300ms pour pouvoir la rejouer
  setTimeout(() => {
    resultDiv.classList.remove('pop');
  }, 300);
});
