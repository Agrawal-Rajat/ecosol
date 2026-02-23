import React from "react";

// Imports remain the same
import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";
import logo7 from "../../assets/logos/logo7.png";
import logo8 from "../../assets/logos/logo8.png";
import logo9 from "../../assets/logos/logo9.png";
import logo10 from "../../assets/logos/logo10.png";
import logo11 from "../../assets/logos/logo11.png";
import logo12 from "../../assets/logos/logo12.png";
import logo13 from "../../assets/logos/logo13.png";
import logo14 from "../../assets/logos/logo14.png";
import logo15 from "../../assets/logos/logo15.png";
import logo16 from "../../assets/logos/logo16.png";
import logo17 from "../../assets/logos/logo17.png";

function ClientGrid() {
  const allLogos = [
    { src: logo1, alt: "Client 1" },
    { src: logo2, alt: "Client 2" },
    { src: logo3, alt: "Client 3" },
    { src: logo4, alt: "Client 4" },
    { src: logo5, alt: "Client 5" },
    { src: logo6, alt: "Client 6" },
    { src: logo7, alt: "Client 7" },
    { src: logo8, alt: "Client 8" },
    { src: logo9, alt: "Client 9" },
    { src: logo10, alt: "Client 10" },
    { src: logo11, alt: "Client 11" },
    { src: logo12, alt: "Client 12" },
    { src: logo13, alt: "Client 13" },
    { src: logo14, alt: "Client 14" },
    { src: logo15, alt: "Client 15" },
    { src: logo16, alt: "Client 16" },
    { src: logo17, alt: "Client 17" },
  ];

  const row1 = [...allLogos.slice(0, 9), ...allLogos.slice(0, 9)];
  const row2 = [...allLogos.slice(9), ...allLogos.slice(9)];

  return (
    <>
      <style>
        {`
          .clients-section {
            padding: 120px 0;
            background: radial-gradient(circle at 50% 50%, #fdfdfd 0%, #f8fafc 100%);
            overflow: hidden;
          }

          .clients-header {
            text-align: center;
            margin-bottom: 80px;
          }

          .marquee-container {
            display: flex;
            flex-direction: column;
            gap: 50px;
            position: relative;
          }

          .marquee-container::before,
          .marquee-container::after {
            content: "";
            position: absolute;
            top: 0;
            width: 15%;
            height: 100%;
            z-index: 2;
            pointer-events: none;
          }
          .marquee-container::before {
            left: 0;
            background: linear-gradient(to right, #f8fafc, transparent);
          }
          .marquee-container::after {
            right: 0;
            background: linear-gradient(to left, #f8fafc, transparent);
          }

          .marquee-track {
            display: flex;
            width: max-content;
          }

          .marquee-content {
            display: flex;
            gap: 40px;
            padding-right: 40px;
          }

          .scroll-left { animation: scroll-left 45s linear infinite; }
          .scroll-right { animation: scroll-right 45s linear infinite; }

          .logo-box {
            width: 300px;
            height: 170px; 
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            border: 1px solid rgba(226, 232, 240, 0.8);
            border-radius: 28px;
            padding: 40px;
            box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.04);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .logo-box:hover {
            transform: translateY(-15px) scale(1.05);
            border-color: #10b981;
            box-shadow: 0 30px 60px -12px rgba(16, 185, 129, 0.15);
            z-index: 10;
          }

          .logo-img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            animation: float 6s ease-in-out infinite;
          }

          .marquee-track:hover .marquee-content {
            animation-play-state: paused;
          }

          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @media (max-width: 768px) {
            .clients-section { padding: 80px 0; }
            .logo-box { 
              width: 240px; 
              height: 140px; 
              padding: 30px; 
              border-radius: 22px;
            }
            .marquee-content { gap: 25px; padding-right: 25px; }
            /* Increased Mobile Header Size and weight */
            .clients-header h2 { 
              font-size: 42px !important; 
              line-height: 1.1 !important;
              padding: 0 10px;
            }
            .scroll-left, .scroll-right { animation-duration: 35s; }
          }
        `}
      </style>

      <section className="clients-section">
        <div className="clients-header">
          <div
            style={{
              display: "inline-block",
              padding: "6px 18px",
              background: "rgba(16, 185, 129, 0.1)",
              color: "#10b981",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "20px",
            }}
          >
            Trusted Partners
          </div>
          <h2
            style={{
              fontSize: "clamp(34px, 5.5vw, 56px)",
              fontWeight: "900",
              color: "#0f172a",
              letterSpacing: "-2.5px",
              lineHeight: "1.05",
            }}
          >
            Fueling{" "}
            <span
              style={{
                color: "#10b981",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Innovation
            </span>{" "}
            Together
          </h2>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-content scroll-left">
              {row1.map((logo, index) => (
                <div key={`r1-${index}`} className="logo-box">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-img"
                    style={{ animationDelay: `${index * 0.4}s` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="marquee-track">
            <div className="marquee-content scroll-right">
              {row2.map((logo, index) => (
                <div key={`r2-${index}`} className="logo-box">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-img"
                    style={{ animationDelay: `${index * 0.6}s` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientGrid;
