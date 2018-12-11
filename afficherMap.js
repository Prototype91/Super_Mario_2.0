module.exports = function afficher_map() {
        tbl = [
            ['P', 'J', '9', '2', '1'],
            ['B', '_', '_', '_', 'L'],
            ['2', '_', '2', 'N', '_'],
            ['_', 'A', '_', '_', '_'],
            ['2', '_', '_', 'E', 'O'],
            ['L', '_', '_', '_', '_'],
            ['_', 'C', 'T', 'M', '9'],
            ['1', '_', '_', '_', '1'],
        ];

        const ennemies = ['B', 'J', 'O', 'T'];

        const joueur = require("./Super_Mario_Final");

        const chalk = require('chalk');

        console.log('\n')
        for (let y = 0; y < tbl.length; y++) {
            let line = '';
            for (let x = 0; x < tbl[y].length; x++) {

                if (x === joueur.x && y === joueur.y)
                    line += chalk.cyan('  W  ');
                else if (ennemies.includes(tbl[y][x]))
                    line += '  ' + chalk.red(tbl[y][x]) + '  ';
                else if (tbl[y][x] === 'P')
                    line += '  ' + chalk.magenta(tbl[y][x]) + '  ';
                else
                    line += '  ' + tbl[y][x] + '  ';

            }
            console.log(line);
        }
        console.log('\n');

    }