const teams = [
  { name: "Warriors", wins: 5 },
  { name: "Strikers", wins: 3 }
];

const players = [
  { name: "Rajat", team: "Warriors" },
  { name: "Aman", team: "Strikers" }
];

const matches = [
  { team1: "Warriors", team2: "Strikers", result: "Warriors won" }
];

function displayData() {
  const teamList = document.getElementById("team-list");
  teams.forEach(t => {
    teamList.innerHTML += `<div class="card">${t.name} - Wins: ${t.wins}</div>`;
  });

  const playerList = document.getElementById("player-list");
  players.forEach(p => {
    playerList.innerHTML += `<div class="card">${p.name} (${p.team})</div>`;
  });

  const matchList = document.getElementById("match-list");
  matches.forEach(m => {
    matchList.innerHTML += `<div class="card">${m.team1} vs ${m.team2} → ${m.result}</div>`;
  });
}

displayData();