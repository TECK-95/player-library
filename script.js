const canada = document.querySelector(".canada");
const canadaName = canada.appendChild(document.createElement("h4"));
const canadaTeam = canada.appendChild(document.createElement("h4"));
const canadaAge = canada.appendChild(document.createElement("h4"));
const canadaPosition = canada.appendChild(document.createElement("h4"));
const usa = document.querySelector(".usa");
const usaName = usa.appendChild(document.createElement("h4"));
const usaTeam = usa.appendChild(document.createElement("h4"));
const usaAge = usa.appendChild(document.createElement("h4"));
const usaPosition = usa.appendChild(document.createElement("h4"));
const finland = document.querySelector(".finland");
const finlandName = finland.appendChild(document.createElement("h4"));
const finlandTeam = finland.appendChild(document.createElement("h4"));
const finlandAge = finland.appendChild(document.createElement("h4"));
const finlandPosition = finland.appendChild(document.createElement("h4"));
const sweden = document.querySelector(".sweden");
const swedenName = sweden.appendChild(document.createElement("h4"));
const swedenTeam = sweden.appendChild(document.createElement("h4"));
const swedenAge = sweden.appendChild(document.createElement("h4"));
const swedenPosition = sweden.appendChild(document.createElement("h4"));

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