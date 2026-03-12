import React from "react";

function EngineeringCulture() {
  const cultureItems = [
    {
      title: "Precision & Accuracy",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Technical Thinking",
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Quality Standards",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Collaborative Design",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Compliance First",
      image:
        "https://images.unsplash.com/photo-1454165833767-02a6e3099033?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <>
      <style>
        {`
          /* Scoped to prevent global CSS leaks */
          .ecosol-culture-scope {
            background-color: var(--color-bg-white);
            padding: 120px 0;
            font-family: var(--font-primary);
            border-top: 1px solid var(--color-bg-light-grey);
          }

          .ecosol-culture-scope .culture-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
          }

          /* --- Standardized Large Heading --- */
          .ecosol-culture-scope .section-header-compact {
            margin-bottom: 70px;
            display: flex;
            align-items: center;
            gap: 30px;
          }

          .ecosol-culture-scope .section-title-heavy {
            font-size: clamp(38px, 6vw, 64px); 
            font-weight: 900;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            letter-spacing: -2.5px;
            white-space: nowrap;
            line-height: 1;
            margin: 0;
          }

          .ecosol-culture-scope .section-title-heavy span {
            color: var(--color-electric-blue);
          }

          .ecosol-culture-scope .header-line {
            height: 2px;
            background: var(--color-bg-light-grey);
            flex-grow: 1;
          }

          /* --- Culture Grid --- */
          .ecosol-culture-scope .culture-visual-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 15px;
          }

          .ecosol-culture-scope .culture-visual-card {
            position: relative;
            height: 480px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 40px 25px;
            background-color: var(--color-logo-navy);
            transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
            border-top: 2px solid transparent;
          }

          .ecosol-culture-scope .card-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            opacity: 0.5;
            transition: transform 0.8s ease, filter 0.8s ease, opacity 0.5s ease;
            filter: grayscale(100%) contrast(1.1);
          }

          .ecosol-culture-scope .culture-visual-card::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, var(--color-logo-navy) 0%, transparent 70%);
            z-index: 1;
          }

          /* Interactive hover with Electric Blue accent */
          .ecosol-culture-scope .culture-visual-card:hover {
            border-top: 4px solid var(--color-electric-blue);
            transform: translateY(-5px);
          }

          .ecosol-culture-scope .culture-visual-card:hover .card-bg {
            transform: scale(1.1);
            filter: grayscale(0%);
            opacity: 0.7;
          }

          .ecosol-culture-scope .card-content {
            position: relative;
            z-index: 10;
          }

          .ecosol-culture-scope .card-title-main {
            font-size: clamp(18px, 1.5vw, 24px);
            font-weight: 900;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 1.1;
          }

          @media (max-width: 1100px) {
            .ecosol-culture-scope .culture-visual-grid {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              gap: 15px;
              padding-bottom: 20px;
            }
            .ecosol-culture-scope .culture-visual-card {
              min-width: 300px;
              height: 400px;
              scroll-snap-align: start;
            }
          }

          @media (max-width: 768px) {
            .ecosol-culture-scope .culture-container { padding: 0 24px; }
            .ecosol-culture-scope .section-title-heavy { 
              font-size: 52px !important; 
              letter-spacing: -2px !important;
            }
            .ecosol-culture-scope .culture-visual-card { min-width: 80%; }
            .ecosol-culture-scope .section-header-compact { gap: 15px; margin-bottom: 40px; }
          }
        `}
      </style>

      <section className="ecosol-culture-scope">
        <div className="culture-container">
          <div className="section-header-compact">
            <h2 className="section-title-heavy">
              Our <span>Culture.</span>
            </h2>
            <div className="header-line" />
          </div>

          <div className="culture-visual-grid">
            {cultureItems.map((item, index) => (
              <div key={index} className="culture-visual-card">
                <div
                  className="card-bg"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="card-content">
                  <h3 className="card-title-main">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EngineeringCulture;
