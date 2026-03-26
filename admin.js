function addTeam() {
  const name = document.getElementById("teamName").value;
  localStorage.setItem("newTeam", name);
  alert("Team Added!");
}