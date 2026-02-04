import React from "react";

function CoreServices() {
  const services = [
    {
      id: "01",
      title: "Electrical Design Engineering",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      description:
        "Comprehensive electrical design for utility-scale industrial projects and specialized solar power plant layouts.",
    },
    {
      id: "02",
      title: "Power System Studies",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      description:
        "Advanced load flow, short circuit analysis, protection coordination, and stability studies for complex grids.",
    },
    {
      id: "03",
      title: "Solar & Renewable Engineering",
      image:
        "https://images.unsplash.com/photo-1509391366360-fe5bb6583e29?auto=format&fit=crop&q=80&w=800",
      description:
        "End-to-end conceptual and detailed engineering for large-scale Solar PV, hybrid systems, and battery storage.",
    },
    {
      id: "04",
      title: "Protection & Safety Studies",
      image:
        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
      description:
        "Specialized relay configuration, arc flash analysis, and safety mitigation to ensure global standard compliance.",
    },
  ];

  return (
    <>
      <style>
        {`
          .service-card {
            transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end; /* Align content to bottom */
            min-height: 450px;
            color: #ffffff;
            border-radius: 4px;
          }

          .card-bg {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover;
            background-position: center;
            transition: transform 0.6s ease;
            z-index: 1;
          }

          /* Dark gradient overlay for text legibility */
          .card-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to bottom, rgba(0,0,102,0.1) 0%, rgba(0,0,51,0.9) 100%);
            z-index: 2;
            transition: background 0.4s ease;
          }

          .card-content {
            position: relative;
            z-index: 3;
            padding: 40px 30px;
          }

          .service-card:hover .card-bg {
            transform: scale(1.1);
          }

          .service-card:hover .card-overlay {
            background: linear-gradient(to bottom, rgba(68,158,29,0.2) 0%, rgba(0,0,51,1) 100%);
          }

          /* Mobile Slider Logic */
          @media (max-width: 768px) {
            .services-grid {
              display: flex !important; /* Switch to Flex for sliding */
              overflow-x: auto !important; /* Enable horizontal scroll */
              scroll-snap-type: x mandatory;
              gap: 20px !important;
              padding: 20px 0 40px 0 !important;
              -webkit-overflow-scrolling: touch;
            }
            
            .services-grid::-webkit-scrollbar {
              height: 4px;
            }
            .services-grid::-webkit-scrollbar-thumb {
              background: var(--color-accent-green);
              border-radius: 10px;
            }

            .service-card {
              flex: 0 0 85%; /* Card width on mobile */
              scroll-snap-align: center;
              min-height: 400px;
            }
          }

          @media (min-width: 769px) {
            .services-grid {
              display: grid !important;
              grid-template-columns: repeat(4, 1fr) !important;
              gap: 30px;
            }
          }
        `}
      </style>

      <section className="services-section" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.headerArea}>
            <div style={styles.badge}>Our Expertise</div>
            <h2 className="services-heading" style={styles.heading}>
              Core Engineering Services
            </h2>
            <div style={styles.headingUnderline} />
            <p style={styles.subtext}>
              Delivering specialized electrical power engineering solutions with
              technical precision and adherence to global safety standards.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div
                  className="card-bg"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="card-overlay" />

                <div className="card-content">
                  <div style={styles.serviceId}>{service.id}</div>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                  <p style={styles.cardText}>{service.description}</p>
                  <div style={styles.cardFooter}>
                    <span style={styles.learnMore}>
                      Technical Specifications →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  section: {
    backgroundColor: "#ffffff",
    padding: "100px 0",
  },
  container: {
    maxWidth: "var(--container-width)",
    margin: "0 auto",
    padding: "0 40px",
  },
  headerArea: { marginBottom: "60px" },
  badge: {
    color: "var(--color-accent-green)",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "16px",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "800",
    color: "var(--color-primary)",
    marginBottom: "20px",
    letterSpacing: "-1px",
  },
  headingUnderline: {
    width: "60px",
    height: "4px",
    backgroundColor: "var(--color-accent-green)",
    marginBottom: "30px",
  },
  subtext: {
    fontSize: "17px",
    color: "#64748b",
    maxWidth: "650px",
    lineHeight: "1.7",
  },
  serviceId: {
    fontSize: "14px",
    fontWeight: "800",
    color: "var(--color-accent-green)",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "15px",
    lineHeight: "1.3",
  },
  cardText: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.8)",
    lineHeight: "1.6",
    marginBottom: "25px",
  },
  cardFooter: {
    paddingTop: "15px",
    borderTop: "1px solid rgba(255,255,255,0.2)",
  },
  learnMore: {
    fontSize: "11px",
    fontWeight: "700",
    color: "var(--color-accent-green)",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

export default CoreServices;
