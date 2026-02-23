import React, { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Power Systems",
    "Oil & Gas",
    "Renewables",
    "Industrial",
  ];

  const projects = [
    {
      id: 1,
      title: "Electrical Arc Flash Study",
      client: "DFE Pharma India Pvt Ltd",
      category: "Power Systems",
      location: "Cuddalore, India",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      desc: "Comprehensive safety audit and incident energy analysis following NFPA 70E standards.",
    },
    {
      id: 2,
      title: "KNPC Refinery Protection Upgrade",
      client: "Kuwait National Petroleum Company",
      category: "Oil & Gas",
      location: "Kuwait",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
      desc: "Design and implementation of advanced relay protection systems for downstream facilities.",
    },
    {
      id: 3,
      title: "Grid Integration Analysis",
      client: "Solar Energy Hub",
      category: "Renewables",
      location: "Oman",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
      desc: "Load flow and stability studies for integrating 50MW solar PV plant into the national grid.",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <style>
        {`
          .projects-section {
            /* DECREASED TOP PADDING TO SIT CLOSER TO HEADER */
            padding: 80px 0 100px; 
            background-color: #ffffff;
            background-image: radial-gradient(#cbd5e1 0.5px, transparent 0.5px);
            background-size: 30px 30px;
          }

          .container {
            max-width: 1300px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .filter-bar {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 50px;
            flex-wrap: wrap;
          }

          .filter-btn {
            padding: 10px 22px;
            border: 1px solid #e2e8f0;
            background: #fff;
            color: #64748b;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 4px;
          }

          .filter-btn.active, .filter-btn:hover {
            border-color: #10b981;
            color: #10b981;
            background: rgba(16, 185, 129, 0.05);
          }

          .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 40px;
          }

          .project-card {
            background: #fff;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            flex-direction: column;
          }

          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(15, 23, 42, 0.1);
            border-color: #10b981;
          }

          .img-wrapper {
            height: 240px;
            overflow: hidden;
            position: relative;
          }

          .project-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
          }

          .project-card:hover .project-img {
            transform: scale(1.1);
          }

          .category-tag {
            position: absolute;
            top: 20px;
            left: 20px;
            background: #10b981;
            color: #fff;
            padding: 6px 14px;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            border-radius: 4px;
          }

          .project-info {
            padding: 30px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }

          .project-location {
            color: #10b981;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 10px;
          }

          .project-title {
            font-size: 24px;
            font-weight: 900;
            color: #0f172a;
            line-height: 1.2;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
          }

          .project-desc {
            color: #64748b;
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 25px;
          }

          .view-case-btn {
            margin-top: auto;
            color: #0f172a;
            text-decoration: none;
            font-weight: 800;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: color 0.3s ease;
          }

          .view-case-btn:hover {
            color: #10b981;
          }

          /* MOBILE OPTIMIZATIONS */
          @media (max-width: 768px) {
            .projects-section { padding: 60px 0 60px; }
            .project-grid { grid-template-columns: 1fr; }
            .container { padding: 0 20px; }
            
            /* INCREASED MOBILE HEADER SIZE */
            .main-heading { 
              font-size: 46px !important; 
              line-height: 1.05 !important;
              letter-spacing: -2px !important;
            }
            .project-title { font-size: 22px; }
            .filter-bar { gap: 8px; margin-bottom: 40px; }
            .filter-btn { padding: 8px 16px; font-size: 11px; }
          }
        `}
      </style>

      <section className="projects-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span
              style={{
                color: "#10b981",
                fontWeight: "800",
                letterSpacing: "4px",
                fontSize: "11px",
                textTransform: "uppercase",
              }}
            >
              Case Studies
            </span>
            <h1
              className="main-heading"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: "900",
                color: "#0f172a",
                marginTop: "10px",
                letterSpacing: "-2px",
              }}
            >
              Engineering <span style={{ color: "#10b981" }}>Milestones</span>
            </h1>
          </div>

          {/* Category Filter */}
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

          {/* Project Grid */}
          <div className="project-grid">
            {filteredProjects.map((p) => (
              <div key={p.id} className="project-card">
                <div className="img-wrapper">
                  <span className="category-tag">{p.category}</span>
                  <img src={p.image} alt={p.title} className="project-img" />
                </div>
                <div className="project-info">
                  <span className="project-location">{p.location}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p
                    style={{
                      fontWeight: "700",
                      color: "#475569",
                      marginBottom: "8px",
                      fontSize: "14px",
                    }}
                  >
                    Client: {p.client}
                  </p>
                  <p className="project-desc">{p.desc}</p>
                  <a href="#" className="view-case-btn">
                    Read Case Study <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
