const url = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const matches = data.events;
    const container = document.getElementById("matches");
    container.innerHTML = "";

    if (!matches || matches.length === 0) {
      container.innerHTML = "<p>No upcoming matches found.</p>";
      return;
    }

    matches.forEach(match => {
      const div = document.createElement("div");
      div.className = "match";
      div.innerHTML = `
        <strong>${match.strHomeTeam} vs ${match.strAwayTeam}</strong><br/>
        Date: ${match.dateEvent} | Time: ${match.strTime}
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Fetch error:", error);
    document.getElementById("matches").innerHTML = `<p>Error: ${error.message}</p>`;
  });
