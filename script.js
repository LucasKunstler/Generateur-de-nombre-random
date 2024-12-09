// Sélectionner les éléments
const generateBtn = document.getElementById('generateBtn');
const toggleHistoryBtn = document.getElementById('toggleHistoryBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyList = document.getElementById('historyList');

// Initialiser un compteur pour les feuilles gagnantes
let feuilleCounter = 1;

// Ajouter un événement pour générer un nombre aléatoire et un "gagnant feuille"
generateBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  const gagnantTexte = `Gagnant Feuille ${feuilleCounter} - Nombre tiré : ${randomNumber}`;

  // Afficher le résultat
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `${randomNumber}`;
  
  // Ajouter l'élément à l'historique
  const listItem = document.createElement('li');
  listItem.textContent = gagnantTexte;
  historyList.appendChild(listItem);

  // Incrémenter le compteur de feuille
  feuilleCounter++;

  // Vérifier si la liste est visible et contient des éléments
  if (!historyList.classList.contains('hidden') && historyList.children.length > 0) {
    clearHistoryBtn.classList.remove('hidden');
  }
});

// Ajouter un événement pour afficher/masquer l'historique
toggleHistoryBtn.addEventListener('click', () => {
  historyList.classList.toggle('hidden');
  toggleHistoryBtn.textContent = historyList.classList.contains('hidden')
    ? 'Afficher l\'Historique'
    : 'Masquer l\'Historique';

  // Si l'historique est visible, afficher le bouton "Effacer l'Historique" si la liste n'est pas vide
  if (!historyList.classList.contains('hidden') && historyList.children.length > 0) {
    clearHistoryBtn.classList.remove('hidden');
  } else {
    clearHistoryBtn.classList.add('hidden');
  }
});

// Ajouter un événement pour effacer l'historique
clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = ''; // Effacer le contenu
  feuilleCounter = 1; // Réinitialiser le compteur
  const resultDiv = document.getElementById('result');
  clearHistoryBtn.classList.add('hidden'); // Cacher le bouton après avoir effacé l'historique
});




