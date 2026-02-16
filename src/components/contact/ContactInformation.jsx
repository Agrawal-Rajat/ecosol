import React from "react";

function ContactInformation() {
  return (
    <>
      <style>
        {`
          .contact-rich-section {
            background-color: var(--color-white);
            padding: 120px 0;
            font-family: var(--font-primary);
          }

          .contact-rich-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .contact-rich-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .rich-info-box {
            position: relative; /* Necessary for absolute background */
            background: #ffffff;
            padding: 50px;
            border: 1px solid #f1f5f9;
            box-shadow: 0 10px 30px rgba(0, 0, 102, 0.03);
            display: flex;
            flex-direction: column;
            transition: all 0.4s ease;
            overflow: hidden; /* Clips the background image scale */
            min-height: 380px;
          }

          /* Background Image Styling */
          .box-bg-image {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.06; /* Keep it very subtle for a rich feel */
            filter: grayscale(100%);
            transition: all 0.6s ease;
            z-index: 0;
          }

          .rich-info-box:hover .box-bg-image {
            opacity: 0.12;
            transform: scale(1.1);
            filter: grayscale(0%);
          }

          .rich-info-box:hover {
            transform: translateY(-5px);
            border-color: var(--color-accent-green);
            box-shadow: 0 20px 40px rgba(0, 0, 102, 0.08);
          }

          /* Ensures text stays above image */
          .box-content {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .rich-label {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-accent-green);
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 25px;
          }

          .rich-title {
            font-size: 28px;
            font-weight: 900;
            color: var(--color-primary);
            text-transform: uppercase;
            margin-bottom: 20px;
            line-height: 1.1;
          }

          .rich-details {
            font-size: 17px;
            color: #475569;
            line-height: 1.8;
            margin-top: auto;
          }

          .rich-details strong {
            color: var(--color-primary);
          }

          .rich-link {
            color: inherit;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            margin-top: 5px;
            border-bottom: 1px solid transparent;
            transition: all 0.3s ease;
          }

          .rich-link:hover {
            color: var(--color-accent-green);
            border-bottom-color: var(--color-accent-green);
          }

          .phone-group {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
          }

          @media (max-width: 900px) {
            .contact-rich-grid { grid-template-columns: 1fr; }
            .rich-info-box { padding: 40px; min-height: 320px;}
          }

          @media (max-width: 768px) {
            .contact-rich-section { padding: 80px 0; }
            .contact-rich-container { padding: 0 24px; }
            .rich-title { font-size: 24px; }
          }
        `}
      </style>

      <section className="contact-rich-section">
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
                <span className="rich-label">Location</span>
                <h2 className="rich-title">
                  Registered
                  <br />
                  Office
                </h2>
                <div className="rich-details">
                  523, Omaxe City – 1<br />
                  Mayakhedi, Indore – 453771
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
                  backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800')`,
                }}
              />
              <div className="box-content">
                <span className="rich-label">Engagement</span>
                <h2 className="rich-title">
                  Contact
                  <br />
                  Details
                </h2>
                <div className="rich-details">
                  <strong>Prashant Nagar</strong>
                  <br />
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
