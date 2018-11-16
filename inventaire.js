//Caractéristiques du personnage
//Limite = 90 au départ
let mario = {
    name: "Mario",
    health: 1000,
    attack: 20,
    armor: 12,
    weight_character: 0,
    limite: 12 * 7.5
}

//Armes
let sword = {
    name: "Dark Sword",
    weight: 10,
    attaque: 10,
    charges: 15,

    effect: function () {
        if (this.charges >= 5) {
            this.charges -= 2;
            grab_equipment();
        } else {
            console.log("Pas assez de charges dans l'objet.")
        }

    }
};

let masse = {
    name: "Grosse Masse",
    weight: 10
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

//Ramasser équipement
for (let i = 0; i < 3; i++) {
    grab_equipment(sword);
    grab_equipment(masse);
};
console.log("\n");

//Appel des fonctions
show_inventaire();
console.log("\n");

throw_equipement(1)
show_inventaire();
console.log("\n");

equip(sword);
show_inventaire();
console.log("\n");

unequip(sword);
show_inventaire();
console.log("\n");

equip(sword);
equip(sword);
console.log("\n");
