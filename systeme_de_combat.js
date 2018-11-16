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

let squeleton = {
    name: 'Bowser',
    health: 20,
    attack: 6,
    armor: 10
}

let player = {
    name: 'Mario',
    health: 100,
    attack: 1,
    armor: 13
}

function Attack(attacker, defencer) {
    let nb = roll_diceModule.roll_dice(20);
    if (nb >= defencer.armor) {
        defencer.health -= attacker.attack;
        console.log("Vous avez lancé le dé et fait : " + nb);
        console.log(attacker.name + ' a infligé ' + attacker.attack + ' points de dégâts à ' + defencer.name);
        console.log('il reste ' + defencer.health + ' points de vie à ' + defencer.name);
    } else {
        console.log("Vous avez lancé le dé et fait : " + nb + ".");
        console.log('L\'attaque de ' + attacker.name + ' a été bloquée.');
        console.log('il reste ' + defencer.health + ' points de vie à ' + defencer.name + ".");
    }
    if(defencer.health <= 0){
        console.log(defencer.name + "a été tué !");
    }
    if(attacker.health <= 0){
        console.log(attacker.name + " a eu raison de vous." + " Vous êtes mort...");
    }
}

Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);
Attack(mario, bowser);