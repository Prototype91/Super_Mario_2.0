const chalk = require('chalk');

module.exports = help = chalk.cyan(`
Pour la sauver, vous devez parcourir la map, trouver son emplacement et battre les 3 Boss (Bowser, Roi Boo et Bowser Jr.)
        
Choisissez une direction : 

    Nord
    Sud
    Est
    Ouest
    
    Nord-Est
    Nord-Ouest
    Sud-Est
    Sud-Ouest

Vous pouvez également afficher l'inventaire en tapant INVENTAIRE et vos stats en tapant STATISTIQUES.
Tapez AIDE pour afficher ces consignes !

`);