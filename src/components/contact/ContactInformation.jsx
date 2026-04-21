import React from "react";

function ContactInformation() {
  return (
    <>
      <style>
        {`
          .ecosol-contact-info-scope {
            background-color: var(--color-bg-white);
            padding: 100px 0;
            font-family: var(--font-primary);
          }

          .ecosol-contact-info-scope .contact-rich-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .ecosol-contact-info-scope .contact-rich-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }

          .ecosol-contact-info-scope .rich-info-box {
            position: relative;
            background: var(--color-bg-white);
            padding: 50px;
            border: 1px solid var(--color-bg-light-grey);
            display: flex;
            flex-direction: column;
            transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
            overflow: hidden;
            min-height: 400px;
            border-radius: 2px;
          }

          /* --- Background Image Styling --- */
          .ecosol-contact-info-scope .box-bg-image {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.05; /* Slightly increased for visibility */
            filter: grayscale(100%);
            transition: all 0.8s ease;
            z-index: 0;
          }

          .ecosol-contact-info-scope .rich-info-box:hover .box-bg-image {
            opacity: 0.12;
            transform: scale(1.05);
            filter: grayscale(0%);
          }

          .ecosol-contact-info-scope .rich-info-box:hover {
            transform: translateY(-8px);
            border-color: var(--color-logo-blue);
            box-shadow: 0 25px 50px rgba(11, 17, 32, 0.08);
          }

          .ecosol-contact-info-scope .box-content {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .ecosol-contact-info-scope .rich-label {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .ecosol-contact-info-scope .rich-label::after {
            content: "";
            width: 20px;
            height: 1px;
            background: var(--color-electric-blue);
          }

          .ecosol-contact-info-scope .rich-title {
            font-size: 32px;
            font-weight: 900;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            margin-bottom: 20px;
            line-height: 1.05;
            letter-spacing: -1px;
          }

          .ecosol-contact-info-scope .rich-details {
            font-size: 16px;
            color: var(--color-text-main);
            line-height: 1.8;
            margin-top: auto;
          }

          .ecosol-contact-info-scope .rich-details strong {
            color: var(--color-logo-navy);
            font-weight: 800;
            display: block;
            margin-bottom: 5px;
          }

          .ecosol-contact-info-scope .rich-link {
            color: var(--color-logo-navy);
            text-decoration: none;
            font-weight: 700;
            display: inline-block;
            transition: all 0.3s ease;
            border-bottom: 1px solid transparent;
          }

          .ecosol-contact-info-scope .rich-link:hover {
            color: var(--color-electric-blue);
            border-bottom-color: var(--color-electric-blue);
          }

          .ecosol-contact-info-scope .phone-group {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          @media (max-width: 900px) {
            .ecosol-contact-info-scope .contact-rich-grid { grid-template-columns: 1fr; }
            .ecosol-contact-info-scope .rich-info-box { padding: 40px; min-height: 350px;}
          }

          @media (max-width: 768px) {
            .ecosol-contact-info-scope { padding: 80px 0; }
            .ecosol-contact-info-scope .contact-rich-container { padding: 0 24px; }
            .ecosol-contact-info-scope .rich-title { font-size: 28px; }
          }
        `}
      </style>

      <section className="ecosol-contact-info-scope">
        <div className="contact-rich-container">
          <div className="contact-rich-grid">
            {/* Box 1: Registered Office */}
            <div className="rich-info-box">
              <div
                className="box-bg-image"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800')`,
                }}
              />
              <div className="box-content">
                <span className="rich-label">Corporate HQ</span>
                <h2 className="rich-title">
                  Registered
                  <br />
                  Office
                </h2>
                <div className="rich-details">
                  Indore
                  <br />
                  Madhya Pradesh, India
                </div>
              </div>
            </div>

            {/* Box 2: Direct Contact */}
            <div className="rich-info-box">
              <div
                className="box-bg-image"
                style={{
                  /* FIXED IMAGE: Swapped to a reliable engineering workspace visual */
                  backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800')`,
                  backgroundPosition: "center right",
                }}
              />
              <div className="box-content">
                <span className="rich-label">Direct Lines</span>
                <h2 className="rich-title">
                  Technical
                  <br />
                  Queries
                </h2>
                <div className="rich-details">
                  <strong>Prashant Nagar</strong>
                  <a
                    href="mailto:info@ecosolprojects.com"
                    className="rich-link"
                  >
                    info@ecosolprojects.com
                  </a>

                  <div className="phone-group">
                    <a href="tel:+919004817084" className="rich-link">
                      +91 90048 17084
                    </a>
                    <a href="tel:+919301093128" className="rich-link">
                      +91 93010 93128
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInformation;
