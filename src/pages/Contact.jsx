import ContactHero from "../components/contact/ContactHero";
import ContactInformation from "../components/contact/ContactInformation";
import ContactForm from "../components/contact/ContactForm";
import GlobalPresenceContact from "../components/contact/GlobalPresenceContact";
import CredentialsReminder from "../components/contact/CredentialsReminder";

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInformation />
      <ContactForm />
      <GlobalPresenceContact />
      <CredentialsReminder />
    </>
  );
}

export default Contact;
