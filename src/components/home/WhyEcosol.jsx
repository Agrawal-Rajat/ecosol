import React from "react";

function WhyEcosol() {
  const points = [
    {
      title: "Specialized Expertise",
      desc: "Focused engineering expertise in power systems, electromagnetic studies, and grounding design.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Independent Advisory",
      desc: "Objective technical assessments supporting developers, utilities, and EPC contractors.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Simulation‑Driven Engineering",
      desc: "Engineering solutions backed by advanced modelling and computational analysis.",
      image:
        "https://global-exposure.co.uk/wp-content/uploads/Global-Exposure-Offices-in-Milton-Keynes.jpg",
    },
    {
      title: "Standards‑Based Engineering",
      desc: "Designs aligned with international engineering standards such as IEC and IEEE",
      image:
        "https://besser.bwdcdn.com/_t/Other-Images/_AUTOxAUTO_crop_center-center_none/John-Hanson-Boone.jpg",
    },
  ];

  return (
    <>
      <style>
        {`
          .why-section {
            padding: 120px 0;
            background-color: var(--color-bg-white);
            overflow: hidden;
            border-top: 1px solid var(--color-bg-light-grey);
          }

          .why-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 450px 1fr;
            gap: 80px;
            align-items: center;
          }

          .why-grid-right {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
          }

          .why-card {
            position: relative;
            height: 300px;
            border-radius: 4px; /* Sharper engineering edges */
            overflow: hidden;
            background: var(--color-deep-blue);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 35px;
            transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.05);
          }

          .card-bg {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            object-fit: cover;
            opacity: 0.3;
            filter: grayscale(100%); /* Technical muted look */
            transition: all 0.7s ease;
            z-index: 1;
          }

          .card-overlay {
            position: absolute;
            bottom: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to top, var(--color-deep-blue) 15%, transparent 100%);
            z-index: 2;
          }

          .card-content {
            position: relative;
            z-index: 3;
            transform: translateY(15px);
            transition: all 0.5s ease;
          }

          /* Hover Effects */
          .why-card:hover {
            transform: translateY(-8px);
            border-color: var(--color-logo-blue);
            box-shadow: 0 30px 60px -12px rgba(11, 17, 32, 0.3);
          }

          .why-card:hover .card-bg {
            opacity: 0.5;
            filter: grayscale(0%);
            transform: scale(1.05);
          }

          .why-card:hover .card-content {
            transform: translateY(0);
          }

          .card-title {
            font-size: 22px;
            font-weight: 800;
            color: var(--color-bg-white);
            margin-bottom: 12px;
            letter-spacing: -0.5px;
          }

          .card-desc {
            font-size: 14px;
            color: var(--color-steel-grey);
            line-height: 1.6;
            opacity: 0;
            transition: all 0.4s ease;
            text-align: justify;
          }

          .why-card:hover .card-desc {
            opacity: 1;
          }

          @media (max-width: 1024px) {
            .why-container { grid-template-columns: 1fr; gap: 50px; padding: 0 24px; }
            .why-content-left { text-align: center; max-width: 100%; margin: 0 auto; }
            
            .why-grid-right {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              gap: 20px;
              padding: 20px 0 40px;
              scrollbar-width: none;
            }

            .why-grid-right::-webkit-scrollbar { display: none; }

            .why-card {
              flex: 0 0 85%;
              scroll-snap-align: center;
              height: 320px;
            }

            .card-desc { opacity: 1; }
            .card-content { transform: translateY(0); }
          }
        `}
      </style>

      <section className="why-section">
        <div className="why-container">
          {/* Left Side: Branding */}
          <div className="why-content-left">
            <span
              style={{
                color: "var(--color-steel-grey)",
                fontWeight: "800",
                letterSpacing: "4px",
                fontSize: "12px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Technical Value
            </span>
            <h2
              style={{
                fontSize: "clamp(42px, 5vw, 62px)",
                fontWeight: "900",
                color: "var(--color-logo-navy)",
                letterSpacing: "-2px",
                lineHeight: "1",
              }}
            >
              Why <br />
              <span style={{ color: "var(--color-electric-blue)" }}>
                Ecosol?
              </span>
            </h2>
            <p
              style={{
                marginTop: "25px",
                color: "var(--color-text-main)",
                fontSize: "18px",
                lineHeight: "1.7",
                maxWidth: "400px",
                textAlign: "justify",
              }}
            >
              We combine deep industry expertise with global standards to
              deliver technically rigorous, independent engineering solutions.
            </p>
          </div>

          {/* Right Side: Showcase Cards */}
          <div className="why-grid-right">
            {points.map((p, i) => (
              <div key={i} className="why-card">
                <img src={p.image} alt={p.title} className="card-bg" />
                <div className="card-overlay" />
                <div className="card-content">
                  <div
                    style={{
                      width: "35px",
                      height: "2px",
                      background: "var(--color-electric-blue)",
                      marginBottom: "20px",
                    }}
                  />
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyEcosol;
