//Afficher le texte au fur et à mesure
function slow_log_simple(mot, time) {
    let lettre_courante = 0;
    for (let i = 0; i < mot.length; i++) {
        setTimeout(() => {
            process.stdout.write(mot[lettre_courante]);
            lettre_courante++;
        }, i * time);
    }
}

//Exemple texte introduction avec la possibilité de retourner à la ligne
let intro = `Bonjour`;

//Utilisation de la fonction
slow_log_simple(intro, 70);

