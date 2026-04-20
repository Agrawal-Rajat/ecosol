import React, { useState } from "react";
import CredentialsReminder from "../components/contact/CredentialsReminder";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    // "Power Systems",
    "Oil & Gas",
    "Renewables",
    "Industrial",
  ];

  const projects = [
    {
      id: 1,
      title:
        "Review of Insulation Coordination Study for Garraf Fase 2 Project",
      client: null, // Left null as per your instruction to only show End Client for P1
      endClient: "Progetti Europa & Global S.p.A",
      category: "Oil & Gas",
      location: "Iraq",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      desc: "Comprehensive review of overvoltage protection and insulation levels for major oil field infrastructure.",
    },
    {
      id: 2,
      title:
        "Electrical Detail Design Engineering for 44MWAC/61.6MWp Solar Power Plant",
      client: "KBH Infra",
      endClient: "Torrent Power Limited",
      category: "Renewables",
      location: "India",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
      desc: "Full-scale detail engineering and design optimization for high-capacity solar PV integration.",
    },
    {
      id: 3,
      title:
        "Review of Power System Study and Protection Study for Ingot-Wafer Factory",
      client: "Jacobs Engineering",
      endClient: "Reliance Industries Limited",
      category: "Industrial",
      location: "International",
      image:
        "https://res.cloudinary.com/de0rdsbph/image/upload/q_auto/f_auto/v1776668524/895cefc9-8ef6-4c79-bb2a-395af50939ac.png",
      desc: "Advanced stability analysis and protection coordination for high-precision semiconductor manufacturing facilities.",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="projects-page-compact">
      <style>
        {`
          .projects-page-compact .ecosol-projects-scope {
            padding: 80px 0 64px;
          }

          .projects-page-compact .ecosol-projects-scope .projects-header-box {
            margin-bottom: 52px;
          }

          .projects-page-compact .ecosol-projects-scope .filter-bar {
            margin-bottom: 44px;
          }

          .projects-page-compact .ecosol-projects-scope .project-grid {
            gap: 24px;
          }

          .projects-page-compact .ecosol-projects-scope .project-info {
            padding: 28px;
          }

          .projects-page-compact .ecosol-projects-scope .project-title {
            margin-bottom: 12px;
          }

          .projects-page-compact .ecosol-projects-scope .project-desc {
            margin-bottom: 20px !important;
          }

          .projects-page-compact .ecosol-credentials-scope {
            padding: 72px 0 56px;
          }

          .projects-page-compact .ecosol-credentials-scope .credentials-subheading {
            margin-bottom: 44px;
          }

          .projects-page-compact .ecosol-credentials-scope .stats-horizontal-row {
            gap: 48px;
            margin-bottom: 28px;
          }

          .projects-page-compact .ecosol-credentials-scope .credentials-para {
            margin-top: 28px;
          }

          .ecosol-projects-scope {
            padding: 100px 0; 
            background-color: var(--color-bg-white);
            background-image: 
              linear-gradient(var(--color-bg-light-grey) 1.5px, transparent 1.5px),
              linear-gradient(90deg, var(--color-bg-light-grey) 1.5px, transparent 1.5px);
            background-size: 50px 50px;
          }

          .ecosol-projects-scope .projects-inner-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
          }

          .ecosol-projects-scope .projects-header-box {
            text-align: center;
            margin-bottom: 70px;
          }

          .ecosol-projects-scope .projects-eyebrow {
            color: var(--color-steel-grey);
            font-weight: 800;
            letter-spacing: 5px;
            font-size: 11px;
            text-transform: uppercase;
            display: block;
            margin-bottom: 20px;
          }

          .ecosol-projects-scope .main-heading {
            font-size: clamp(38px, 6vw, 64px); 
            font-weight: 900;
            color: var(--color-logo-navy);
            letter-spacing: -2.5px;
            line-height: 1.05;
            margin: 0 auto;
            max-width: 900px;
          }

          .ecosol-projects-scope .heading-accent {
            color: var(--color-electric-blue);
          }

          .ecosol-projects-scope .filter-bar {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 60px;
            flex-wrap: wrap;
          }

          .ecosol-projects-scope .filter-btn {
            padding: 12px 24px;
            border: 1px solid var(--color-bg-light-grey);
            background: var(--color-bg-white);
            color: var(--color-steel-grey);
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 2px;
          }

          .ecosol-projects-scope .filter-btn.active, 
          .ecosol-projects-scope .filter-btn:hover {
            border-color: var(--color-logo-blue);
            color: var(--color-logo-navy);
            background: var(--color-bg-light-grey);
          }

          .ecosol-projects-scope .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 30px;
          }

          .ecosol-projects-scope .project-card {
            background: var(--color-bg-white);
            border-radius: 2px;
            overflow: hidden;
            border: 1px solid var(--color-bg-light-grey);
            transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
          }

          .ecosol-projects-scope .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 60px rgba(11, 17, 32, 0.08);
            border-color: var(--color-logo-blue);
          }

          .ecosol-projects-scope .img-wrapper {
            height: 250px;
            overflow: hidden;
            position: relative;
          }

          .ecosol-projects-scope .project-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(20%);
            transition: all 0.8s ease;
          }

          .ecosol-projects-scope .project-card:hover .project-img {
            transform: scale(1.05);
            filter: grayscale(0%);
          }

          .ecosol-projects-scope .category-tag {
            position: absolute;
            top: 20px;
            left: 20px;
            background: var(--color-logo-navy);
            color: var(--color-bg-white);
            padding: 6px 12px;
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            border-radius: 2px;
            z-index: 2;
          }

          .ecosol-projects-scope .project-info {
            padding: 35px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }

          .ecosol-projects-scope .project-title {
            font-size: 24px;
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 1.25;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
          }

          .ecosol-projects-scope .client-meta {
             font-weight: 800;
             color: var(--color-logo-navy);
             margin-bottom: 4px;
             font-size: 12px;
             text-transform: uppercase;
          }

          .ecosol-projects-scope .view-case-btn {
            margin-top: auto;
            color: var(--color-logo-navy);
            text-decoration: none;
            font-weight: 800;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
          }

          .ecosol-projects-scope .view-case-btn:hover {
            color: var(--color-electric-blue);
            transform: translateX(5px);
          }

          @media (max-width: 768px) {
            .projects-page-compact .ecosol-projects-scope { padding: 64px 0 48px; }
            .projects-page-compact .ecosol-projects-scope .projects-header-box { margin-bottom: 40px; }
            .projects-page-compact .ecosol-projects-scope .filter-bar { margin-bottom: 32px; }
            .projects-page-compact .ecosol-projects-scope .project-grid { grid-template-columns: 1fr; gap: 18px; }
            .projects-page-compact .ecosol-projects-scope .projects-inner-container { padding: 0 24px; }
            .projects-page-compact .ecosol-projects-scope .project-info { padding: 24px; }
            .projects-page-compact .ecosol-credentials-scope { padding: 56px 0 44px; }
            .projects-page-compact .ecosol-credentials-scope .credentials-subheading { margin-bottom: 32px; }
            .projects-page-compact .ecosol-credentials-scope .stats-horizontal-row { gap: 32px; margin-bottom: 24px; }
            .projects-page-compact .ecosol-credentials-scope .credentials-para { margin-top: 24px; }
            .ecosol-projects-scope .main-heading { 
              font-size: 52px !important; 
              line-height: 1.05 !important;
              letter-spacing: -2px !important;
            }
          }
        `}
      </style>

      <section className="ecosol-projects-scope">
        <div className="projects-inner-container">
          <div className="projects-header-box">
            <span className="projects-eyebrow">Project Portfolio</span>
            <h1 className="main-heading">
              Engineering <span className="heading-accent">Milestones.</span>
            </h1>
          </div>

          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((p) => (
              <div key={p.id} className="project-card">
                <div className="img-wrapper">
                  <span className="category-tag">{p.category}</span>
                  <img src={p.image} alt={p.title} className="project-img" />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{p.title}</h3>

                  {/* Conditional Rendering for Clients */}
                  {p.client && (
                    <p className="client-meta">Client: {p.client}</p>
                  )}
                  {p.endClient && (
                    <p className="client-meta" style={{ marginBottom: "15px" }}>
                      End Client: {p.endClient}
                    </p>
                  )}

                  <p
                    className="project-desc"
                    style={{
                      color: "var(--color-text-main)",
                      fontSize: "15px",
                      lineHeight: "1.7",
                      marginBottom: "25px",
                    }}
                  >
                    {p.desc}
                  </p>
                  <a href="#" className="view-case-btn">
                    Technical Overview <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <CredentialsReminder />
        </div>
      </section>
    </div>
  );
}

export default Projects;
