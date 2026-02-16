import React from "react";

function EngineeringCulture() {
  const cultureItems = [
    {
      title: "Precision & Accuracy",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Independent Technical Thinking",
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Quality Over Speed",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Collaborative Engineering",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Safety & Compliance First",
      image:
        "https://images.unsplash.com/photo-1454165833767-02a6e3099033?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <>
      <style>
        {`
          .culture-visual-section {
            background-color: var(--color-white);
            padding: 100px 0;
            font-family: var(--font-primary);
          }

          .culture-container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 0 40px;
          }

          .section-header-compact {
            margin-bottom: 70px;
            display: flex;
            align-items: center;
            gap: 30px;
          }

          .section-title-heavy {
            font-size: clamp(38px, 8vw, 56px); 
            font-weight: 900;
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: -2px;
            white-space: nowrap;
            line-height: 0.95;
          }

          /* Adding greenish element to heading */
          .section-title-heavy span {
            color: var(--color-accent-green);
          }

          .header-line {
            height: 3px;
            background: var(--color-primary);
            flex-grow: 1;
          }

          .culture-visual-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 15px;
          }

          .culture-visual-card {
            position: relative;
            height: 450px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 40px 25px;
            background-color: var(--color-primary);
            transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            border-top: 0px solid var(--color-accent-green); /* Hidden initially */
          }

          .card-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            opacity: 0.6;
            transition: transform 0.8s ease, opacity 0.5s ease;
            filter: grayscale(100%) contrast(1.2);
          }

          .culture-visual-card::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0, 0, 102, 0.95) 0%, transparent 70%);
            z-index: 1;
          }

          /* Interactive hover with greenish border hint */
          .culture-visual-card:hover {
            border-top: 6px solid var(--color-accent-green);
          }

          .culture-visual-card:hover .card-bg {
            transform: scale(1.1);
            filter: grayscale(0%);
            opacity: 0.8;
          }

          .card-content {
            position: relative;
            z-index: 10;
          }

          .card-title-main {
            font-size: clamp(20px, 2vw, 26px);
            font-weight: 900;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 1.1;
          }

          @media (max-width: 1024px) {
            .culture-visual-grid {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              scrollbar-width: none;
              padding-bottom: 20px;
            }
            .culture-visual-grid::-webkit-scrollbar { display: none; }
            
            .culture-visual-card {
              min-width: 300px;
              height: 400px;
              scroll-snap-align: start;
            }
          }

          @media (max-width: 768px) {
            .culture-container { padding: 0 24px; }
            /* Mobile scaling for heading */
            .section-title-heavy { 
              font-size: 42px; 
              letter-spacing: -1.5px;
            }
            .culture-visual-card { min-width: 85%; padding: 30px 20px; }
            .section-header-compact { gap: 15px; margin-bottom: 45px; }
          }
        `}
      </style>

      <section className="culture-visual-section">
        <div className="culture-container">
          <div className="section-header-compact">
            <h2 className="section-title-heavy">
              Our <span>Culture</span>
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
