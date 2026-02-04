import React from "react";

function ClientsGrid() {
  const clients = [
    { name: "Oil & Gas Majors", icon: "⚓" },
    { name: "Global EPC Contractors", icon: "🏗️" },
    { name: "Utility Companies", icon: "⚡" },
    { name: "Petrochemical Operators", icon: "🧪" },
    { name: "Industrial Plant Owners", icon: "🏭" },
    { name: "Renewable Developers", icon: "☀️" },
  ];

  return (
    <>
      <style>
        {`
          .clients-section {
            background-color: #00001a;
            padding: 100px 0;
            position: relative;
            border-top: 1px solid rgba(68, 158, 29, 0.1);
          }

          .client-tile {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
            transition: all 0.4s ease;
            filter: grayscale(100%);
            opacity: 0.6;
          }

          .client-tile:hover {
            background: rgba(68, 158, 29, 0.05);
            border-color: var(--color-accent-green);
            filter: grayscale(0%);
            opacity: 1;
            transform: translateY(-5px);
          }

          .client-icon {
            font-size: 28px;
            margin-bottom: 5px;
          }

          .client-name {
            font-size: 13px;
            font-weight: 700;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            text-align: center;
          }

          @media (max-width: 1024px) {
            .client-grid-wrapper { grid-template-columns: repeat(3, 1fr) !important; }
          }

          @media (max-width: 768px) {
            .client-grid-wrapper { grid-template-columns: repeat(2, 1fr) !important; }
            .client-heading { font-size: 36px !important; }
          }

          @media (max-width: 480px) {
            .client-grid-wrapper { grid-template-columns: 1fr !important; }
          }
        `}
      </style>

      <section className="clients-section">
        <div
          style={{
            maxWidth: "var(--container-width)",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div
              style={{
                color: "var(--color-accent-green)",
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "3px",
                marginBottom: "15px",
              }}
            >
              Trusted Partnerships
            </div>
            <h2
              className="client-heading"
              style={{
                fontSize: "42px",
                fontWeight: "800",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Clients & Collaborations
            </h2>
            <div
              style={{
                width: "50px",
                height: "3px",
                backgroundColor: "var(--color-accent-green)",
                margin: "0 auto",
              }}
            />
          </div>

          <div
            className="client-grid-wrapper"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "1px",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            {clients.map((client, index) => (
              <div key={index} className="client-tile">
                <span className="client-icon">{client.icon}</span>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: "40px",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
              textAlign: "center",
              fontStyle: "italic",
              maxWidth: "700px",
              margin: "40px auto 0",
            }}
          >
            * Client references are indicative and presented in compliance with
            international confidentiality agreements.
          </p>
        </div>
      </section>
    </>
  );
}

export default ClientsGrid;
