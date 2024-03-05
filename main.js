const scoreSpan = document.getElementById('score');
const gameContainer = document.getElementById('game-container');
const startButton = document.getElementById('start-button');

let score = 0;
let isGameRunning = false;

function createHole(holeNumber) {
  const hole = document.createElement('div');
  hole.classList.add('hole');
  hole.dataset.holeNumber = holeNumber;
  const moleImg = document.createElement('img');
  moleImg.classList.add('mole');
  moleImg.src = "mole.png"; // Replace with your mole image path
  hole.appendChild(moleImg);
  gameContainer.appendChild(hole);

  hole.addEventListener('click', function() {
    if (isGameRunning && this.querySelector('.mole').style.display === 'block') {
      score++;
      scoreSpan.textContent = score;
      this.querySelector('.mole').style.display = 'none';
    }
  });
}

function popUpMole() {
  const randomHole = Math.floor(Math.random() * 16); // Assuming 16 holes (4x4 grid)
  const hole = document.querySelector(`[data-hole-number="${randomHole}"]`);
  const mole = hole.querySelector('.mole');
  mole.style.display = 'block';
  setTimeout(() => {
    mole.style.display = 'none';
    if (isGameRunning) popUpMole(); // Call again if game is running
  }, 1000); // Mole pops up for 1 second
}

function startGame() {
  isGameRunning = true;
  score = 0;
  scoreSpan.textContent = score;
  popUpMole();
  startButton.disabled = true; // Disable start button during game
}

startButton.addEventListener('click', startGame);

// Create the mole holes (adjust the number for a different grid size)
