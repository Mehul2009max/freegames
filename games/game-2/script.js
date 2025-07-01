
const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const scoreDisplay = document.getElementById('score');
const clickBtn = document.getElementById('click-btn');
const clickSound = document.getElementById('click-sound');

let score = 0;

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
    score = 0;
    scoreDisplay.textContent = "Score: 0";
});

clickBtn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
    score++;
    scoreDisplay.textContent = "Score: " + score;
});
