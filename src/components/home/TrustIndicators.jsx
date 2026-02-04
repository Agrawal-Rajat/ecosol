import React from "react";

function TrustIndicators() {
  return (
    <>
      <style>
        {`
          .stat-card {
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .stat-card:hover {
            background-color: #ffffff !important;
            transform: translateY(-8px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important;
          }
          
          @media (max-width: 1024px) {
            .trust-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              /* Reduced overlap for tablets */
              margin-top: -40px !important; 
            }
            .stat-card {
              border: 1px solid #f1f5f9 !important;
              padding: 50px 20px !important;
            }
          }

          @media (max-width: 600px) {
            .trust-grid {
              grid-template-columns: 1fr !important;
              /* Remove overlap completely on mobile for better spacing */
              margin-top: 20px !important; 
              box-shadow: none !important;
              border: 1px solid #f1f5f9 !important;
            }
            .stat-value {
              font-size: 38px !important;
            }
            .trust-section {
                /* Extra padding on mobile to separate from Hero buttons */
                padding: 40px 20px 80px 20px !important; 
            }
          }
        `}
      </style>

      <section className="trust-section" style={styles.section}>
        <div style={styles.container}>
          <div className="trust-grid" style={styles.grid}>
            <StatItem value="20+" label="Years Team Experience" />
            <StatItem value="400 kV" label="Substation Projects" />
            <StatItem value="700 MVA" label="Plant Capacity Handled" />
            <StatItem value="Global" label="Project Footprint" />
          </div>
        </div>
      </section>
    </>
  );
}

function StatItem({ value, label }) {
  return (
    <div className="stat-card" style={styles.item}>
      <div className="stat-value" style={styles.value}>
        {value}
      </div>
      <div style={styles.accentLine} />
      <div style={styles.label}>{label}</div>
    </div>
  );
}

const styles = {
  section: {
    backgroundColor: "var(--color-bg)",
    /* Increased top and bottom padding for more breathing room */
    padding: "40px 0 120px 0",
    position: "relative",
    zIndex: 10,
  },
  container: {
    maxWidth: "var(--container-width)",
    margin: "0 auto",
    padding: "0 60px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    backgroundColor: "#ffffff",
    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)",
    /* Controlled overlap - adjust this value if it still feels too close */
    marginTop: "-80px",
    borderRadius: "4px",
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,0.03)",
  },
  item: {
    padding: "80px 40px",
    textAlign: "center",
    borderRight: "1px solid #f1f5f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  value: {
    fontSize: "52px",
    fontWeight: "800",
    color: "var(--color-primary)",
    marginBottom: "12px",
    letterSpacing: "-2px",
  },
  accentLine: {
    width: "45px",
    height: "4px",
    backgroundColor: "var(--color-accent-green)",
    marginBottom: "20px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "2px",
    lineHeight: "1.6",
    maxWidth: "200px",
  },
};

export default TrustIndicators;
