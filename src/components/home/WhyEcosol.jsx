import React from "react";

function WhyEcosol() {
  const points = [
    {
      title: "Standards-Driven",
      desc: "Developed in strict compliance with IEEE, IEC, and NFPA standards.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Senior-Led Team",
      desc: "Work reviewed by professionals with 20+ years of industry experience.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Global Exposure",
      desc: "Proven track record across MENA, Europe, and India projects.",
      image:
        "https://global-exposure.co.uk/wp-content/uploads/Global-Exposure-Offices-in-Milton-Keynes.jpg",
    },
    {
      title: "Safety Focused",
      desc: "Unyielding emphasis on system safety and regulatory compliance.",
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
            background-color: #ffffff;
            overflow: hidden;
          }

          .why-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 450px 1fr;
            gap: 60px;
            align-items: center;
          }

          .why-grid-right {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
          }

          .why-card {
            position: relative;
            height: 280px;
            border-radius: 20px;
            overflow: hidden;
            background: #0f172a;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 30px;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.1);
          }

          .card-bg {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            object-fit: cover;
            opacity: 0.4;
            transition: all 0.6s ease;
            z-index: 1;
          }

          .card-overlay {
            position: absolute;
            bottom: 0; left: 0; width: 100%; height: 70%;
            background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 20%, transparent);
            z-index: 2;
          }

          .card-content {
            position: relative;
            z-index: 3;
            transform: translateY(20px);
            transition: all 0.5s ease;
          }

          /* Hover Effects */
          .why-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25);
          }

          .why-card:hover .card-bg {
            opacity: 0.7;
            transform: scale(1.1);
          }

          .why-card:hover .card-content {
            transform: translateY(0);
          }

          .card-title {
            font-size: 20px;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
          }

          .card-desc {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            opacity: 0;
            transition: all 0.4s ease;
          }

          .why-card:hover .card-desc {
            opacity: 1;
          }

          /* MOBILE HORIZONTAL SCROLL SNAP */
          @media (max-width: 1024px) {
            .why-container { grid-template-columns: 1fr; gap: 50px; padding: 0 20px; }
            .why-content-left { text-align: center; max-width: 100%; }
            
            .why-grid-right {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              gap: 20px;
              padding: 20px 0 40px;
              scrollbar-width: none; /* Hide scrollbar for Chrome/Safari */
            }

            .why-grid-right::-webkit-scrollbar { display: none; }

            .why-card {
              flex: 0 0 85%; /* Shows part of the next card to signal scrolling */
              scroll-snap-align: center;
              height: 320px;
            }

            .card-desc { opacity: 1; } /* Keep text visible on touch devices */
            .card-content { transform: translateY(0); }
            .main-heading { font-size: 48px !important; line-height: 1 !important; }
          }
        `}
      </style>

      <section className="why-section">
        <div className="why-container">
          {/* Left Side: Branding */}
          <div className="why-content-left">
            <span
              style={{
                color: "#10b981",
                fontWeight: "800",
                letterSpacing: "4px",
                fontSize: "11px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Technical Value
            </span>
            <h2
              className="main-heading"
              style={{
                fontSize: "clamp(42px, 5vw, 62px)",
                fontWeight: "900",
                color: "#0f172a",
                letterSpacing: "-3px",
                lineHeight: "1",
              }}
            >
              Engineering <br />
              <span style={{ color: "#10b981" }}>
                Without <br /> Compromise.
              </span>
            </h2>
            <p
              style={{
                marginTop: "25px",
                color: "#64748b",
                fontSize: "18px",
                lineHeight: "1.7",
                maxWidth: "400px",
              }}
            >
              We combine deep industry expertise with global standards to
              deliver technically sound solutions.
            </p>
          </div>

          {/* Right Side: Horizontal Swipe Cards */}
          <div className="why-grid-right">
            {points.map((p, i) => (
              <div key={i} className="why-card">
                <img src={p.image} alt={p.title} className="card-bg" />
                <div className="card-overlay" />
                <div className="card-content">
                  <div
                    style={{
                      width: "30px",
                      height: "3px",
                      background: "#10b981",
                      marginBottom: "15px",
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
