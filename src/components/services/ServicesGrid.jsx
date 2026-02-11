import React from "react";
import { Link } from "react-router-dom";

function ServicesGrid() {
  const services = [
    {
      title: "Power System Studies",
      description:
        "Comprehensive power system analysis to ensure reliability, safety, and optimal performance of electrical networks.",
      link: "/services/power-system-studies",
      image:
        "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Protection & Relay Systems",
      description:
        "Design, evaluation, and optimization of protection and relay systems for coordinated fault clearance.",
      link: "/services/protection-relay-systems",
      image:
        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Arc Flash & Electrical Safety Studies",
      description:
        "Electrical safety assessments to identify arc flash hazards and implement mitigation measures.",
      link: "/services/arc-flash-safety",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Grounding & EMI Analysis",
      description:
        "Advanced grounding and electromagnetic interference analysis for personnel and equipment safety.",
      link: "/services/grounding-emi",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Power Generation & Substations",
      description:
        "Electrical design and engineering services for power generation facilities and substations.",
      link: "/services/power-generation-substations",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Power Automation (SCADA & Grid Islanding)",
      description:
        "Design and engineering of power automation systems to enhance monitoring and control.",
      link: "/services/power-automation",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Renewable Energy Engineering",
      description:
        "Engineering consultancy for utility-scale and distributed renewable energy projects.",
      link: "/services/renewable-energy",
      image:
        "https://images.unsplash.com/photo-1466611653911-954ff21b6748?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Industrial Electrification",
      description:
        "Electrical engineering services for complex industrial facilities across multiple sectors.",
      link: "/services/industrial-electrification",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <>
      <style>
        {`
          .services-section {
            background-color: #ffffff;
            background-image: radial-gradient(#cbd5e1 0.5px, transparent 0.5px);
            background-size: 40px 40px;
            padding: 100px 0;
          }

          .section-header {
            margin-bottom: 60px;
            max-width: 800px;
            padding: 0 20px;
          }

          .section-label {
            font-size: 12px;
            font-weight: 700;
            color: var(--color-accent-green);
            text-transform: uppercase;
            letter-spacing: 3px;
            display: block;
            margin-bottom: 15px;
          }

          .section-title {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 800;
            color: var(--color-primary);
            line-height: 1.1;
            margin: 0;
            text-transform: uppercase;
          }

          .services-grid {
            display: grid;
            /* Changed minmax to be more fluid for mobile */
            grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
            gap: 30px;
            padding: 0 20px;
          }

          .service-card {
            background: #ffffff;
            text-decoration: none;
            border: 1px solid #e2e8f0;
            display: flex;
            flex-direction: column;
            transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
            width: 100%; /* Ensures full width alignment */
          }

          .card-image-wrapper {
            width: 100%;
            height: 220px;
            overflow: hidden;
            background: var(--color-primary);
            position: relative;
          }

          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(100%) contrast(1.1);
            opacity: 0.8;
            transition: all 0.6s ease;
          }

          .service-card:hover .card-image {
            filter: grayscale(0%) contrast(1);
            opacity: 1;
            transform: scale(1.05);
          }

          .card-content {
            padding: 30px; /* Slightly reduced for better mobile fit */
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: -1px; left: -1px; right: -1px; bottom: -1px;
            border: 2px solid var(--color-accent-green);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 10;
            clip-path: inset(0 100% 100% 0);
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 102, 0.08);
            border-color: transparent;
          }

          .service-card:hover::before {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }

          .srv-title {
            font-size: 18px;
            font-weight: 800;
            color: var(--color-primary);
            line-height: 1.3;
            margin-bottom: 12px;
            text-transform: uppercase;
            transition: color 0.3s ease;
          }

          .service-card:hover .srv-title {
            color: var(--color-accent-green);
          }

          .srv-desc {
            font-size: 14px;
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .learn-more {
            margin-top: auto;
            font-size: 11px;
            font-weight: 700;
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          @media (max-width: 768px) {
            .services-section { padding: 60px 0; }
            .section-header { text-align: center; margin-bottom: 40px; }
            .card-image-wrapper { height: 180px; }
            .services-grid { gap: 20px; }
            .card-content { padding: 25px; }
          }
        `}
      </style>

      <section className="services-section">
        <div className="container">
          <header className="section-header">
            <span className="section-label">Service Portfolio</span>
            <h2 className="section-title">
              Specialized <br />
              <span style={{ color: "var(--color-accent-green)" }}>
                Engineering
              </span>{" "}
              Solutions
            </h2>
          </header>

          <div className="services-grid">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="service-card">
                <div className="card-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-image"
                  />
                </div>
                <div className="card-content">
                  <h3 className="srv-title">{service.title}</h3>
                  <p className="srv-desc">{service.description}</p>
                  <div className="learn-more">
                    Technical Specifications <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesGrid;
