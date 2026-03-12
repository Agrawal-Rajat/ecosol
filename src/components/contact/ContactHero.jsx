import React from "react";

function ContactHero() {
  return (
    <>
      <style>
        {`
          .ecosol-contact-hero-scope {
            position: relative;
            height: 75vh;
            min-height: 550px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background-color: var(--color-logo-navy);
            font-family: var(--font-primary);
            overflow: hidden;
          }

          /* --- Industrial Background --- */
          .ecosol-contact-hero-scope .hero-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1548345680-f5475ea90f14?auto=format&fit=crop&q=80&w=1600');
            background-size: cover;
            background-position: center;
            z-index: 1;
            filter: contrast(1.1) grayscale(30%);
          }

          /* --- Engineering Grid Overlay --- */
          .ecosol-contact-hero-scope .hero-grid {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 3;
          }

          .ecosol-contact-hero-scope .hero-overlay {
            position: absolute;
            inset: 0;
            /* Deep Navy to Translucent Gradient */
            background: linear-gradient(
              to bottom,
              rgba(11, 17, 32, 0.95) 0%,
              rgba(11, 17, 32, 0.7) 50%,
              rgba(11, 17, 32, 0.95) 100%
            );
            z-index: 2;
          }

          .ecosol-contact-hero-scope .hero-content {
            position: relative;
            z-index: 10;
            max-width: 900px;
            padding: 0 40px;
          }

          /* --- Appropriately Large Heading --- */
          .ecosol-contact-hero-scope .hero-title {
            font-size: clamp(42px, 6vw, 68px);
            font-weight: 900;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: -2.5px;
            line-height: 1;
            margin-bottom: 25px;
          }

          .ecosol-contact-hero-scope .hero-title span {
            color: var(--color-electric-blue);
            display: inline-block;
          }

          .ecosol-contact-hero-scope .hero-divider {
            width: 60px;
            height: 3px;
            background: var(--color-electric-blue);
            margin: 0 auto 35px auto;
            border-radius: 2px;
          }

          .ecosol-contact-hero-scope .hero-desc {
            font-size: clamp(17px, 2vw, 20px);
            color: rgba(255, 255, 255, 0.85);
            line-height: 1.7;
            max-width: 720px;
            margin: 0 auto;
            letter-spacing: 0.2px;
          }

          /* --- MOBILE RESPONSIVE --- */
          @media (max-width: 768px) {
            .ecosol-contact-hero-scope { 
              height: 65vh; 
              min-height: 480px; 
            }
            
            .ecosol-contact-hero-scope .hero-content {
              padding: 0 24px;
            }

            .ecosol-contact-hero-scope .hero-title { 
              font-size: 48px !important; 
              letter-spacing: -1.5px !important;
            }
            
            .ecosol-contact-hero-scope .hero-divider { 
              width: 40px; 
              margin-bottom: 25px;
            }
            
            .ecosol-contact-hero-scope .hero-desc {
              font-size: 16px;
              line-height: 1.6;
            }
          }
        `}
      </style>

      <section className="ecosol-contact-hero-scope">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-grid" />

        <div className="hero-content">
          <h1 className="hero-title">
            Contact <span>Ecosol.</span>
          </h1>

          <div className="hero-divider" />

          <p className="hero-desc">
            Connect with our technical consultants to discuss power system
            studies, specialized grounding design, and advanced electrical
            infrastructure solutions for your global projects.
          </p>
        </div>
      </section>
    </>
  );
}

export default ContactHero;
