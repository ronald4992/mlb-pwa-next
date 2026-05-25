
"use client";

const teams = [
  {
    name: "New York Yankees",
    championships: 27,
    stadium: "Yankee Stadium",
    founded: 1901,
    color: "#1E3A8A",
    logo: "🗽",
  },
  {
    name: "Boston Red Sox",
    championships: 9,
    stadium: "Fenway Park",
    founded: 1901,
    color: "#B91C1C",
    logo: "🧦",
  },
  {
    name: "Los Angeles Dodgers",
    championships: 7,
    stadium: "Dodger Stadium",
    founded: 1883,
    color: "#2563EB",
    logo: "⚾",
  },
  {
    name: "San Francisco Giants",
    championships: 8,
    stadium: "Oracle Park",
    founded: 1883,
    color: "#EA580C",
    logo: "🌉",
  },
  {
    name: "Houston Astros",
    championships: 2,
    stadium: "Minute Maid Park",
    founded: 1962,
    color: "#F97316",
    logo: "🚀",
  },
  {
    name: "Chicago Cubs",
    championships: 3,
    stadium: "Wrigley Field",
    founded: 1876,
    color: "#1D4ED8",
    logo: "🐻",
  },
  {
    name: "Atlanta Braves",
    championships: 4,
    stadium: "Truist Park",
    founded: 1871,
    color: "#DC2626",
    logo: "🪓",
  },
  {
    name: "St. Louis Cardinals",
    championships: 11,
    stadium: "Busch Stadium",
    founded: 1882,
    color: "#EF4444",
    logo: "🐦",
  },
  {
    name: "Philadelphia Phillies",
    championships: 2,
    stadium: "Citizens Bank Park",
    founded: 1883,
    color: "#BE123C",
    logo: "🔔",
  },
  {
    name: "New York Mets",
    championships: 2,
    stadium: "Citi Field",
    founded: 1962,
    color: "#2563EB",
    logo: "🍎",
  },
];

export default function MLBTeamsPage() {
  return (
    <>
      <main className="teams-page">
        <div className="overlay"></div>

        <div className="container">
          <h1 className="main-title">⚾ MLB Teams Hall</h1>

          <p className="subtitle">
            Descubre los equipos más históricos del béisbol profesional.
          </p>

          <div className="teams-grid">
            {teams.map((team) => (
              <div
                key={team.name}
                className="team-card"
                style={{ borderTop: `6px solid ${team.color}` }}
              >
                <div className="team-logo">{team.logo}</div>

                <h2>{team.name}</h2>

                <div className="info-box">
                  <span>🏆 Campeonatos</span>
                  <strong>{team.championships}</strong>
                </div>

                <div className="info-box">
                  <span>🏟️ Estadio</span>
                  <strong>{team.stadium}</strong>
                </div>

                <div className="info-box">
                  <span>📅 Fundación</span>
                  <strong>{team.founded}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .teams-page {
          min-height: 100vh;
          background-image: url("https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1400&auto=format&fit=crop");
          background-size: cover;
          background-position: center;
          position: relative;
          padding: 50px 20px;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(4px);
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: auto;
        }

        .main-title {
          text-align: center;
          color: white;
          font-size: 4rem;
          margin-bottom: 15px;
          text-shadow: 0 0 20px rgba(255,255,255,0.2);
        }

        .subtitle {
          text-align: center;
          color: #d1d5db;
          margin-bottom: 50px;
          font-size: 1.2rem;
        }

        .teams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .team-card {
          background: rgba(15, 23, 42, 0.92);
          border-radius: 24px;
          padding: 30px;
          color: white;
          transition: 0.35s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .team-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(30, 41, 59, 0.98);
        }

        .team-logo {
          font-size: 4rem;
          margin-bottom: 20px;
          text-align: center;
        }

        .team-card h2 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 1.7rem;
        }

        .info-box {
          background: rgba(51, 65, 85, 0.7);
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .info-box span {
          color: #d1d5db;
          font-size: 0.95rem;
        }

        .info-box strong {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.7rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .team-card {
            padding: 22px;
          }
        }
      `}</style>
    </>
  );
}

