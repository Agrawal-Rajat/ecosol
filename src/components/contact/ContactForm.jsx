import React, { useState } from "react";

function ContactForm() {
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
          .ecosol-enquiry-scope {
            background-color: var(--color-bg-white);
            padding: 100px 0;
            font-family: var(--font-primary);
            position: relative;
            /* Blueprint Grid Pattern */
            background-image: radial-gradient(var(--color-bg-light-grey) 1px, transparent 1px);
            background-size: 30px 30px;
          }

          .ecosol-enquiry-scope .enquiry-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          .ecosol-enquiry-scope .enquiry-header {
            text-align: center;
            margin-bottom: 60px;
          }

          .ecosol-enquiry-scope .enquiry-heading {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 900;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            letter-spacing: -1.5px;
            margin-bottom: 10px;
          }

          .ecosol-enquiry-scope .enquiry-heading span { 
            color: var(--color-electric-blue); 
          }

          .ecosol-enquiry-scope .enquiry-form {
            background: #ffffff;
            padding: 60px;
            border: 1px solid var(--color-bg-light-grey);
            box-shadow: 0 30px 60px rgba(11, 17, 32, 0.05);
            display: flex;
            flex-direction: column;
            gap: 30px;
            border-radius: 2px;
          }

          .ecosol-enquiry-scope .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }

          .ecosol-enquiry-scope .form-group { 
            display: flex; 
            flex-direction: column; 
            gap: 10px; 
          }

          .ecosol-enquiry-scope .form-label {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .ecosol-enquiry-scope .form-input, 
          .ecosol-enquiry-scope .form-select, 
          .ecosol-enquiry-scope .form-textarea {
            width: 100%;
            padding: 16px;
            border: 1px solid var(--color-bg-light-grey);
            font-size: 15px;
            background-color: var(--color-bg-light-grey);
            font-family: inherit;
            color: var(--color-logo-navy);
            transition: all 0.3s ease;
            border-radius: 2px;
          }

          .ecosol-enquiry-scope .form-input:focus, 
          .ecosol-enquiry-scope .form-textarea:focus {
            outline: none;
            border-color: var(--color-electric-blue);
            background-color: #ffffff;
            box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
          }

          .ecosol-enquiry-scope .submit-btn {
            background-color: var(--color-logo-navy);
            color: #ffffff;
            padding: 22px;
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            border: none;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            border-radius: 2px;
            margin-top: 10px;
          }

          .ecosol-enquiry-scope .submit-btn:hover:not(:disabled) { 
            background-color: var(--color-logo-blue);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(11, 17, 32, 0.2);
          }

          .ecosol-enquiry-scope .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          /* --- SUCCESS POPUP --- */
          .ecosol-enquiry-scope .success-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(11, 17, 32, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            backdrop-filter: blur(5px);
          }

          .ecosol-enquiry-scope .success-popup {
            background: #ffffff;
            padding: 60px 40px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            border-top: 4px solid var(--color-electric-blue);
            border-radius: 2px;
          }

          .ecosol-enquiry-scope .success-icon {
            font-size: 40px;
            color: var(--color-electric-blue);
            margin-bottom: 25px;
          }

          .ecosol-enquiry-scope .success-title {
            font-size: 24px;
            font-weight: 900;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
          }

          .ecosol-enquiry-scope .success-msg {
            font-size: 16px;
            color: var(--color-text-main);
            line-height: 1.7;
            margin-bottom: 35px;
          }

          .ecosol-enquiry-scope .close-popup-btn {
            background: var(--color-logo-navy);
            color: #ffffff;
            border: none;
            padding: 18px 45px;
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 2px;
            font-size: 12px;
            cursor: pointer;
            transition: 0.3s;
            border-radius: 2px;
          }

          .ecosol-enquiry-scope .close-popup-btn:hover { 
            background: var(--color-logo-blue); 
          }

          @media (max-width: 768px) {
            .ecosol-enquiry-scope { padding: 80px 0; }
            .ecosol-enquiry-scope .enquiry-container { padding: 0 24px; }
            .ecosol-enquiry-scope .enquiry-form { padding: 40px 25px; gap: 20px; }
            .ecosol-enquiry-scope .form-grid { grid-template-columns: 1fr; gap: 20px; }
            .ecosol-enquiry-scope .enquiry-heading { font-size: 36px; }
          }
        `}
      </style>

      <section className="ecosol-enquiry-scope">
        <div className="enquiry-container">
          <div className="enquiry-header">
            <h2 className="enquiry-heading">
              Technical <span>Enquiry</span>
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
                  placeholder="Enter your name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Organization name"
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
                <label className="form-label">Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91..."
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Area of Specialization</label>
              <select name="subject" className="form-select">
                <option>Power System Studies</option>
                <option>Electrical Design Engineering</option>
                <option>Renewable Energy Engineering</option>
                <option>Grid Compliance & Audits</option>
                <option>General Consultancy</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Technical Brief / Project Requirements
              </label>
              <textarea
                name="message"
                placeholder="Describe your technical requirements or project scope..."
                required
                rows="5"
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Processing Submission..."
                : "Submit Technical Brief"}
            </button>
          </form>
        </div>

        {/* SUCCESS POPUP */}
        {showSuccess && (
          <div className="success-overlay">
            <div className="success-popup">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Submission Received</h3>
              <p className="success-msg">
                Your technical query has been logged. Our engineering leads will
                review your requirements and contact you for further
                consultation.
              </p>
              <button
                className="close-popup-btn"
                onClick={() => setShowSuccess(false)}
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default ContactForm;
