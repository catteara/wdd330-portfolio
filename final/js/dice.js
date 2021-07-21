function d20() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d20Result').innerHTML = random(1, 21);
}

function d12() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d12Result').innerHTML = random(1, 13);
}

function d10() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d10Result').innerHTML = random(1, 11);
}

function d8() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d8Result').innerHTML = random(1, 9);
}

function d6() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d6Result').innerHTML = random(1, 7);
}

function d4() {
    event.preventDefault();
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('d4Result').innerHTML = random(1, 5);
}
