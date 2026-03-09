import React from "react";
import { Link } from "react-router-dom";

function CoreServices() {
  const services = [
    {
      id: "01",
      title: "Power System Analysis",
      image:
        "https://www.jeftechno.com/assets/images/blog/Power-System%20Studies.jpg",
      description:
        "Advanced electrical network modeling and system performance studies to ensure stability, safety, and operational efficiency.",
      tags: ["ETAP", "DIgSILENT PowerFactory", "PSCAD"],
    },

    {
      id: "02",
      title: "Electromagnetic Analysis",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
      description:
        "Electromagnetic interference and high voltage interaction studies to evaluate infrastructure impact on nearby systems.",
      tags: ["CDEGS", "PSCAD"],
    },

    {
      id: "03",
      title: "Grounding Analysis",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
      description:
        "Electrical earthing and grounding system engineering to ensure personnel safety and reliable fault current dissipation.",
      tags: ["CDEGS", "Grounding Simulation"],
    },

    {
      id: "04",
      title: "Detail Design Engineering",
      image:
        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
      description:
        "Complete electrical engineering design solutions for substations, power plants, and industrial infrastructure.",
      tags: ["IEC", "IEEE", "NEC"],
    },
  ];

  return (
    <>
      <style>
        {`
          .services-vivid-section {
            padding: 100px 0;
            background-color: #f8fafc;
            position: relative;
          }

          .services-container {
            max-width: 1300px;
            margin: 0 auto;
            padding: 0 30px;
          }

          .services-main-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
          }

          /* Refined Card Design */
          .service-item-card {
            position: relative;
            height: 380px; /* Reduced height to fix the 'too big' issue */
            background: #000033;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,51,0.05);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid rgba(0,0,51,0.05);
          }

          .service-img-layer {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.7;
            transition: transform 0.8s ease;
          }

          .service-gradient {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to bottom, rgba(0,0,51,0.1) 0%, rgba(0,0,51,0.9) 100%);
            z-index: 2;
          }

          /* Content is now always visible but reacts to hover */
          .service-content-box {
            position: absolute;
            bottom: 0; left: 0; width: 100%;
            padding: 25px;
            z-index: 3;
            transition: transform 0.3s ease;
          }

          /* New Hover Effect: Elevate and Glow */
          .service-item-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,51,0.2);
            border-color: var(--color-accent-green);
          }

          .service-item-card:hover .service-img-layer {
            transform: scale(1.08);
            opacity: 0.5;
          }

          .tech-tag-group {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 12px;
          }

          .tech-pill {
            font-family: monospace;
            font-size: 9px;
            color: #ffffff;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(4px);
            padding: 2px 8px;
            border-radius: 4px;
            letter-spacing: 1px;
            border: 1px solid rgba(255,255,255,0.2);
          }

          .service-item-card:hover .tech-pill {
            background: var(--color-accent-green);
            color: #000033;
            border-color: var(--color-accent-green);
          }

          .view-all-btn {
            display: inline-block;
            padding: 16px 40px;
            background: var(--color-primary);
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-decoration: none;
            border-radius: 4px;
            transition: all 0.3s ease;
          }

          .view-all-btn:hover {
            filter: brightness(1.2);
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .services-vivid-section { padding: 60px 0; }
            .services-main-grid { 
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .service-item-card { height: 320px; }
          }
        `}
      </style>

      <section className="services-vivid-section">
        <div className="services-container">
          <div
            style={{
              marginBottom: "50px",
              textAlign: "center",
              margin: "0 auto 50px",
            }}
          >
            <div
              style={{
                color: "var(--color-accent-green)",
                fontSize: "13px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "3px",
                marginBottom: "12px",
              }}
            >
              Core Engineering Expertise
            </div>
            <h2
              style={{
                fontSize: "clamp(35px, 5vw, 42px)",
                fontWeight: "900",
                color: "var(--color-primary)",
                lineHeight: "1.2",
                marginBottom: "20px",
              }}
            >
              Technical Solutions{" "}
              <span style={{ color: "var(--color-accent-green)" }}>
                Without Compromise.
              </span>
            </h2>
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
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#ffffff",
                      marginBottom: "8px",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: "1.5",
                      marginBottom: "0",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/services" className="view-all-btn">
              Explore All Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoreServices;
