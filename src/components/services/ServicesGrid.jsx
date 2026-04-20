import React from "react";
import { Link } from "react-router-dom";

function ServicesGrid() {
  const services = [
    {
      title: "Power System Analysis",
      description:
        "Advanced electrical network modeling and system performance studies to ensure stability, safety, and operational efficiency.",
      link: "/services/power-system-analysis",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Solar Power Plant Engineering",
      description:
        "End-to-end engineering support for solar power plants, including layout development, electrical design, and grid integration studies.",
      link: "/services/solar-power-plant-engineering",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Electromagnetic Analysis",
      description:
        "Electromagnetic interference and high voltage interaction studies to assess infrastructure impact on nearby systems.",
      link: "/services/electromagnetic-analysis",
      image:
        "https://res.cloudinary.com/de0rdsbph/image/upload/q_auto/f_auto/v1776682110/c7409f9d-670d-4330-8f50-2921e7aaf27b.png",
    },
    {
      title: "Grounding Analysis",
      description:
        "Electrical earthing and ground potential safety engineering to ensure personnel protection and reliable fault dissipation.",
      link: "/services/grounding-analysis",
      image:
        "https://res.cloudinary.com/de0rdsbph/image/upload/q_auto/f_auto/v1776682183/02b9b66b-4568-4c7b-bfce-59999ccb929f.png",
    },
    {
      title: "Power System Protection Study",
      description:
        "Protection coordination, relay settings review, and fault analysis for safe and reliable power system operations.",
      link: "/services/power-system-protection-study",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Detail Design Engineering",
      description:
        "Complete electrical engineering design services for substations, power plants, and industrial infrastructure.",
      link: "/services/detail-design-engineering",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Procurement Assistance",
      description:
        "Technical procurement support for electrical infrastructure projects including vendor evaluation and specification development.",
      link: "/services/procurement-assistance",
      image:
        "https://res.cloudinary.com/de0rdsbph/image/upload/q_auto/f_auto/v1776682377/ad3417c9-5e71-4cac-a4d0-07f2cd7d0ade.png",
    },
    {
      title: "Third Party Inspection",
      description:
        "Independent inspection and quality verification services for electrical equipment before installation and commissioning.",
      link: "/services/third-party-inspection",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <>
      <style>
        {`
          .ecosol-services-grid-scope {
            background-color: var(--color-bg-white);
            /* Clean Blueprint Texture */
            background-image: radial-gradient(var(--color-bg-light-grey) 1.2px, transparent 1.2px);
            background-size: 50px 50px;
            padding: 120px 0;
            font-family: var(--font-primary);
          }

          .ecosol-services-grid-scope .section-header {
            max-width: 1200px;
            margin: 0 auto 80px auto;
            padding: 0 40px;
            text-align: center;
          }

          .ecosol-services-grid-scope .section-label {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 5px;
            display: block;
            margin-bottom: 20px;
          }

          .ecosol-services-grid-scope .section-title {
            font-size: clamp(32px, 4vw, 48px);
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 1.1;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: -1px;
          }

          .ecosol-services-grid-scope .services-grid {
            max-width: 1300px;
            margin: 0 auto;
            display: grid;
            /* Strict 3-column layout for desktop */
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            padding: 0 40px;
          }

          .ecosol-services-grid-scope .service-card {
            background: var(--color-bg-white);
            text-decoration: none;
            display: flex;
            flex-direction: column;
            position: relative;
            border: 1px solid var(--color-bg-light-grey);
            border-radius: 2px;
          }

          .ecosol-services-grid-scope .card-image-wrapper {
            width: 100%;
            height: 200px;
            overflow: hidden;
            background: var(--color-logo-navy);
            padding: 10px; /* Inset frame effect */
          }

          .ecosol-services-grid-scope .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: none;
            opacity: 1;
          }

          .ecosol-services-grid-scope .card-content {
            padding: 35px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            background: #ffffff;
          }

          .ecosol-services-grid-scope .srv-title {
            font-size: 19px;
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 1.2;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: -0.5px;
          }

          .ecosol-services-grid-scope .srv-desc {
            font-size: 15px;
            color: var(--color-text-main);
            line-height: 1.7;
            margin-bottom: 30px;
            opacity: 0.85;
          }

          .ecosol-services-grid-scope .learn-more {
            margin-top: auto;
            font-size: 10px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 2px;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          @media (max-width: 1024px) {
            .ecosol-services-grid-scope .services-grid { 
               grid-template-columns: repeat(2, 1fr);
               gap: 30px;
            }
          }

          @media (max-width: 768px) {
            .ecosol-services-grid-scope { padding: 80px 0; }
            .ecosol-services-grid-scope .services-grid { 
               grid-template-columns: 1fr;
               padding: 0 24px;
            }
            .ecosol-services-grid-scope .section-header { padding: 0 24px; margin-bottom: 50px; }
          }
        `}
      </style>

      <section className="ecosol-services-grid-scope">
        <div className="container">
          <header className="section-header">
            <span className="section-label">Service Portfolio</span>
            <h2 className="section-title">Specialized Engineering Solutions</h2>
          </header>

          <div className="services-grid">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="service-card">
                <div className="card-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-image"
                    loading="lazy"
                  />
                </div>
                <div className="card-content">
                  <h3 className="srv-title">{service.title}</h3>
                  <p className="srv-desc">{service.description}</p>
                  <div className="learn-more">
                    Technical Specs <span>→</span>
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
