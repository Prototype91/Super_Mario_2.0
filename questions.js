const inquirer = require('inquirer')

module.exports = [
    {
        type: 'list',
        name: 'Orientation',
        message: 'Que souhaitez-vous faire ?',
        choices: [

            new inquirer.Separator('-- MAP --'),
            { name: 'Afficher la carte', value: 'MAP' },

            new inquirer.Separator('-- DÉPLACEMENT NORMAUX --'),
            { name: 'Déplacement Nord', value: 'N'},
            { name: 'Déplacement Sud', value: 'S'},
            { name: 'Déplacement Est', value: 'E' },
            { name: 'Déplacement Ouest', value: 'O' },

            new inquirer.Separator('-- DÉPLACEMENT LATÉRAUX --'),
            { name: 'Déplacement Nord-Est', value: 'NE' },
            { name: 'Déplacement Nord-Ouest', value: 'NO' },
            { name: 'Déplacement Sud-Est', value: 'SE' },
            { name: 'Déplacement Sud-Ouest', value: 'SO' },

            new inquirer.Separator('-- COMBATS --'),
            { name: 'Attaquer', value: 'ATTAQUER' },

            new inquirer.Separator('-- SANTÉ --'),
            { name: 'Manger', value: 'MANGER' },
            { name: 'Boire', value: 'BOIRE' },

            new inquirer.Separator('-- OBJETS --'),
            { name: 'Ramasser', value: 'BOIRE' },
            { name: 'Équiper', value: 'EQUIP' },
            { name: 'Inventaire', value: 'INVENTAIRE' },

            new inquirer.Separator('-- CHOIX --'),
            { name: 'Oui', value: 'OUI' },
            { name: 'Non', value: 'NON' },
            { name: 'Faire des Bébés', value: 'FAIRE DES BEBES' },

            new inquirer.Separator('-- AUTRE --'),
            { name: 'Aides du jeu', value: 'HELP' },
            { name: 'Statistiques', value: 'STATS' },
            { name: 'Quitter le jeu', value: 'QUIT' },

        ]
    }
]