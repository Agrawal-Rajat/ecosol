import React from "react";

function ContactHero() {
  return (
    <>
      <style>
        {`
          .contact-hero-minimal {
            position: relative;
            height: 83vh;
            min-height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #ffffff;
            font-family: var(--font-primary);
            overflow: hidden;
            background-color: #0f172a;
          }

          .hero-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://caltechsites-prod-assets.resources.caltech.edu/scienceexchange/images/wind-turbine-future-energy.2e16d0ba.fill-933x525-c100.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: 1;
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to bottom,
              rgba(15, 23, 42, 0.85) 0%,
              rgba(15, 23, 42, 0.4) 50%,
              rgba(15, 23, 42, 0.9) 100%
            );
            z-index: 2;
          }

          .hero-content {
            position: relative;
            z-index: 10;
            max-width: 900px;
            padding: 0 24px;
          }

          .hero-title {
            /* Desktop scale */
            font-size: clamp(44px, 8vw, 84px);
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -3px;
            line-height: 1;
            margin-bottom: 25px;
          }

          .hero-title span {
            color: var(--color-accent-green);
          }

          .hero-divider {
            width: 100px;
            height: 4px;
            background: var(--color-accent-green);
            margin: 0 auto 35px auto;
          }

          .hero-desc {
            font-size: clamp(18px, 2vw, 22px);
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
            max-width: 700px;
            margin: 0 auto;
            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          }

          @media (max-width: 768px) {
            .contact-hero-minimal { height: 70vh; min-height: 500px; }
            
            /* Enhanced Mobile Heading Scale */
            .hero-title { 
              font-size: 52px; 
              letter-spacing: -2px;
              line-height: 0.95;
            }
            
            .hero-divider { 
              width: 80px; 
              height: 3px; 
              margin-bottom: 25px;
            }
            
            .hero-desc {
              font-size: 17px;
              padding: 0 10px;
            }
          }
        `}
      </style>

      <section className="contact-hero-minimal">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-title">
            Contact <span>Ecosol</span>
          </h1>

          <div className="hero-divider" />

          <p className="hero-desc">
            Partner with our engineering experts to deliver precision electrical
            design, advanced system studies, and reliable energy solutions for
            your next infrastructure project.
          </p>
        </div>
      </section>
    </>
  );
}

export default ContactHero;
