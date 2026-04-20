import ContactHero from "../components/contact/ContactHero";
import ContactInformation from "../components/contact/ContactInformation";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <div className="contact-page-compact">
      <style>
        {`
          .contact-page-compact .ecosol-contact-hero-scope {
            height: 68vh;
            min-height: 500px;
          }

          .contact-page-compact .ecosol-contact-info-scope {
            padding: 72px 0;
          }

          .contact-page-compact .ecosol-contact-info-scope .contact-rich-grid {
            gap: 24px;
          }

          .contact-page-compact .ecosol-contact-info-scope .rich-info-box {
            min-height: 360px;
            padding: 42px;
          }

          .contact-page-compact .ecosol-enquiry-scope {
            padding: 72px 0;
          }

          .contact-page-compact .ecosol-enquiry-scope .enquiry-header {
            margin-bottom: 44px;
          }

          .contact-page-compact .ecosol-enquiry-scope .enquiry-form {
            padding: 48px;
            gap: 24px;
          }

          @media (max-width: 768px) {
            .contact-page-compact .ecosol-contact-hero-scope {
              height: 60vh;
              min-height: 440px;
            }

            .contact-page-compact .ecosol-contact-info-scope {
              padding: 60px 0;
            }

            .contact-page-compact .ecosol-contact-info-scope .rich-info-box {
              min-height: auto;
              padding: 34px 24px;
            }

            .contact-page-compact .ecosol-enquiry-scope {
              padding: 60px 0;
            }

            .contact-page-compact .ecosol-enquiry-scope .enquiry-header {
              margin-bottom: 36px;
            }

            .contact-page-compact .ecosol-enquiry-scope .enquiry-form {
              padding: 34px 24px;
              gap: 20px;
            }
          }
        `}
      </style>

      <ContactHero />
      <ContactInformation />
      <ContactForm />
    </div>
  );
}

export default Contact;
