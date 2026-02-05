import React from "react";

function ClientGrid() {
  const clients = [
    { name: "Kuwait National Petroleum Company", location: "Kuwait" },
    { name: "British Petroleum Khazzan", location: "Oman" },
    { name: "Basrah Gas Company", location: "Iraq" },
    { name: "Indian Oil Corporation Limited", location: "India" },
    { name: "Cowi A/S", location: "Qatar" },
    { name: "Petrofac Facilities Management Ltd", location: "UK" },
    { name: "Oman Oil Company", location: "Oman" },
    { name: "Larsen & Toubro", location: "Kuwait" },
    { name: "Tebodin & Partner LLC", location: "Oman" },
    { name: "Exterran Middle East", location: "UAE" },
    { name: "Aker Solutions", location: "Mumbai" },
    { name: "Majan International Petroleum Services", location: "Oman" },
    { name: "Petrofac Engineering India Limited", location: "Mumbai" },
    { name: "Foseco India Limited", location: "India" },
    { name: "Technip Energies", location: "Global" },
    { name: "BAPCO", location: "Bahrain" },
  ];

  return (
    <>
      <style>
        {`
          .clients-section {
            padding: 120px 0;
            background-color: #f8fafc;
            position: relative;
          }

          .clients-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .clients-header {
            text-align: center;
            margin-bottom: 80px;
          }

          .clients-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .client-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            padding: 30px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            transition: all 0.3s ease;
            min-height: 160px;
          }

          .client-card:hover {
            border-color: var(--color-accent-green);
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,51,0.05);
          }

          .client-name {
            font-size: 16px;
            font-weight: 700;
            color: var(--color-primary);
            line-height: 1.4;
            margin-bottom: 10px;
          }

          .client-location {
            font-family: monospace;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--color-accent-green);
            font-weight: 700;
          }

          /* RESPONSIVE */
          @media (max-width: 1100px) {
            .clients-grid { grid-template-columns: repeat(3, 1fr); }
          }

          @media (max-width: 768px) {
            .clients-grid { grid-template-columns: repeat(2, 1fr); }
            .clients-section { padding: 80px 24px; }
          }

          @media (max-width: 480px) {
            .clients-grid { grid-template-columns: 1fr; }
          }
        `}
      </style>

      <section className="clients-section">
        <div className="clients-container">
          <div className="clients-header">
            <span
              style={{
                color: "var(--color-accent-green)",
                fontWeight: "800",
                letterSpacing: "4px",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              Global Partnerships
            </span>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "900",
                color: "var(--color-primary)",
                marginTop: "15px",
                letterSpacing: "-1.5px",
              }}
            >
              Trusted by Industry Leaders
            </h2>
            <p
              style={{
                maxWidth: "700px",
                margin: "20px auto 0",
                color: "#64748b",
                fontSize: "18px",
              }}
            >
              We collaborate with the world’s most demanding energy and
              engineering corporations to deliver technical excellence.
            </p>
          </div>

          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-card">
                <h3 className="client-name">{client.name}</h3>
                <span className="client-location">{client.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientGrid;
