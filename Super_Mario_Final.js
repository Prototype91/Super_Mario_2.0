//On précise que nous taperons de l'utf 8 dans la console
process.stdin.setEncoding('utf8');

//Création de la map du jeu
let map = [
    ['P', 'J', '9', '2', '1'],
    ['B', '_', '_', '_', 'L'],
    ['2', '_', '2', 'N', '_'],
    ['_', 'A', '_', '_', '_'],
    ['2', '_', '_', 'E', 'O'],
    ['L', '_', '_', '_', '_'],
    ['_', 'C', 'T', 'M', '9'],
    ['1', '_', '_', '_', '1'],
];

//Position initiale du Joueur
//y = map[] et x = [][]
let joueur = {
    x: 2,
    y: 7
};

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

function slowLog(texte, time, suite) {
    let lettreCourante = 0;
    for (let i = 0; i < texte.length + 1; i++) {
        setTimeout(() => {
            if (i < texte.length) {
                process.stdout.write(texte[lettreCourante]);
                lettreCourante++;
            } else {
                suite();
            }
        }, i * time);
    }
}

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
            console.log("Vous êtes aux toilettes, poser une mine ?");
            break;
        case "1":
            console.log("Vous êtes au bord d'une falaise !");
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

//Importation du dé à 20 faces
const roll_diceModule = require('./dice.js')

// Création des personnages du jeu :
let mario = {
    name: "Mario",
    health: 300,
    attack: 20,
    armor: 12,
    weight_character: 0,
    limite: 12 * 7.5
}

let taupe = {
    name: "Taupi Taupe",
    health: 60,
    attack: 10,
    armor: 6,
}

let bowser = {
    name: "Bowser",
    health: 180,
    attack: 20,
    armor: 14,
};

let bowser_jr = {
    name: "Bowser Jr.",
    health: 100,
    attack: 10,
    armor: 9,
};

let king_boo = {
    name: "Roi Boo",
    health: 100,
    attack: 9,
    armor: 10,
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
}

//Armes
let sword = {
    name: "Épée Magique",
    weight: 10,
    attaque: 10,
    charges: 15,
    bonus: 20,
    effect: function () {
        if (this.charges >= 5) {
            this.charges -= 2;
            grab_equipment();
        } else {
            console.log("Pas assez de charges dans l'objet.")
        }

    }
};

let hammer = {
    name: "Marteau Magique",
    weight: 10,
    bonus: 20
};

//Utilisation effet
function Use(object) {
    object.effect();
};

//Inventaire et équipement
let inventaire = [];
let equipment = [];
let current_equipment = [];

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

//Jeter un équipement
function throw_equipement(indice) {

    let j = inventaire.splice(indice, 1);
    mario.weight_character -= indice;
    console.log(j[0] + " jeté.");
};

//Montrer l'inventaire
function show_inventaire() {
    if (mario.weight_character <= 0) {
        console.log("Votre inventaire : vide" + ".\nPoids du personnage : " + mario.weight_character + "kg sur " + mario.limite + "kg disponibles.")
    } else {
        console.log("Votre inventaire : " + inventaire.join(", ") + ".\nPoids du personnage : " + mario.weight_character + "kg sur " + mario.limite + "kg disponibles.");
    }

}

//Équipé une arme, un bouclier
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

//Déséquiper une arme, un bouclier
function unequip(equipment) {
    current_equipment.splice(current_equipment.indexOf(equipment.name), 1);
    console.log(equipment.name + " déséquipé.")
    inventaire.push(equipment.name);
    mario.attack -= equipment.bonus;
};

let intro =
    `
Au secours Mario, c'est moi la Princesse Peach !
Bowser m'a encore une fois kidnappé au château et je suis prisonnière quelque part dans ce monde ...
Viens me sauver je t'en supplie !
`;

let rules = `
Vous pénétrez alors ce monde à la recherche de la princesse.
Pour la sauver, vous devez parcourir la map, trouver son emplacement et battre les 3 Boss (Bowser, Roi Boo et Bowser Jr.)
Attention, Taupi Taupe se balade et peut vous causer du tort !

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
Tapez HELP pour afficher ces consignes !

Vos ordres : `;

let suite =
    `
Et maintenant ?
`

//A chaque entrée dans la console, on appellera la fonction fléchée, rep sera la réponse tapée dans la console
//Ici on déclare ce que l'on fera lorsqu'on recevra une donnée
process.stdin.on('data', (d) => {
    let rep = d.toString().trim()
    if (rep == "N") {
        go("N");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog(`Vos ordres : `, 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
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
        console.log(`
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
            `);
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
});

/* début du script ici */
process.stdin.pause(); //stopper l'entrée pour ne pas pirater le texte

slowLog(intro, 30, () => {
    slowLog(rules, 30, () => {
        process.stdin.resume(); //réactiver l'entrée
    });
});