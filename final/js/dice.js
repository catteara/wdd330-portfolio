function d100() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d100Result').innerHTML = 'Your D100 rolled a ' + random(1, 101);
}

function d20() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d20Result').innerHTML = 'Your D20 rolled a ' + random(1, 21);
}

function d12() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d12Result').innerHTML = 'Your D12 rolled a ' + random(1, 13);
}

function d10() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d10Result').innerHTML = 'Your D10 rolled a ' + random(1, 11);
}

function d8() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d8Result').innerHTML = 'Your D8 rolled a ' + random(1, 9);
}

function d6() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d6Result').innerHTML = 'Your D6 rolled a ' + random(1, 7);
}

function d4() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d4Result').innerHTML = 'Your D4 rolled a ' + random(1, 5);
}

function d2() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d2Result').innerHTML = 'Your D2 rolled a ' + random(1, 3);
}