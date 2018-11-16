//On précise que nous taperons de l'utf 8 dans la console
process.stdin.setEncoding('utf8');

//Création de la map du jeu
let map = [
    ['P', 'J', '_', '2', '1'],
    ['B', '_', '_', '_', '_'],
    ['_', '_', '2', 'N', '_'],
    ['_', 'A', '_', '_', '_'],
    ['2', '_', '_', 'E', 'O'],
    ['_', '_', '_', '_', '_'],
    ['_', 'C', 'T', 'M', '_'],
    ['1', '_', '_', '_', '1'],
];

//Position initiale DU Joueur
//y = map[] et x = [][]
let joueur = {
    x: 2,
    y: 6
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
                console.log("Vous allez à l'Ouest.", 50);
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
            console.log("Vous avez trouvé la princesse !");
            break;
        case "B":
            console.log("Bowser se tient droit devant vous !");
            while(bowser.health > 0){
                Attack(mario, bowser);
            }
            break;
        case "J":
            console.log("Bowser Jr. se tient droit devant vous !");
            while(bowser_jr.health > 0){
                Attack(mario, bowser_jr);
            }
            break;
        case "O":
            console.log("Roi Boo se tient droit devant vous !");
            while(king_boo.health > 0){
                Attack(mario, king_boo);
            }
            break;
        case "M":
            console.log("Vous avez trouver un Marteau Magique.");
            equip(sword);
            break;
        case "E":
            console.log("Vous avez trouver une Épée Magique.");
            equip(hammer);
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
    };
};

//Importation du dé à 20 faces
const roll_diceModule = require('./dice.js')

// Création des personnages du jeu :
let mario = {
    name: "Mario",
    health: 1000,
    attack: 20,
    armor: 12,
    weight_character: 0,
    limite: 12 * 7.5
}

let taupe = {
    name: "Taupi Taupe",
    health: 40,
    attack: 20,
    armor: 6,
}

let bowser = {
    name: "Bowser",
    health: 100,
    attack: 10,
    armor: 14,
};

let bowser_jr = {
    name: "Bowser Jr.",
    health: 100,
    attack: 7,
    armor: 5,
};

let king_boo = {
    name: "Roi Boo",
    health: 100,
    attack: 7,
    armor: 5,
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
    if(defencer.health <= 0){
        console.log(defencer.name + " a été tué !");
    }
    if(mario.health <= 0){
        console.log("Vous êtes mort...");
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
    console.log("Votre inventaire : " + inventaire.join(", ") + ".\nPoids du personnage : " + mario.weight_character + "kg sur " + mario.limite + "kg disponibles.");
}

//Équipé une arme, un bouclier
function equip(equipment) {
    if (current_equipment.length < 1) {
        current_equipment.push(equipment.name);
        inventaire.splice(inventaire.indexOf(equipment.name), 1);
        console.log(equipment.name + " équipé.")
        console.log("Votre équipement : " + current_equipment.join(", ") + ".")
    } else {
        console.log("Vous êtes déja équipé d'une arme.")
    }
};

//Déséquiper une arme, un bouclier
function unequip(equipment) {
    current_equipment.splice(current_equipment.indexOf(equipment.name), 1);
    console.log(equipment.name + " déséquipé.")
    inventaire.push(equipment.name);
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

Choisissez une direction : 

N = Nord
S = Sud
E = Est
O = Ouest
    
NE = Nord-Est
NO = Nord-Ouest
SE = Sud-Est
SO = Sud-Ouest

Votre direction : `;

let suite =
    `Et maintenant ?
`

//A chaque entrée dans la console, on appellera la fonction fléchée, rep sera la réponse tapée dans la console
//Ici on déclare ce que l'on fera lorsqu'on recevra une donnée
process.stdin.on('data', (d) => {
    let rep = d.toString().trim()
    if (rep == "N") {
        go("N");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog("Votre direction : ", 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "S") {
        go("S");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog("Votre direction : ", 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "E") {
        go("E");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog("Votre direction : ", 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "O") {
        go("O");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog("Votre direction : ", 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "NE") {
        go("NE");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog("Votre direction : ", 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "NO") {
        go("NO");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog("Votre direction : ", 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "SE") {
        go("SE");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog("Votre direction : ", 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "SO") {
        go("SO");
        process.stdin.pause(); //stopper l'entrée
        slowLog(suite, 10, () => {
            slowLog("Votre direction : ", 10, () => {
                process.stdin.resume();//réactiver l'entrée à la fin du log
            });
        });
    }
    if (rep == "quit") {
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