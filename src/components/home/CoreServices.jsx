import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function CoreServices() {
  const descRefs = useRef([]);
  const services = [
    {
      id: "01",
      title: "Power System Studies",
      image:
        "https://res.cloudinary.com/de0rdsbph/image/upload/v1777470376/2632a95d-197d-4bb8-be40-ce938f11ea9e.png",
      description:
        "Advanced Electrical studies using industry-standard computational modeling.",
      tags: ["Load Flow", "Short Circuit"],
    },
    {
      id: "02",
      title: "Protection & Safety",
      image:
        "https://res.cloudinary.com/de0rdsbph/image/upload/v1777470323/a032640c-382d-46bf-9b50-7607c65b7fdc.png",
      description: "Electrical Protection & Safety Assessment",
      tags: ["Protection", "Safety"],
    },
    {
      id: "03",
      title: "Renewable Integration",
      image:
        "https://res.cloudinary.com/de0rdsbph/image/upload/q_auto/f_auto/v1776666629/0480cdc5-3a7a-4041-8ee0-c18c358a947e.png",
      description: "Renewable Design Engineering",
      tags: ["Solar PV", "Grid Integration"],
    },
    {
      id: "04",
      title: "Substations & Grounding",
      image:
        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
      description: "Detail Design Engineering",
      tags: ["Substations", "Earthing"],
    },
  ];

  useEffect(() => {
    const setHeights = () => {
      // ensure array length matches
      descRefs.current = descRefs.current.slice(0, services.length);
      const heights = descRefs.current.map((el) =>
        el ? el.getBoundingClientRect().height : 0,
      );
      const max = heights.length ? Math.max(...heights) : 0;
      descRefs.current.forEach((el) => {
        if (el) el.style.minHeight = max ? `${max}px` : "";
      });
    };

    // Run once after mount/layout
    const id = setTimeout(setHeights, 0);
    window.addEventListener("resize", setHeights);
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", setHeights);
    };
  }, [services]);

  return (
    <>
      <style>
        {`
          .services-engineering-section {
            padding: 100px 0;
            background-color: var(--color-bg-light-grey); /* Subtle contrast from white sections */
            position: relative;
          }

          .services-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
          }

          .services-main-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin-bottom: 60px;
          }

          .service-item-card {
            position: relative;
            height: 400px;
            background: var(--color-deep-blue);
            border-radius: 2px; /* Sharper, engineered edges */
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .service-img-layer {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.6;
            filter: grayscale(40%); /* Muted colors for technical feel */
            transition: transform 0.8s ease, filter 0.8s ease;
          }

          .service-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-bg-white);
  margin-bottom: 10px;

  min-height: 56px; /* aligns all titles */
  display: flex;
  align-items: flex-end;
}

          .service-desc {
            font-size: 14px;
            color: var(--color-steel-grey);
            line-height: 1.6;
            margin-bottom: 0;
            transition: min-height 0.2s ease;
          }


          .service-gradient {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            /* Using deep-blue to maintain corporate look */
            background: linear-gradient(to bottom, rgba(11, 17, 32, 0.2) 0%, rgba(11, 17, 32, 1) 90%);
            z-index: 2;
          }

          .service-content-box {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 30px;
          z-index: 3;

          display: flex;
          flex-direction: column;
        }

          .service-item-card:hover {
            transform: translateY(-8px);
            border-color: var(--color-logo-blue); /* Subtle brand accent on hover */
          }

          .service-item-card:hover .service-img-layer {
            transform: scale(1.1);
            filter: grayscale(0%);
            opacity: 0.4;
          }

          .tech-tag-group {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 15px;
          }

          .tech-pill {
            font-family: var(--font-primary);
            font-size: 10px;
            font-weight: 700;
            color: var(--color-bg-white);
            background: rgba(255, 255, 255, 0.1);
            padding: 4px 10px;
            border-radius: 2px;
            letter-spacing: 1px;
            text-transform: uppercase;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .service-item-card:hover .tech-pill {
            border-color: var(--color-electric-blue);
            color: var(--color-electric-blue);
          }

         .view-all-btn {
          display: inline-block;
          padding: 18px 45px;
          background: var(--color-logo-navy);
          color: var(--color-bg-white) !important; /* Force white text */
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-decoration: none;
          border-radius: 2px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

.view-all-btn:hover {
  background: var(--color-logo-blue);
  color: var(--color-bg-white) !important; /* Keep white text on hover */
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(26, 95, 180, 0.3);
}

          @media (max-width: 768px) {
            .services-engineering-section { padding: 60px 0; }
            .services-main-grid { grid-template-columns: 1fr; }
            .service-item-card { height: 350px; }
          }
        `}
      </style>

      <section className="services-engineering-section">
        <div className="services-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div
              style={{
                color: "var(--color-steel-grey)",
                fontSize: "12px",
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
                fontSize: "clamp(32px, 4vw, 42px)",
                fontWeight: "900",
                color: "var(--color-logo-navy)",
                lineHeight: "1.2",
              }}
            >
              Specialized Solutions for <br />
              <span style={{ color: "var(--color-electric-blue)" }}>
                Complex Power Systems.
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
                  {/* <div className="tech-tag-group">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div> */}
                  <h3 className="service-title">{service.title}</h3>
                  <p
                    className="service-desc"
                    ref={(el) => (descRefs.current[index] = el)}
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
