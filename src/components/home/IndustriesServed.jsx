import React, { useState } from "react";

function IndustriesServed() {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      label: "Oil & Gas",
      desc: "Comprehensive electrical infrastructure for upstream and downstream operations, ensuring safety in hazardous environments.",
      img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200",
    },
    {
      label: "Utilities",
      desc: "Grid modernization, substation engineering, and transmission network studies for national and regional utility providers.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    },
    {
      label: "Renewables",
      desc: "Technical consultancy for Solar PV, Wind energy integration, and Battery Energy Storage Systems (BESS).",
      img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e29?auto=format&fit=crop&q=80&w=1200",
    },
    {
      label: "Manufacturing",
      desc: "Optimization of industrial plant electrical systems, protection coordination, and energy efficiency audits.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
    },
    {
      label: "Infrastructure",
      desc: "Power engineering for urban development, transportation networks, and critical public infrastructure projects.",
      img: "https://images.unsplash.com/photo-1517089534706-3d5efebb2492?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <>
      <style>
        {`
          .industries-section {
            padding: 120px 0;
            background-color: #ffffff;
          }
          
          .industries-wrapper {
            display: flex;
            gap: 80px;
            align-items: flex-start;
          }

          .industries-sticky-content {
            flex: 1;
            position: sticky;
            top: 120px;
          }

          .industries-accordion-container {
            flex: 1.2;
          }

          .accordion-item {
            border-bottom: 1px solid #e2e8f0;
            transition: all 0.5s ease;
          }

          .accordion-header {
            width: 100%;
            padding: 30px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: none;
            border: none;
            cursor: pointer;
            text-align: left;
          }

          .accordion-label {
            font-size: 24px;
            font-weight: 700;
            color: var(--color-primary);
            transition: color 0.3s ease;
          }

          .accordion-item.active .accordion-label {
            color: var(--color-accent-green);
          }

          .accordion-content {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .accordion-item.active .accordion-content {
            max-height: 500px;
            opacity: 1;
            padding-bottom: 40px;
          }

          .accordion-desc {
            font-size: 16px;
            color: #64748b;
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .accordion-img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 4px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          }

          .accordion-plus {
            font-size: 24px;
            color: #cbd5e1;
            transition: transform 0.4s ease;
          }

          .accordion-item.active .accordion-plus {
            transform: rotate(45deg);
            color: var(--color-accent-green);
          }

          /* RESPONSIVE FIXES */
          @media (max-width: 1024px) {
            .industries-wrapper {
              flex-direction: column;
              gap: 40px;
            }
            .industries-sticky-content {
              position: relative;
              top: 0;
            }
            .industries-section {
              padding: 80px 24px;
            }
          }
        `}
      </style>

      <section className="industries-section">
        <div
          style={{
            maxWidth: "var(--container-width)",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <div className="industries-wrapper">
            {/* Left Column: Static Header Area */}
            <div className="industries-sticky-content">
              <div
                style={{
                  color: "var(--color-accent-green)",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "16px",
                }}
              >
                Sectors of Impact
              </div>
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  color: "var(--color-primary)",
                  marginBottom: "24px",
                  lineHeight: "1.1",
                }}
              >
                Industries <br /> We Serve
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#64748b",
                  maxWidth: "400px",
                  lineHeight: "1.6",
                }}
              >
                Providing world-class power engineering consultancy across the
                most demanding industrial sectors globally.
              </p>
            </div>

            {/* Right Column: Interactive Accordion */}
            <div className="industries-accordion-container">
              {industries.map((ind, index) => (
                <div
                  key={index}
                  className={`accordion-item ${activeTab === index ? "active" : ""}`}
                >
                  <button
                    className="accordion-header"
                    onClick={() =>
                      setActiveTab(activeTab === index ? -1 : index)
                    }
                  >
                    <span className="accordion-label">{ind.label}</span>
                    <span className="accordion-plus">+</span>
                  </button>

                  <div className="accordion-content">
                    <p className="accordion-desc">{ind.desc}</p>
                    <img
                      src={ind.img}
                      alt={ind.label}
                      className="accordion-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndustriesServed;
