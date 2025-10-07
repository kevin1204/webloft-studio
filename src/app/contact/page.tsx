import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Contact Webloft Studio | Toronto Web Design | Free Consultation",
  description: "Contact Webloft Studio for professional web design services in Toronto. Get your free consultation and start growing your business online today.",
  alternates: {
    canonical: 'https://webloftstudio.com/contact'
  }
};

export default function Contact() {
  return <ContactForm />;
}