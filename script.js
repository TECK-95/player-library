const canada = document.querySelector(".canada");
const canadaData = document.querySelector(".canada-data")
const usa = document.querySelector(".usa");
const usaData = document.querySelector(".usa-data")
const finland = document.querySelector(".finland");
const finlandData = document.querySelector(".finland-data")
const sweden = document.querySelector(".sweden");
const swedenData = document.querySelector(".sweden-data")

const dialog = document.querySelector("dialog");
const addPlayerBtn = document.querySelector("#add-player");
const cancelAddPlayerBtn = document.querySelector("#cancel");
const form = document.querySelector("form");

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

function ForwardStats(goals, assists) {
    this.goals = goals;
    this.assists = assists;
}

function GoalieStats(wins, shutouts) {
    this.wins = wins;
    this.shutouts = shutouts;
}

Object.getPrototypeOf(ForwardStats.prototype);
Object.setPrototypeOf(ForwardStats.prototype, Player.prototype);
Object.getPrototypeOf(ForwardStats.prototype);

Object.getPrototypeOf(GoalieStats.prototype);
Object.setPrototypeOf(GoalieStats.prototype, Player.prototype);
Object.getPrototypeOf(GoalieStats.prototype);

form.onsubmit = () => {
    let firstName = document.querySelector("#first-name");
    firstName = firstName.value;
    let lastName = document.querySelector("#last-name");
    lastName = lastName.value;
    let name = firstName + " " + lastName;
    let country = document.querySelector("#country");
    country = country.value;
    let team = document.querySelector("#team");
    team = team.value;
    let age = document.querySelector("#age");
    age = age.value;
    let position = document.querySelector("#position");
    position = position.value;
    let goals = document.querySelector("#goals");
    goals = goals.value;
    let assists = document.querySelector("#assists");
    assists = assists.value;
    let wins = document.querySelector("#wins");
    wins = wins.value;
    let shutouts = document.querySelector("#shutouts");
    shutouts = shutouts.value;
    const player = new Player(firstName, lastName, country, team, age, position);
    player.goals = goals;
    player.assists = assists
    let points = goals + assists;
    player.wins = wins;
    player.shutouts = shutouts;
    playerLibrary.push(player);
    const dataBlock = document.createElement("div");
    const nameDisplay = document.createElement("h4");
    const teamDisplay = document.createElement("h4");
    const ageDisplay = document.createElement("h4");
    const positionDisplay = document.createElement("h4");
    const statsDisplay = document.createElement("h4");
    if (country === "Canada") {
        dataBlock.classList.add("data-block");
        canadaData.appendChild(dataBlock);
    } else if (country === "USA") {
        dataBlock.classList.add("data-block");
        usaData.appendChild(dataBlock);
    } else if (country === "Finland") {
        dataBlock.classList.add("data-block");
        finlandData.appendChild(dataBlock);
    } else {
        dataBlock.classList.add("data-block");
        swedenData.appendChild(dataBlock);
    }
    dataBlock.appendChild(nameDisplay);
    dataBlock.appendChild(teamDisplay);
    dataBlock.appendChild(ageDisplay);
    dataBlock.appendChild(positionDisplay);
    dataBlock.appendChild(statsDisplay);
    nameDisplay.textContent = "Name: " + name;
    teamDisplay.textContent = "Team: " + team;
    ageDisplay.textContent = "Age: " + age;
    if (position === "Goalie") {
        positionDisplay.textContent = "Position: " + position;
        statsDisplay.textContent = `Stats: ${wins}W, ${shutouts}SO`;
    } else {
        positionDisplay.textContent = position;
        statsDisplay.textContent = `Stats: ${goals}G, ${assists}A`;
    }
    form.reset();
    dialog.close();
    return false;
};