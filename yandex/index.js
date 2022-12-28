import {main} from './sprint4/solutions/yakunin/G.js';
import {CONSOLE_COLORS} from './helpers/colors.js'

console.time('solution');
console.log(`${CONSOLE_COLORS.FgYellow}%s${CONSOLE_COLORS.Reset}`, 'start solution...');

const myArgs = process.argv.slice(2);
console.log(myArgs);
main()

console.log(`${CONSOLE_COLORS.FgYellow}%s${CONSOLE_COLORS.FgBlue}`, 'solution resolved.');
console.timeEnd('solution');
console.log(`${CONSOLE_COLORS.Reset}`, '');

// @TODO: add input, output as args + script for node
// const yargs = require('yargs');
//
// const argv = yargs
//     .command('lyr', 'Tells whether an year is leap year or not', {
//         year: {
//             description: 'the year to check for',
//             alias: 'y',
//             type: 'number'
//         }
//     })
//     .option('time', {
//         alias: 't',
//         description: 'Tell the present Time',
//         type: 'boolean'
//     })
//     .help()
//     .alias('help', 'h').argv;
//
// if (argv.time) {
//     console.log('The current time is: ', new Date().toLocaleTimeString());
// }
//
// if (argv._.includes('lyr')) {
//     const year = argv.year || new Date().getFullYear();
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         console.log(`${year} is a Leap Year`);
//     } else {
//         console.log(`${year} is NOT a Leap Year`);
//     }
// }
//
// console.log(argv);
