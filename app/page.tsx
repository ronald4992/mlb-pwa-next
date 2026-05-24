const games = [
  {
    home: "Yankees",
    away: "Dodgers",
    homeScore: 7,
    awayScore: 5,
    inning: "8th Inning",
  },
  {
    home: "Red Sox",
    away: "Astros",
    homeScore: 3,
    awayScore: 4,
    inning: "Final",
  },
];

const players = [
  {
    name: "Shohei Ohtani",
    team: "Dodgers",
    position: "Pitcher / DH",
    avg: ".321",
    hr: 44,
    rbi: 98,
  },
  {
    name: "Aaron Judge",
    team: "Yankees",
    position: "Outfielder",
    avg: ".305",
    hr: 52,
    rbi: 110,
  },
  {
    name: "Juan Soto",
    team: "Mets",
    position: "Outfielder",
    avg: ".298",
    hr: 37,
    rbi: 91,
  },
  {
    name: "Mookie Betts",
    team: "Dodgers",
    position: "Shortstop",
    avg: ".289",
    hr: 31,
    rbi: 84,
  },
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>⚾ Baseball League</h1>

          <p>
            Follow live scores, top players and season statistics
            in one modern baseball dashboard.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Live Games</button>
            <button className="secondary-btn">Player Stats</button>
          </div>
        </div>
      </section>

      <section className="games-section">
        <div className="section-title">
          <h2>Live Scoreboard</h2>
          <span>MLB 2026 Season</span>
        </div>

        <div className="games-grid">
          {games.map((game, index) => (
            <div className="game-card" key={index}>
              <div className="inning">{game.inning}</div>

              <div className="team-row">
                <span>{game.home}</span>
                <strong>{game.homeScore}</strong>
              </div>

              <div className="team-row">
                <span>{game.away}</span>
                <strong>{game.awayScore}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="section-title">
          <h2>Top Players</h2>
          <span>Best MLB performers this season</span>
        </div>

        <div className="players-grid">
          {players.map((player, index) => (
            <div className="player-card" key={index}>
              <div className="player-header">
                <div>
                  <h3>{player.name}</h3>

                  <p>
                    {player.team} • {player.position}
                  </p>
                </div>

                <div className="badge">PRO</div>
              </div>

              <div className="stats-grid">
                <div className="stat-box">
                  <span>AVG</span>
                  <strong>{player.avg}</strong>
                </div>

                <div className="stat-box">
                  <span>HR</span>
                  <strong>{player.hr}</strong>
                </div>

                <div className="stat-box">
                  <span>RBI</span>
                  <strong>{player.rbi}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="table-section">
        <div className="section-title">
          <h2>League Standings</h2>
          <span>American League</span>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Win %</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Yankees</td>
                <td>72</td>
                <td>38</td>
                <td>.655</td>
              </tr>

              <tr>
                <td>Astros</td>
                <td>69</td>
                <td>41</td>
                <td>.627</td>
              </tr>

              <tr>
                <td>Red Sox</td>
                <td>64</td>
                <td>46</td>
                <td>.582</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}