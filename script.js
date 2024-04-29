document.addEventListener('DOMContentLoaded', function() {

fetch('header.html')
            .then(response => response.text())
            .then(html => {
                // Insérer le contenu de header.html dans la balise div
                document.getElementById('header-container').innerHTML = html;
            })
            .catch(error => console.error('Erreur de chargement de l\'en-tête:', error));
   

            fetch('footer.html')
            .then(response => response.text())
            .then(html => {
                
                document.getElementById('footer').innerHTML = html;
            })
            .catch(error => console.error('Erreur de chargement du pied', error));

            
            
            // Sélectionnez le bouton
var bouton = document.getElementById('addition');

// Ajoutez un écouteur d'événements pour le clic sur le bouton
bouton.addEventListener('click', function() {
    // Redirigez vers une autre page
    window.location.href = 'addition.html';
});

// Sélectionnez le bouton
var bou = document.getElementById('multiplication');

// Ajoutez un écouteur d'événements pour le clic sur le bouton
bou.addEventListener('click', function() {
    // Redirigez vers une autre page
    window.location.href = 'multiplication.html';
});

// Sélectionnez le bouton
var btn = document.getElementById('soustraction');

// Ajoutez un écouteur d'événements pour le clic sur le bouton
btn.addEventListener('click', function() {
    // Redirigez vers une autre page
    window.location.href = 'soustraction.html';
});


// Sélectionnez le bouton
var btn = document.getElementById('division');

// Ajoutez un écouteur d'événements pour le clic sur le bouton
btn.addEventListener('click', function() {
    // Redirigez vers une autre page
    window.location.href = 'division.html';
});



// Sélectionnez le formulaire
var form = document.getElementById('myForm');

// Ajoutez un écouteur d'événements pour l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
    // Empêchez le comportement par défaut de soumettre le formulaire
    event.preventDefault();

    // Récupérez les valeurs saisies dans les champs input
    var valeur1 = parseFloat(form.elements['valeur1'].value);
    var valeur2 = parseFloat(form.elements['valeur2'].value);
    
    // Sélectionnez le span pour afficher le résultat
    var resultat = document.getElementById('resultat');

    // Vérifiez si les valeurs saisies sont des nombres valides
    if (!isNaN(valeur1) && !isNaN(valeur2)) {
        // Effectuez l'opération d'addition
        var resultat = valeur1 + valeur2;
        console.log("resultat")
        // Affichez le résultat dans le span
        resultat.textContent = resultat;
        
    } else {
        // Si l'une des valeurs saisies n'est pas un nombre valide, affichez un message d'erreur
        resultat.textContent = "Veuillez saisir des nombres valides.";
    }
});


});