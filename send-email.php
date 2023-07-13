<?php
// Récupère les données du formulaire
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Adresse e-mail de destination
$to = '*****************';

// Sujet de l'e-mail
$subject = 'Nouveau message du formulaire de contact';

// Corps de l'e-mail
$body = "Nom : $name\n\n";
$body .= "Adresse e-mail : $email\n\n";
$body .= "Message :\n$message\n";

// En-têtes de l'e-mail
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Envoi de l'e-mail
$mailSent = mail($to, $subject, $body, $headers);

// Vérifie si l'e-mail a été envoyé avec succès
if ($mailSent) {
    echo 'success';
} else {
    echo 'error';
}
?>
