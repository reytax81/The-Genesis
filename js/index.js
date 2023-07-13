// Exemple de script JavaScript pour ajouter une interaction à votre site

// Fonction qui affiche une alerte lorsque le bouton est cliqué
function showAlert() {
    alert('Vous avez cliqué sur le bouton ! VOUS  POUVEZ ETRE FIER D"Y ETRE ARRIVER MOUHAHAAAAAAA');
}

// Récupère le bouton par son ID
var button = document.getElementById('myButton');

// Ajoute un écouteur d'événement pour déclencher la fonction showAlert lorsque le bouton est cliqué
button.addEventListener('click', showAlert);
