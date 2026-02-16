import React, { useState } from "react";

function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "d0568224-5d4b-423b-be3a-9b936d1e02fa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        event.target.reset();
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>
        {`
          .enquiry-section {
            background-color: var(--color-bg);
            padding: 100px 0;
            font-family: var(--font-primary);
            position: relative;
          }

          .enquiry-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .enquiry-header {
            text-align: center;
            margin-bottom: 50px;
          }

          .enquiry-heading {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 900;
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: -1.5px;
            margin-bottom: 15px;
          }

          .enquiry-heading span { color: var(--color-accent-green); }

          .enquiry-form {
            background: #ffffff;
            padding: 50px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 20px 40px rgba(0, 0, 102, 0.05);
            display: flex;
            flex-direction: column;
            gap: 25px;
          }

          .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
          }

          .form-group { display: flex; flex-direction: column; gap: 8px; }

          .form-label {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .form-input, .form-select, .form-textarea {
            width: 100%;
            padding: 15px;
            border: 1px solid #cbd5e1;
            font-size: 15px;
            background-color: #f8fafc;
            font-family: inherit;
          }

          .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: var(--color-accent-green);
            background-color: #ffffff;
          }

          .submit-btn {
            background-color: var(--color-primary);
            color: #ffffff;
            padding: 20px;
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .submit-btn:hover { background-color: var(--color-accent-green); }

          /* POPUP STYLES */
          .success-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 31, 46, 0.95); /* Deep navy theme overlay */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          .success-popup {
            background: #ffffff;
            padding: 60px 40px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            border-top: 5px solid var(--color-accent-green);
          }

          .success-icon {
            font-size: 50px;
            color: var(--color-accent-green);
            margin-bottom: 20px;
          }

          .success-title {
            font-size: 24px;
            font-weight: 900;
            color: var(--color-primary);
            text-transform: uppercase;
            margin-bottom: 10px;
          }

          .success-msg {
            font-size: 16px;
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .close-popup-btn {
            background: var(--color-primary);
            color: #ffffff;
            border: none;
            padding: 15px 40px;
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 1px;
            cursor: pointer;
            transition: 0.3s;
          }

          .close-popup-btn:hover { background: var(--color-accent-green); }

          @media (max-width: 768px) {
            .enquiry-container { padding: 0 24px; }
            .enquiry-form { padding: 30px 20px; }
            .form-grid { grid-template-columns: 1fr; gap: 20px; }
          }
        `}
      </style>

      <section className="enquiry-section">
        <div className="enquiry-container">
          <div className="enquiry-header">
            <h2 className="enquiry-heading">
              Engineering <span>Enquiry</span>
            </h2>
          </div>

          <form className="enquiry-form" onSubmit={onSubmit}>
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Organization"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91..."
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Specialization</label>
              <select name="subject" className="form-select">
                <option>Power System Studies</option>
                <option>Electrical Design Engineering</option>
                <option>Renewable Energy Engineering</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Project Brief</label>
              <textarea
                name="message"
                placeholder="Technical requirements..."
                required
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Submit Technical Enquiry"}
            </button>
          </form>
        </div>

        {/* SUCCESS POPUP */}
        {showSuccess && (
          <div className="success-overlay">
            <div className="success-popup">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Submission Successful</h3>
              <p className="success-msg">
                Your technical query has reached us. Our engineering team will
                review your requirements and contact you shortly.
              </p>
              <button
                className="close-popup-btn"
                onClick={() => setShowSuccess(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default ContactForm;
