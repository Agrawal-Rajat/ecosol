import React from "react";

function CareersHero() {
  return (
    <>
      <style>
        {`
          .ecosol-careers-hero-scope {
            background-color: var(--color-bg-white);
            /* Positioned tightly to sit under the header */
            padding: 40px 0 100px 0; 
            position: relative;
            overflow: hidden;
            font-family: var(--font-primary);
          }

          /* --- Technical Drafting Grid --- */
          .ecosol-careers-hero-scope::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(var(--color-bg-light-grey) 1.5px, transparent 1.5px),
              linear-gradient(90deg, var(--color-bg-light-grey) 1.5px, transparent 1.5px);
            background-size: 60px 60px;
            z-index: 1;
          }

          .ecosol-careers-hero-scope .hero-wrapper {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 60px;
            position: relative;
            z-index: 2;
            align-items: center;
          }

          .ecosol-careers-hero-scope .hero-content {
            padding-right: 20px;
            position: relative;
            z-index: 10;
          }

          .ecosol-careers-hero-scope .tag-line {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 5px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .ecosol-careers-hero-scope .tag-line::before {
            content: "";
            width: 30px;
            height: 2px;
            background: var(--color-electric-blue);
          }

          .ecosol-careers-hero-scope .main-heading {
            font-size: clamp(45px, 7vw, 90px);
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 0.9;
            letter-spacing: -4px;
            margin: 0 0 45px 0;
            text-transform: uppercase;
          }

          .ecosol-careers-hero-scope .main-heading span {
            -webkit-text-stroke: 2px var(--color-logo-navy);
            color: transparent;
            display: block;
          }

          .ecosol-careers-hero-scope .text-pillar {
            max-width: 540px;
            border-left: 5px solid var(--color-electric-blue);
            padding-left: 35px;
            margin-bottom: 50px;
          }

          .ecosol-careers-hero-scope .lead-text {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-logo-navy);
            line-height: 1.25;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
            text-align: justify;
          }

          .ecosol-careers-hero-scope .sub-text {
            font-size: 16px;
            color: var(--color-text-main);
            line-height: 1.8;
            text-align: justify;
          }

          .ecosol-careers-hero-scope .image-showcase {
            position: relative;
            height: 650px;
            background: var(--color-logo-navy);
            overflow: hidden;
            /* Technical "Blueprinting" offset */
            box-shadow: 30px 30px 0px var(--color-bg-light-grey); 
            border-radius: 2px;
          }

          .ecosol-careers-hero-scope .image-showcase img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(30%) contrast(1.1);
          }

          .ecosol-careers-hero-scope .primary-action-btn {
            display: inline-flex;
            align-items: center;
            gap: 20px;
            padding: 22px 45px;
            background-color: var(--color-logo-navy);
            color: #ffffff !important;
            text-decoration: none;
            font-weight: 800;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            border-radius: 2px;
          }

          .ecosol-careers-hero-scope .primary-action-btn:hover {
            background-color: var(--color-logo-blue);
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(11, 17, 32, 0.2);
          }

          /* --- MOBILE RESPONSIVE --- */
          @media (max-width: 768px) {
            .ecosol-careers-hero-scope {
              padding: 20px 0 60px 0 !important;
              min-height: 90vh; 
              display: flex;
              align-items: center;
              background-color: var(--color-logo-navy);
              /* Mobile background overlay with power infrastructure focus */
              background-image: 
                linear-gradient(to bottom, rgba(11, 17, 32, 0.95), rgba(11, 17, 32, 0.8)),
                url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600");
              background-size: cover;
              background-position: center;
            }

            .ecosol-careers-hero-scope::before {
                background-image: 
                  linear-gradient(rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px);
            }

            .ecosol-careers-hero-scope .hero-wrapper {
              grid-template-columns: 1fr;
              padding: 20px 24px !important; 
              gap: 0;
            }

            .ecosol-careers-hero-scope .main-heading {
              font-size: 56px !important; 
              letter-spacing: -2px !important;
              margin-bottom: 25px !important;
              color: #ffffff; 
              line-height: 1.0 !important;
            }

            .ecosol-careers-hero-scope .main-heading span {
              -webkit-text-stroke: 1.5px #ffffff;
            }

            .ecosol-careers-hero-scope .text-pillar {
              padding-left: 25px;
              margin-bottom: 40px !important;
              border-left-color: var(--color-electric-blue);
            }

            .ecosol-careers-hero-scope .lead-text { 
              font-size: 20px; 
              color: #ffffff; 
            }

            .ecosol-careers-hero-scope .sub-text { 
              font-size: 15px; 
              color: rgba(255, 255, 255, 0.7); 
            }

            .ecosol-careers-hero-scope .image-showcase {
              display: none; 
            }

            .ecosol-careers-hero-scope .primary-action-btn {
              width: 100%;
              justify-content: center;
              padding: 20px;
              background-color: var(--color-electric-blue);
            }
          }
        `}
      </style>

      <section className="ecosol-careers-hero-scope">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="tag-line">
              Engineering Expertise // Join Ecosol
            </span>
            <h1 className="main-heading">
              Powering <br />
              <span>Futures.</span>
            </h1>

            <div className="text-pillar">
              <p className="lead-text">
                Advanced technical consultancy starts with high-caliber talent.
              </p>
              <p className="sub-text">
                Contribute to complex electrical infrastructure design and power
                system studies for global utility, petrochemical, and renewable
                energy sectors.
              </p>
            </div>

            <a href="#careers-list" className="primary-action-btn">
              Explore Openings <span>→</span>
            </a>
          </div>

          <div className="image-showcase">
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
              alt="Power Systems Engineering Infrastructure"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CareersHero;
