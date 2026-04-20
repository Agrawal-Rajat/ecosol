import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div
        style={{
          padding: "120px 24px",
          textAlign: "center",
          fontFamily: "var(--font-primary)",
          backgroundColor: "var(--color-bg-white)",
        }}
      >
        <h2
          style={{
            color: "var(--color-logo-navy)",
            fontWeight: 900,
            fontSize: "42px",
          }}
        >
          404: MODULE_NOT_FOUND
        </h2>
        <p style={{ color: "var(--color-steel-grey)" }}>
          The requested engineering module could not be located in the current
          project database.
        </p>
      </div>
    );
  }

  const getIllustration = (slug) => {
    const images = {
      "power-system-analysis":
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600",
      "electromagnetic-analysis":
        "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1600",
      "grounding-analysis":
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600",
      "engineering-software-capabilities":
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600",
      "detail-design-engineering":
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600",
      "procurement-assistance":
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1600",
      "third-party-inspection":
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600",
    };
    return (
      images[slug] ||
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600"
    );
  };

  const heroImage = getIllustration(slug);

  return (
    <>
      <style>
        {`
          .ecosol-detail-scope {
            background-color: var(--color-bg-white);
            font-family: var(--font-primary);
            color: var(--color-logo-navy);
          }

          .ecosol-detail-scope .container-tight {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 32px;
            position: relative;
            z-index: 5;
          }

          /* --- ENGINEERING HERO --- */
          .ecosol-detail-scope .hero-split-section {
            position: relative;
            height: 62vh;
            min-height: 460px;
            background-image: url('${heroImage}');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          /* Technical Grid Overlay */
          .ecosol-detail-scope .hero-split-section::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 2;
          }

          .ecosol-detail-scope .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, 
              rgba(11, 17, 32, 0.98) 0%, 
              rgba(11, 17, 32, 0.85) 40%, 
              rgba(11, 17, 32, 0.2) 100%);
            z-index: 1;
          }

          .ecosol-detail-scope .hero-info-text {
            max-width: 850px;
            z-index: 10;
            position: relative;
          }

          .ecosol-detail-scope .hero-title-main {
            font-size: clamp(38px, 6vw, 68px);
            font-weight: 900;
            line-height: 1.05;
            letter-spacing: -3px;
            margin: 12px 0;
            color: #ffffff;
            text-transform: uppercase;
          }

          .ecosol-detail-scope .hero-description {
            font-size: 18px;
            line-height: 1.65;
            color: rgba(255, 255, 255, 0.8);
            border-left: 4px solid var(--color-electric-blue);
            padding-left: 24px;
            max-width: 650px;
          }

          /* --- DATA STRIPS --- */
          .ecosol-detail-scope .data-strip {
            padding: 64px 0;
            position: relative;
            border-bottom: 1px solid var(--color-bg-light-grey);
            background-image: radial-gradient(var(--color-bg-light-grey) 1px, transparent 1px);
            background-size: 40px 40px;
          }

          .ecosol-detail-scope .strip-muted { background: #fcfdfe; }

          .ecosol-detail-scope .layout-grid-compact {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 36px;
          }

          .ecosol-detail-scope .sidebar-label-bold {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 4px;
            position: sticky;
            top: 96px;
            height: fit-content;
          }

          .ecosol-detail-scope .text-content-rich {
            font-size: 18px;
            line-height: 1.7;
            color: var(--color-text-main);
            font-weight: 400;
          }

          /* --- CARDS --- */
          .ecosol-detail-scope .card-grid-tight {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 18px;
          }

          .ecosol-detail-scope .minimal-data-card {
            background: #ffffff;
            padding: 30px;
            border: 1px solid var(--color-bg-light-grey);
            border-top: 4px solid var(--color-logo-navy);
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            position: relative;
          }

          .ecosol-detail-scope .minimal-data-card:hover {
            transform: translateY(-8px);
            border-top-color: var(--color-electric-blue);
            box-shadow: 0 20px 40px rgba(11, 17, 32, 0.06);
          }

          .ecosol-detail-scope .tag-industrial-heavy {
            padding: 10px 14px;
            background: var(--color-logo-navy);
            color: #ffffff;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin: 0 8px 8px 0;
            display: inline-block;
            border-radius: 2px;
          }

          .ecosol-detail-scope .background-num-watermark {
            position: absolute;
            font-size: 150px;
            font-weight: 900;
            color: rgba(11, 17, 32, 0.03);
            right: 40px;
            bottom: -10px;
            pointer-events: none;
            line-height: 1;
          }

          @media (max-width: 900px) {
            .ecosol-detail-scope .hero-split-section { height: 60vh; background-attachment: scroll; }
            .ecosol-detail-scope .hero-overlay { background: rgba(11, 17, 32, 0.92); }
            .ecosol-detail-scope .hero-description { border-left-width: 3px; padding-left: 20px; font-size: 17px; }
            .ecosol-detail-scope .layout-grid-compact { grid-template-columns: 1fr; gap: 24px; }
            .ecosol-detail-scope .sidebar-label-bold { position: static; margin-bottom: 10px; }
            .ecosol-detail-scope .container-tight { padding: 0 24px; }
            .ecosol-detail-scope .data-strip { padding: 52px 0; }
          }
        `}
      </style>

      <div className="ecosol-detail-scope">
        {/* HERO SECTION */}
        <header className="hero-split-section">
          <div className="hero-overlay" />
          <div className="container-tight">
            <div className="hero-info-text">
              <span
                style={{
                  color: "var(--color-electric-blue)",
                  fontWeight: 800,
                  letterSpacing: "5px",
                  fontSize: "11px",
                }}
              >
                TECHNICAL SPECIFICATION // 2026
              </span>
              <h1 className="hero-title-main">{service.title}</h1>
              <p className="hero-description">{service.heroText}</p>
            </div>
          </div>
        </header>

        {/* 01 OVERVIEW */}
        <section className="data-strip">
          <div className="background-num-watermark">01</div>
          <div className="container-tight">
            <div className="layout-grid-compact">
              <div className="sidebar-label-bold">Consultancy Overview</div>
              <p className="text-content-rich">{service.overview}</p>
            </div>
          </div>
        </section>

        {/* 02 OPERATIONAL SCOPE */}
        <section className="data-strip strip-muted">
          <div className="background-num-watermark">02</div>
          <div className="container-tight">
            <div className="layout-grid-compact">
              <div className="sidebar-label-bold">Service Scope</div>
              <div className="card-grid-tight">
                {service.scope.map((item, i) => (
                  <div key={i} className="minimal-data-card">
                    <span
                      style={{
                        fontSize: "9px",
                        color: "var(--color-electric-blue)",
                        fontWeight: 800,
                        display: "block",
                        marginBottom: "10px",
                        letterSpacing: "1px",
                      }}
                    >
                      PROTOCOL_MD_{i + 1}
                    </span>
                    <h3
                      style={{
                        fontSize: "19px",
                        fontWeight: 900,
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 TOOLS & STANDARDS */}
        <section className="data-strip">
          <div className="background-num-watermark">03</div>
          <div className="container-tight">
            <div className="layout-grid-compact">
              <div className="sidebar-label-bold">Systems & Compliance</div>
              <div>
                <h4
                  style={{
                    fontSize: "11px",
                    color: "var(--color-steel-grey)",
                    marginBottom: "20px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                  }}
                >
                  ENGINEERING TOOLSET
                </h4>
                {service.tools.map((item, i) => (
                  <span key={i} className="tag-industrial-heavy">
                    {item}
                  </span>
                ))}
                <h4
                  style={{
                    fontSize: "11px",
                    color: "var(--color-steel-grey)",
                    marginTop: "24px",
                    marginBottom: "14px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                  }}
                >
                  REGULATORY STANDARDS
                </h4>
                {service.standards.map((item, i) => (
                  <span
                    key={i}
                    className="tag-industrial-heavy"
                    style={{ background: "var(--color-electric-blue)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 DELIVERABLES */}
        <section
          className="data-strip strip-muted"
          style={{ borderBottom: "none" }}
        >
          <div className="background-num-watermark">04</div>
          <div className="container-tight">
            <div className="layout-grid-compact">
              <div className="sidebar-label-bold">Verified Outputs</div>
              <div className="card-grid-tight">
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="minimal-data-card"
                    style={{ borderTopColor: "var(--color-electric-blue)" }}
                  >
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 900,
                        marginBottom: "14px",
                        textTransform: "uppercase",
                      }}
                    >
                      {item}
                    </h3>
                    <div
                      style={{
                        color: "var(--color-electric-blue)",
                        fontWeight: 800,
                        fontSize: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        letterSpacing: "1px",
                      }}
                    >
                      <span
                        style={{
                          width: "12px",
                          height: "2px",
                          background: "var(--color-electric-blue)",
                        }}
                      ></span>
                      CERTIFIED_DELIVERABLE
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServiceDetail;
