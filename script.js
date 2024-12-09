// Sélectionner les éléments
const generateBtn = document.getElementById('generateBtn');
const resultDiv = document.getElementById('result');
const historyList = document.getElementById('historyList');
const toggleHistoryBtn = document.getElementById('toggleHistoryBtn');

// Initialiser un compteur pour les feuilles gagnantes
let feuilleCounter = 1;

// Ajouter un événement pour générer un nombre aléatoire et un "gagnant feuille"
generateBtn.addEventListener('click', () => {
  // Générer un nombre aléatoire entre 1 et 20
  const randomNumber = Math.floor(Math.random() * 20) + 1;

  // Construire le texte pour le gagnant
  const gagnantTexte = `Gagnant Feuille ${feuilleCounter} - Nombre tiré : ${randomNumber}`;

  // Afficher le texte dans le conteneur du résultat
  resultDiv.textContent = `${randomNumber}`;
  resultDiv.classList.add('pop');

  // Supprimer l'animation après 300ms pour pouvoir la rejouer
  setTimeout(() => {
    resultDiv.classList.remove('pop');
  }, 300);

  // Ajouter le texte à l'historique
  const listItem = document.createElement('li');
  listItem.textContent = gagnantTexte;
  historyList.appendChild(listItem);

  // Incrémenter le compteur
  feuilleCounter++;
});

// Ajouter un événement pour afficher/masquer l'historique
toggleHistoryBtn.addEventListener('click', () => {
  // Basculer la classe "hidden" sur la liste
  historyList.classList.toggle('hidden');

  // Modifier le texte du bouton en fonction de l'état
  if (historyList.classList.contains('hidden')) {
    toggleHistoryBtn.textContent = 'Afficher l\'Historique';
  } else {
    toggleHistoryBtn.textContent = 'Masquer l\'Historique';
  }
});



