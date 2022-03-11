function calculatePositionMultiplied(course) {
  let position = [0, 0];
  for (let i = 0; i < course.length; i++) {
    let move = course[i].split(' ');
    switch (move[0]) {
      case 'forward':
        position[0] += parseInt(move[1]);
        break;
      case 'down':
        position[1] += parseInt(move[1]);
        break;
      case 'up':
        position[1] -= parseInt(move[1]);
    }
  }
  return position[0] * position[1];
}

function calculatePositionMultipliedWithAim(course) {
  let position = [0, 0, 0];
  for (let i = 0; i < course.length; i++) {
    let move = course[i].split(' ');
    switch (move[0]) {
      case 'forward':
        position[0] += parseInt(move[1]);
        position[1] += position[2] * parseInt(move[1]);
        break;
      case 'down':
        position[2] += parseInt(move[1]);
        break;
      case 'up':
        position[2] -= parseInt(move[1]);
    }
  }
  return position[0] * position[1];
}

const fs = require('fs');
let course = [];
const allFileContents = fs.readFileSync('2.input', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  course.push(line);
});

// console.log(calculatePositionMultiplied(course));
console.log(calculatePositionMultipliedWithAim(course));
