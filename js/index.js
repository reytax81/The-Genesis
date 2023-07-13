// Exemple de script JavaScript pour ajouter une interaction à votre site

// Fonction qui affiche une alerte lorsque le bouton est cliqué
function showAlert() {
    alert('Vous avez cliqué sur le bouton ! VOUS  POUVEZ ETRE FIER D"Y ETRE ARRIVER MOUHAHAAAAAAA');
}

// Récupère le bouton par son ID
var button = document.getElementById('myButton');

// Ajoute un écouteur d'événement pour déclencher la fonction showAlert lorsque le bouton est cliqué
button.addEventListener('click', showAlert);

// Récupère l'élément avec l'ID "date-time"
var dateTimeElement = document.getElementById('date-time');

// Fonction qui met à jour l'élément avec la date et l'heure actuelles
function updateDateTime() {
    var currentDate = new Date();
    dateTimeElement.innerHTML = currentDate.toLocaleString();
}

// Met à jour la date et l'heure toutes les secondes
setInterval(updateDateTime, 1000);

// Récupère le formulaire de contact par son ID
var contactForm = document.getElementById('contact-form');

// Écoute l'événement "submit" du formulaire
contactForm.addEventListener('submit', function(event) {
    // Empêche l'envoi du formulaire par défaut
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Vérifie si les champs sont vides
    if (name === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }

    // Envoie les données du formulaire vers le serveur (vous devez implémenter cette partie côté serveur)
    // Exemple :
    // fetch('/contact', {
    //     method: 'POST',
    //     body: JSON.stringify({ name: name, email: email, message: message })
    // })
    // .then(function(response) {
    //     if (response.ok) {
    //         alert('Votre message a été envoyé avec succès.');
    //         contactForm.reset();
    //     } else {
    //         alert('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.');
    //     }
    // })
    // .catch(function(error) {
    //     console.error('Erreur :', error);
    // });
});


