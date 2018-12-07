const chalk = require('chalk');

module.exports = help = chalk.cyan(`
Pour la sauver, vous devez parcourir la map, trouver son emplacement et battre les 3 Boss (Bowser, Roi Boo et Bowser Jr.)
        
Choisissez une direction : 
        
            N = Nord
            S = Sud
            E = Est
            O = Ouest
            
            NE = Nord-Est
            NO = Nord-Ouest
            SE = Sud-Est
            SO = Sud-Ouest
        
Vous pouvez également afficher l'inventaire en tapant INVENTAIRE et vos stats en tapant STATS.

Vos instructions doivent impérativement être écrites avec des lettres MAJUSCULES et sans ESPACES !
Activez donc la touche MAJ de votre clavier !
`);