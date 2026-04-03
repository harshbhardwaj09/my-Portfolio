import ContactForm from '@/components/pages/contactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Harsh Bhardwaj — Full Stack Developer. Send a message for freelance work, collaboration, or any inquiry.',
  openGraph: {
    title: 'Contact | Harsh Bhardwaj',
    description:
      'Reach out to Harsh Bhardwaj for freelance work, collaboration, or any inquiry.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6">
      <ContactForm />
    </div>
  );
}
