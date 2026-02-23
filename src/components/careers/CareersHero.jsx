import React from "react";

function CareersHero() {
  return (
    <>
      <style>
        {`
          .careers-hero-editorial {
            background-color: var(--color-white);
            /* Reduced top padding significantly to move the component up */
            padding: 20px 0 100px 0; 
            position: relative;
            overflow: hidden;
            font-family: var(--font-primary);
          }

          /* Technical Grid Overlay */
          .careers-hero-editorial::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(var(--color-bg) 1.5px, transparent 1.5px),
              linear-gradient(90deg, var(--color-bg) 1.5px, transparent 1.5px);
            background-size: 80px 80px;
            z-index: 1;
          }

          .hero-wrapper {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 80px;
            position: relative;
            z-index: 2;
            align-items: center;
          }

          .hero-content {
            padding-right: 20px;
            position: relative;
            z-index: 10;
          }

          .tag-line {
            font-family: 'Courier New', monospace;
            font-size: 13px;
            font-weight: 700;
            color: var(--color-accent-green);
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 25px;
            display: block;
          }

          .main-heading {
            font-family: var(--font-primary);
            font-size: clamp(40px, 6.5vw, 85px);
            font-weight: 900;
            color: var(--color-primary);
            line-height: 0.9;
            letter-spacing: -4px;
            margin: 0 0 45px 0;
            text-transform: uppercase;
          }

          .main-heading span {
            -webkit-text-stroke: 2px var(--color-primary);
            color: transparent;
            display: block;
          }

          .text-pillar {
            max-width: 520px;
            border-left: 6px solid var(--color-accent-green);
            padding-left: 35px;
            margin-bottom: 50px;
          }

          .lead-text {
            font-size: 22px;
            font-weight: 700;
            color: var(--color-primary);
            line-height: 1.3;
            margin-bottom: 18px;
          }

          .sub-text {
            font-size: 16px;
            color: #475569;
            line-height: 1.8;
          }

          .image-showcase {
            position: relative;
            height: 600px;
            background: var(--color-primary);
            overflow: hidden;
            box-shadow: 40px 40px 0px #e2e8f0; 
          }

          .image-showcase img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: contrast(1.1) grayscale(20%);
          }

          .primary-action-btn {
            display: inline-flex;
            align-items: center;
            gap: 20px;
            padding: 20px 40px;
            background-color: var(--color-primary);
            color: var(--color-white) !important;
            text-decoration: none;
            font-weight: 800;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.4s ease;
          }

          .primary-action-btn:hover {
            background-color: var(--color-accent-green);
            transform: translateY(-5px);
          }

          /* TARGET ONLY MOBILE DEVICES */
          @media (max-width: 768px) {
            .careers-hero-editorial {
              /* Move the entire component up by reducing top padding */
              padding: 20px 0 60px 0 !important;
              min-height: 85vh; 
              display: flex;
              align-items: center;
              background-image: 
                linear-gradient(to bottom, rgba(0, 0, 102, 0.92), rgba(0, 0, 102, 0.85)),
                url("https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg");
              background-size: cover;
              background-position: center;
            }

            .careers-hero-editorial::before {
                background-image: 
                  linear-gradient(rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px);
            }

            .hero-wrapper {
              grid-template-columns: 1fr;
              /* Pull content up inside the wrapper */
              padding: 20px 24px !important; 
              gap: 0;
              width: 100%;
            }

            .main-heading {
              /* Scale up the heading for impact */
              font-size: 52px !important; 
              letter-spacing: -1.5px !important;
              margin-bottom: 20px !important;
              color: #ffffff; 
              line-height: 1.0 !important;
            }

            .main-heading span {
              -webkit-text-stroke: 1.5px #ffffff;
            }

            .text-pillar {
              padding-left: 20px;
              /* Tighten spacing between heading and text */
              margin-top: 10px !important;
              margin-bottom: 35px !important;
              border-left-width: 4px;
            }

            .lead-text { 
              font-size: 20px; 
              color: #ffffff; 
            }

            .sub-text { 
              font-size: 15px; 
              color: rgba(255, 255, 255, 0.7); 
            }

            .image-showcase {
              display: none; 
            }

            .primary-action-btn {
              width: 100%;
              justify-content: center;
              padding: 18px;
              background-color: var(--color-accent-green);
            }
          }
        `}
      </style>

      <section className="careers-hero-editorial">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="tag-line">Build The Grid // Join Ecosol</span>
            <h1 className="main-heading">
              Powering <br />
              <span>Futures.</span>
            </h1>

            <div className="text-pillar">
              <p className="lead-text">
                Engineering excellence starts with the right talent.
              </p>
              <p className="sub-text">
                Join a team of experienced professionals delivering complex
                electrical design and system studies for global utility,
                industrial, and renewable energy sectors.
              </p>
            </div>

            <a href="#careers-list" className="primary-action-btn">
              Explore Openings <span>→</span>
            </a>
          </div>

          <div className="image-showcase">
            <img
              src="https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg"
              alt="Solar Panels Renewable Energy"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/800x1000?text=Ecosol+Engineering";
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CareersHero;
