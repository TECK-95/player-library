const addPlayerBtn = document.querySelector("#add-player");
const canada = document.querySelector(".canada");
const usa = document.querySelector(".usa");
const finland = document.querySelector(".finland");
const sweden = document.querySelector(".sweden");

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

const player1 = new Player("Sidney", "Crosby", "Canada", "Pittsburgh Penguins", 37, "Center");
player1.goals = 42;
player1.assists = 52;

const fullName = canada.appendChild(document.createElement("h4"));
fullName.textContent = player1.first + player1.last;