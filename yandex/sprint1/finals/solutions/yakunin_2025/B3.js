/**
 * DeepSeek
 */

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const k = parseInt(input[0]);
const grid = input.slice(1, 5);

function solve(k, grid) {
    const count = new Array(10).fill(0);

    // Подсчитываем количество каждой цифры на поле
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const char = grid[i][j];
            if (char !== '.') {
                const digit = parseInt(char);
                count[digit]++;
            }
        }
    }

    let points = 0;
    const maxPresses = 2 * k; // Каждый игрок может нажать k клавиш

    // Проверяем для каждой цифры от 1 до 9
    for (let t = 1; t <= 9; t++) {
        if (count[t] > 0 && count[t] <= maxPresses) {
            points++;
        }
    }

    return points;
}

console.log(solve(k, grid));