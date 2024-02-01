function makeSpaceLine(numSpaces, numChars) {
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
    for (let i = 0; i < numChars; i++) {
        line += '#';
    }
    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
    return line;
}

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, i*2 + 1) + '\n')
    }
    return triangle.slice(0, -1);
}

function makeNubs(height) {
    let nubs = '';
    for (let i = 1; i < height; i++) {
        nubs += makeSpaceLine(height - i - 1, i*2 + 1) + ' ' + makeSpaceLine(height - i - 1, i*2 + 1) + '\n'
    }
    return nubs.slice(0,-1);
}


function reverse(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

function makeHeart(height) {
    let heart = '';
    if (height === 1) {
        heart = '<3'
    } else {
        heart += makeNubs(height) + '\n' + reverse(makeIsoscelesTriangle(height * 2));
    }
    return heart;
}


function runProgram() {
    const input = require('readline-sync');
    let heartSize = Number(input.question('How big is your heart? '));
    while (heartSize < 1 || heartSize > 10 || Number.isInteger(heartSize) == false) {
        console.log('Heart size must be an integer between 1 and 10.');
        heartSize = Number(input.question('How big is your heart? '));
    }
    return makeHeart(heartSize);
}


console.log(runProgram());


