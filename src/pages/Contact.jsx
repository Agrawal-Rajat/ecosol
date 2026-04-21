import ContactHero from "../components/contact/ContactHero";
import ContactInformation from "../components/contact/ContactInformation";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <div className="contact-page-compact">
      <style>
        {`
          .contact-page-compact .ecosol-contact-hero-scope {
            height: 62vh;
            min-height: 460px;
          }

          .contact-page-compact .ecosol-contact-info-scope {
            padding: 60px 0 24px 0;
          }

          .contact-page-compact .ecosol-contact-info-scope .contact-rich-grid {
            gap: 24px;
          }

          .contact-page-compact .ecosol-contact-info-scope .rich-info-box {
            min-height: 330px;
            padding: 36px;
          }

          .contact-page-compact .ecosol-enquiry-scope {
            padding: 20px 0 60px 0;
          }

          .contact-page-compact .ecosol-enquiry-scope .enquiry-header {
            margin-bottom: 34px;
          }

          .contact-page-compact .ecosol-enquiry-scope .enquiry-form {
            padding: 40px;
            gap: 20px;
          }

          @media (max-width: 768px) {
            .contact-page-compact .ecosol-contact-hero-scope {
              height: 56vh;
              min-height: 400px;
            }

            .contact-page-compact .ecosol-contact-info-scope {
              padding: 48px 0 20px 0;
            }

            .contact-page-compact .ecosol-contact-info-scope .rich-info-box {
              min-height: auto;
              padding: 28px 20px;
            }

            .contact-page-compact .ecosol-enquiry-scope {
              padding: 16px 0 48px 0;
            }

            .contact-page-compact .ecosol-enquiry-scope .enquiry-header {
              margin-bottom: 28px;
            }

            .contact-page-compact .ecosol-enquiry-scope .enquiry-form {
              padding: 28px 20px;
              gap: 16px;
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
