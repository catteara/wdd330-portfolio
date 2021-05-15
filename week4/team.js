const board = document.getElementById('ttt');
const reset = document.getElementById('reset');
const playerOne = '&#10006';
const playerTwo = '&#9711';

let player = playerOne; 

function turn(e) {
    e.target.innerHTML = player;
    if (player === playerOne) player = playerTwo;
    else player = playerOne;
}

function restart() {
    for (let i = 0; i < board.children.length; i++) {
        board.children[i].innerText = '';
      }
  }

  board.addEventListener('click', turn);
  reset.addEventListener('click', restart);