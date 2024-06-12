const canada = document.querySelector(".canada");
const usa = document.querySelector(".usa");
const finland = document.querySelector(".finland");
const sweden = document.querySelector(".sweden");

const dialog = document.querySelector("dialog");
const addPlayerBtn = document.querySelector("#add-player");
const cancelAddPlayerBtn = document.querySelector("#cancel");

addPlayerBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelAddPlayerBtn.addEventListener("click", () => {
    dialog.close();
  });

const playerLibrary = [];

function Player(first, last, country, team, age, position) {
    this.first = first;
    this.last = last;
    this.country = country;
    this.team = team;
    this.age = age;
    this.position = position;
}

function Stats(goals, assists) {
    this.goals = goals;
    this.assists = assists;
}

Object.getPrototypeOf(Stats.prototype);
Object.setPrototypeOf(Stats.prototype, Player.prototype);
Object.getPrototypeOf(Stats.prototype);