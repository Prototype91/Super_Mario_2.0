//On précise que nous taperons de l'utf 8 dans la console
process.stdin.setEncoding('utf8');

//Importation des différents modules :
const figlet = require('figlet');
const clear = require('clear');
const chalk = require('chalk');
const inquirer = require('inquirer');

const questions = require('./questions');
const bonnes_reponses = require('./reponses');

//Fonction slowLog
const slowLog = require('./functions/slow_log');

//Importation du dé à 20 faces
const roll_diceModule = require('./functions/dice.js');

//Importation de la map
const map = require('./map');

//Importations des textes et dialogues
const rules = require('./texts/rules');
const intro = require('./texts/intro');
const suite = require('./texts/suite');
const help = require('./texts/help');


//Importation des personnages
const mario = require('./characters/mario');
const bowser = require('./characters/bowser');
const bowser_jr = require('./characters/bowser_jr');
const king_boo = require('./characters/king_boo');
const taupe = require('./characters/taupe');

//Importation des armes
const hammer = require('./objects/hammer');
const sword = require('./objects/sword');

//Inventaire et équipement
let inventaire = [];
let current_equipment = [];

//Position initiale du Joueur
//y = map[] et x = [][]
let joueur = {
    x: 2,
    y: 7
};

//Direction = N, NE, NO, E, W, SE, ou SO
function go(direction) {

    switch (direction) {
        case 'O':
            if (joueur.x > 0) {
                joueur.x--;
                console.log("Vous allez à l'Ouest.");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction.");
            }
            break;
        case 'N':
            if (joueur.y > 0) {
                joueur.y--;
                console.log("Vous allez au Nord.");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction.");
            }
            break;
        case 'E':
            if (joueur.x < map[joueur.y].length - 1) {
                joueur.x++;
                console.log("Vous allez à l'Est.");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction.");
            }
            break;
        case "S":
            if (joueur.y < map.length - 1) {
                joueur.y++;
                console.log("Vous allez au Sud.");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction.");
            }
            break;
        case "NE":
            if (joueur.y > 0 && joueur.x < map[joueur.y].length - 1) {
                joueur.y--;
                joueur.x++;
                console.log("Vous allez au Nord-Est.");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction.");
            }
            break;
        case "SE":
            if (joueur.y < map.length - 1 && joueur.x < map[joueur.y].length - 1) {
                joueur.y++;
                joueur.x++;
                console.log("Vous allez au Sud-Est.")
            } else {
                console.log("Vous ne pouvez pas prendre cette direction.");
            }
            break;
        case "NO":
            if (joueur.y > 0 && joueur.x > 0) {
                joueur.y--;
                joueur.x--;
                console.log("Vous allez au Nord-Ouest.");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction.");
            }
            break;
        case "SO":
            if (joueur.y < map.length - 1 && joueur.x > 0) {
                joueur.y++;
                joueur.x--;
                console.log("Vous allez au Sud-Ouest.");
            } else {
                console.log("Vous ne pouvez pas prendre cette direction.");
            }
            break;
        default:

    }

    //Case où le joueur se trouve
    switch (map[joueur.y][joueur.x]) {
        case "_":
            console.log("Cet endroit semble être désert, continuez votre chemin !");
            break;
        case "C":
            console.log("Vous êtes au Château et constatez la disparition de la princesse...");
            break;
        case "P":
            if (bowser.health <= 0 && bowser_jr.health <= 0 && king_boo.health <= 0 && joueur.x <= 0 && joueur.y <= 0) {
                console.log("Bravo vous avez sauvez la princesse (.)(.) Tapez FAIRE DES BEBES pour lui faire l'amour ou QUIT pour la laisser.");
            } else {
                console.log("Vous avez trouvé la princesse mais elle semble être enfermée. Battez les 3 Boss !");
            }
            break;
        case "B":
            if (bowser.health > 0) {
                console.log("Bowser se tient droit devant vous ! Tapez ATTAQUER pour attaquer !");
            } else {
                console.log("Vous vous trouvez devant le cadavre de Bowser ...")
            }
            break;
        case "J":
            if (bowser_jr.health > 0) {
                console.log("Bowser Jr. se tient droit devant vous ! Tapez ATTAQUER pour attaquer !");
            } else {
                console.log("Vous vous trouvez devant le cadavre de Bowser Jr ...")
            }
            break;
        case "O":
            if (king_boo.health > 0) {
                console.log("Roi Boo se tient droit devant vous ! Tapez ATTAQUER pour attaquer !");
            } else {
                console.log("Vous vous trouvez devant le cadavre de Roi Boo ...")
            }
            break;
        case "M":
            console.log("Vous avez trouver un Marteau Magique. Taper RAMASSER pour ramasser et EQUIP pour équiper !");
            break;
        case "E":
            console.log("Vous avez trouver une Épée Magique. Taper RAMASSER pour ramasser et EQUIP pour équiper !");
            break;
        case "A":
            console.log("Vous êtes dans la chambre de la princesse, pas touche à ses petites culottes !");
            break;
        case "N":
            console.log("Vous êtes aux toilettes du château, refaire la déco ? OUI ou NON ?");
            break;
        case "1":
            console.log("Vous êtes au bord d'une falaise ! Sauter ? OUI ou NON ?");
            break;
        case "2":
            console.log("Vous êtes proche du but, les cris de la princesse se font entendre !");
            break;
        case "L":
            console.log("C'est un spot de potions, tapez BOIRE pour vous restaurer et regagner des points de vie !");
            break;
        case "9":
            console.log("Ce sont des champignons magiques ! Tapez MANGER pour bénéficier de 10 points d'attaques en plus !");
            break;
        case "T":
            if (taupe.health > 0) {
                console.log("Taupi Taupe se tient droit devant vous ! Tapez ATTAQUER pour attaquer !");
            } else {
                console.log("Vous vous trouvez devant le cadavre de Taupi taupe ...")
            }
            break;
    };
};

//fonction pour attaquer
function Attack(attacker, defencer) {
    let nb = roll_diceModule.roll_dice(20);
    if (nb >= defencer.armor) {
        defencer.health -= attacker.attack;
        console.log("Le dé a été lancé : " + nb + ".");
        console.log(attacker.name + ' a infligé ' + attacker.attack + ' points de dégâts à ' + defencer.name);
        console.log('il reste ' + defencer.health + ' points de vie à ' + defencer.name);
    } else {
        console.log("Le dé a été lancé : " + nb + ".");
        console.log('L\'attaque de ' + attacker.name + ' a été bloquée.');
        console.log('il reste ' + defencer.health + ' points de vie à ' + defencer.name + ".");
    }
    if (defencer.health <= 0 && defencer !== mario) {
        console.log(defencer.name + " a été tué ! Vous vous rapprochez de votre but !");
    }
    if (mario.health <= 0) {
        console.log("Mario est vaincu, la princesse ne sera jamais sauvée...")
        console.log("GAME OVER");
        process.exit();
    }
};

//Ramasser un équipement
function grab_equipment(equipment) {
    if (equipment.weight + mario.weight_character < mario.limite && equipment.name !== undefined) {
        inventaire.push(equipment.name);
        mario.weight_character += equipment.weight;
        console.log(equipment.name + " ajouté à votre inventaire !");
    } else {
        console.log("Cet équipement est trop lourd, vider une partie de vôtre sac !");
    }
};

//Montrer l'inventaire
function show_inventaire() {
    if (mario.weight_character <= 0) {
        console.log("Votre inventaire : vide" + ".\nPoids du personnage : " + mario.weight_character + "kg sur " + mario.limite + "kg disponibles.")
    } else {
        console.log("Votre inventaire : " + inventaire.join(", ") + ".\nPoids du personnage : " + mario.weight_character + "kg sur " + mario.limite + "kg disponibles.");
    }

}

//Équipé une arme
function equip(equipment) {
    if (current_equipment.length < 1) {
        current_equipment.push(equipment.name);
        inventaire.splice(inventaire.indexOf(equipment.name), 1);
        console.log(equipment.name + " équipé. Bonus d'attaque + " + equipment.bonus + ".");
        console.log("Votre équipement : " + current_equipment.join(", ") + ".");
        mario.attack += equipment.bonus;
        inventaire.push(equipment.name);
    } else {
        console.log("Vous êtes déja équipé d'une arme.")
    }
};

function vosOrdres() {
    return inquirer.prompt(questions)
        .then(reponse => reponse.Orientation)
        // .then(function(reponse) {
        //     return reponse.Orientation;
        // })
        .then(rep => processOrdre(rep))
}









//A chaque entrée dans la console, on appellera la fonction fléchée, rep sera la réponse tapée dans la console
//Ici on déclare ce que l'on fera lorsqu'on recevra une donnée
function processOrdre (d) {
    let rep = d.toString().trim()
    if (rep == "N") {
        go("N");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                vosOrdres();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "S") {
        go("S");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "E") {
        go("E");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "BOIRE" && ((joueur.x == 0 && joueur.y == 5) || (joueur.x == 4 && joueur.y == 1))) {
        mario.health += 50;
        console.log("Vous venez de boire une potion, votre vie = " + mario.health + " PV.");
        console.log("retournez vite au combat !");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "MANGER" && ((joueur.x == 2 && joueur.y == 0) || (joueur.x == 4 && joueur.y == 6))) {
        mario.attack += 10;
        mario.armure += 1;
        console.log("Vous venez d'avaler un champignon magique ! Vos dégats sont maintenant de " + mario.attack + " points par tour !");
        console.log("Votre armure vous protège désormais des lancés de dé inférieurs à " + mario.armor + ".");
        console.log("Retournez vite au combat !");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "O") {
        go("O");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    //Réponse du joueur aux toilettes :
    if (rep == "OUI" && (joueur.x == 3 && joueur.y == 2)) {
        console.log("Mario pose une mine et se sent plus léger dés à présent !");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    //Réponse du joueur aux toilettes :
    if (rep == "NON" && (joueur.x == 3 && joueur.y == 2)) {
        console.log("Mario se contente d'admirer le trône...");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    //Réponse du joueur au bord de la falaise :
    if (rep == "OUI" && ((joueur.x == 4 && joueur.y == 0) || (joueur.x == 4 && joueur.y == 7) || (joueur.x == 0 && joueur.y == 7))) {
        console.log("Mario saute et met fin à ses jours ! RIP Princesse Peach...");
        console.log("GAME OVER");
        process.exit();
    }
    //Réponse du joueur au bord de la falaise :
    if (rep == "NON" && ((joueur.x == 4 && joueur.y == 0) || (joueur.x == 4 && joueur.y == 7) || (joueur.x == 0 && joueur.y == 7))) {
        console.log("Mario se contente d'admirer la vue !");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "NE") {
        go("NE");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "NO") {
        go("NO");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "SE") {
        go("SE");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "SO") {
        go("SO");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "HELP") {
        console.log(help);
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "INVENTAIRE") {
        show_inventaire();
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "RAMASSER" && joueur.x == 3 && joueur.y == 6) {
        grab_equipment(hammer);
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "EQUIP" && joueur.x == 3 && joueur.y == 6) {
        equip(hammer);
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "ATTAQUER" && (joueur.x == 4 && joueur.y == 4)) {
        if (king_boo.health > 0) {
            Attack(king_boo, mario);
            Attack(mario, king_boo);
        } else {
            console.log('Continuer votre chemin, votre ennemi est mort !')
        }
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "ATTAQUER" && (joueur.x == 1 && joueur.y == 0)) {
        if (bowser_jr.health > 0) {
            Attack(bowser_jr, mario);
            Attack(mario, bowser_jr);
        } else {
            console.log('Continuer votre chemin, votre ennemi est mort !')
        }
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "ATTAQUER" && (joueur.x == 0 && joueur.y == 1)) {
        if (bowser.health > 0) {
            Attack(bowser, mario);
            Attack(mario, bowser);
        } else {
            console.log('Continuer votre chemin, votre ennemi est mort !')
        }
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "ATTAQUER" && (joueur.x == 2 && joueur.y == 6)) {
        if (taupe.health > 0) {
            Attack(taupe, mario);
            Attack(mario, taupe);
        } else {
            console.log('Continuer votre chemin, votre ennemi est mort !')
        }
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "EQUIP" && joueur.x == 3 && joueur.y == 4) {
        equip(sword);
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "RAMASSER" && joueur.x == 3 && joueur.y == 4) {
        grab_equipment(sword);
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "STATS") {
        console.log("Vie : " + mario.health + " PV.");
        console.log("Vos dégats par tour : " + mario.attack + " points.");
        console.log("Votre armure vous protège des lancés de dé inférieurs à " + mario.armor + ".")
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }

    if (rep.substr(0, 1).toUpperCase() != rep.substr(0, 1)) {
        console.log('Mario ne comprend pas quand tu lui parles avec des espaces et des lettres minuscules ! Apprends à lire mon petit !');
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }

    if (rep == "FAIRE DES BEBES" && bowser.health <= 0 && bowser_jr.health <= 0 && king_boo.health <= 0 && joueur.x == 0 && joueur.y == 0) {
        console.log("Vous retournez au château et lui faites l'amour comme une bête ! Marriiiioooooooooo !!!!!");
        process.exit();
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "QUIT") {
        process.exit();
    }

    console.log('Rien compris')
}

/* début du script ici */
process.stdin.pause(); //stopper l'entrée pour ne pas pirater le texte

//Logo introductif
const App = {
    title: figlet.textSync('Super Mario v2.0', {
        font: 'Ghost'
    }),
    seond_title: figlet.textSync('by Protoxyde91', 'Ogre'),
    logTitle: function () {
        clear();
        console.log(chalk.yellow(this.title));
        console.log(chalk.red(this.seond_title));
        console.log('\n');
    }
}

App.logTitle();



//Début du jeu
slowLog(intro, 1, () => {
    slowLog(rules, 1, () => {
        // process.stdin.resume(); //réactiver l'entrée
        vosOrdres()
    });
});

