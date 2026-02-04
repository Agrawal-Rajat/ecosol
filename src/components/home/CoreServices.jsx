import React from "react";
import { Link } from "react-router-dom";

function CoreServices() {
  const services = [
    {
      id: "01",
      title: "Power System Studies",
      image:
        "https://images.unsplash.com/photo-1558444479-c8f010523282?auto=format&fit=crop&q=80&w=1200",
      description:
        "Advanced load flow, short circuit analysis, and grid stability studies using industry-standard computational modeling.",
      tags: ["ETAP", "PSS/E", "DIGSILENT"],
    },
    {
      id: "02",
      title: "Protection & Safety",
      image:
        "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=1200",
      description:
        "Relay configuration, protection coordination, and specialized Arc Flash mitigation to ensure global compliance.",
      tags: ["IEEE", "IEC", "NFPA"],
    },
    {
      id: "03",
      title: "Renewable Integration",
      image:
        "https://images.unsplash.com/photo-1509391366360-fe5bb6583e29?auto=format&fit=crop&q=80&w=1200",
      description:
        "Detailed engineering for utility-scale Solar PV, hybrid systems, and battery energy storage (BESS).",
      tags: ["SOLAR", "WIND", "BESS"],
    },
    {
      id: "04",
      title: "Substations & Grounding",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
      description:
        "Comprehensive design for high-voltage substations and complex grounding system EMI analysis.",
      tags: ["400KV", "GIS", "EMC"],
    },
  ];

  return (
    <>
      <style>
        {`
          .services-vivid-section {
            padding: 140px 0;
            background-color: #ffffff;
            position: relative;
            overflow: hidden;
          }

          /* Global Architectural Grid Background */
          .services-vivid-section::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: radial-gradient(#e2e8f0 1.2px, transparent 1.2px);
            background-size: 45px 45px;
            opacity: 0.6;
            pointer-events: none;
          }

          .services-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          .services-main-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-bottom: 60px;
          }

          .service-item-card {
            position: relative;
            height: 520px;
            background: #000033;
            overflow: hidden;
            border-radius: 2px;
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          }

          .service-img-layer {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.6;
            transition: transform 1.2s ease, opacity 0.6s ease;
          }

          .service-gradient {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to bottom, rgba(0,0,51,0) 20%, rgba(0,0,51,0.95) 95%);
            z-index: 2;
          }

          .service-content-box {
            position: absolute;
            bottom: 0; left: 0; width: 100%;
            padding: 40px 30px;
            z-index: 3;
            transform: translateY(65px);
            transition: transform 0.4s ease;
          }

          .service-item-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 40px 80px rgba(0,0,51,0.2);
          }

          .service-item-card:hover .service-img-layer {
            transform: scale(1.1);
            opacity: 0.8;
          }

          .service-item-card:hover .service-content-box {
            transform: translateY(0);
          }

          .tech-tag-group {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 20px;
            opacity: 0;
            transition: opacity 0.4s ease 0.2s;
          }

          .service-item-card:hover .tech-tag-group {
            opacity: 1;
          }

          .tech-pill {
            font-family: monospace;
            font-size: 10px;
            color: #ffffff;
            background: var(--color-accent-green);
            padding: 3px 10px;
            letter-spacing: 1px;
            font-weight: 700;
          }

          .view-all-btn {
            display: inline-block;
            padding: 18px 45px;
            background: transparent;
            border: 2px solid var(--color-primary);
            color: var(--color-primary);
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .view-all-btn:hover {
            background: var(--color-primary);
            color: #ffffff;
          }

          /* MOBILE HORIZONTAL SCROLL LOGIC */
          @media (max-width: 1024px) {
            .services-main-grid { 
              grid-template-columns: repeat(2, 1fr); 
            }
          }

          @media (max-width: 768px) {
            .services-vivid-section { padding: 80px 0; }
            .services-container { padding: 0 24px; }
            
            .services-main-grid { 
              display: flex; 
              overflow-x: auto; 
              scroll-snap-type: x mandatory; 
              gap: 16px;
              padding: 0 0 40px 0;
              margin: 0 -24px 20px -24px;
              padding-left: 24px;
              -webkit-overflow-scrolling: touch;
            }

            /* Hide scrollbar but allow scrolling */
            .services-main-grid::-webkit-scrollbar { display: none; }

            .service-item-card { 
              flex: 0 0 82%; 
              scroll-snap-align: start; 
              height: 500px;
            }
            
            .service-content-box { 
              transform: translateY(0);
              padding: 30px 20px;
            }
            
            .tech-tag-group { opacity: 1; }
            .view-all-btn { width: 100%; text-align: center; }
          }
        `}
      </style>

      <section className="services-vivid-section">
        <div className="services-container">
          <div style={{ marginBottom: "60px", maxWidth: "800px" }}>
            <div
              style={{
                color: "var(--color-accent-green)",
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "4px",
                marginBottom: "16px",
              }}
            >
              Core Engineering Expertise
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 8vw, 52px)",
                fontWeight: "900",
                color: "var(--color-primary)",
                lineHeight: "1.1",
                letterSpacing: "-2px",
                marginBottom: "24px",
              }}
            >
              Technical Solutions <br />
              <span style={{ color: "var(--color-accent-green)" }}>
                Without Compromise.
              </span>
            </h2>
            <p
              style={{ fontSize: "17px", color: "#64748b", lineHeight: "1.7" }}
            >
              Delivering specialized electrical power engineering services with
              absolute technical precision and compliance to global standards.
            </p>
          </div>

          <div className="services-main-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item-card">
                <div
                  className="service-img-layer"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="service-gradient" />
                <div className="service-content-box">
                  <div className="tech-tag-group">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "#ffffff",
                      marginBottom: "12px",
                      lineHeight: "1.2",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                    }}
                  >
                    {service.description}
                  </p>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: "800",
                      color: "var(--color-accent-green)",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Ref_id: Tech_00{index + 1} //
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/services" className="view-all-btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoreServices;
