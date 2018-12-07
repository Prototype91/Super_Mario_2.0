const inquirer = require('inquirer')

module.exports = [
    {
        type: 'list',
        name: 'Orientation',
        message: 'Que souhaitez-vous faire ?',
        choices: [
            { name: 'Déplacement Nord', value: 'N'},
            { name: 'Déplacement Sud', value: 'S'},
            { name: 'Déplacement Est', value: 'E' },
            { name: 'Déplacement Ouest', value: 'O' },
            new inquirer.Separator('-- Déplacements latéraux --'),
            { name: 'Déplacement Nord-Est', value: 'NE' },
            { name: 'Déplacement Nord-Ouest', value: 'NO' },
            { name: 'Déplacement Sud-Est', value: 'SE' },
            { name: 'Déplacement Sud-Ouest', value: 'SO' },
        ]
    }
]