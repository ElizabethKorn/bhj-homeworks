getHole = (index) => document.getElementById(`hole${index}`);
const dead = document.getElementById("dead");
const miss = document.getElementById("lost");
let scoreDead = 0;
let scoreLost = 0;

function resetGame() {
  scoreDead = 0;
  scoreLost = 0;
  dead.textContent = scoreDead;
  miss.textContent = scoreLost;
}

function handleHoleClick(index) {
  let hole = getHole(index);
  if (hole.className.includes("hole_has-mole")) {
    scoreDead++;
    dead.textContent = scoreDead;
    if (scoreDead === 10) {
      alert("Congratulations! You have won the game.");
      resetGame();
    }
  } else {
    scoreLost++;
    miss.textContent = scoreLost;
    if (scoreLost === 5) {
      alert("Game Over! You have lost the game.");
      resetGame();
    }
  }
}

for (let i = 1; i < 10; i++) {
  let hole = getHole(i);
  hole.onclick = () => handleHoleClick(i);
}
