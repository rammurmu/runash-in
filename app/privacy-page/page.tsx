import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | RunAsh AI</title>
        <meta name="description" content="RunAsh AI's privacy policy" />
      </Head>
      <header className="bg-gray-900 py-12">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-lg text-white">RunAsh AI is committed to protecting your privacy</p>
        </div>
      </header>
      <main className="container mx-auto p-4 pt-6">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-lg">
            RunAsh AI is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, and share your personal data.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-lg">
            We collect the following types of information:
          </p>
          <ul className="list-none mb-4">
            <li className="mb-2">
              <span className="font-bold">Personal Data:</span> We collect personal data such as your name, email address, and password when you create an account on our platform.
            </li>
            <li className="mb-2">
              <span className="font-bold">Usage Data:</span> We collect usage data such as your IP address, browser type, and operating system when you use our platform.
            </li>
            <li className="mb-2">
              <span className="font-bold">Cookie Data:</span> We use cookies to collect data about your interactions with our platform.
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-lg">
            We use your information to:
          </p>
          <ul className="list-none mb-4">
            <li className="mb-2">
              <span className="font-bold">Provide Our Services:</span> We use your information to provide our services to you, including processing your payments and providing you with access to our platform.
            </li>
            <li className="mb-2">
              <span className="font-bold">Improve Our Services:</span> We use your information to improve our services, including fixing bugs and adding new features.
            </li>
            <li className="mb-2">
              <span className="font-bold">Communicate with You:</span> We use your information to communicate with you, including sending you emails and notifications.
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How We Share Your Information</h2>
          <p className="text-lg">
            We share your information with:
          </p>
          <ul className="list-none mb-4">
            <li className="mb-2">
              <span className="font-bold">Our Service Providers:</span> We share your information with our service providers, including our payment processor and our email service provider.
            </li>
            <li className="mb-2">
              <span className="font-bold">Our Partners:</span> We share your information with our partners, including our partners who help us to improve our services.
            </li>
            <li className="mb-2">
              <span className="font-bold">Law Enforcement:</span> We share your information with law enforcement agencies if we are required to do so by law.
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-lg">
            You have the following rights:
          </p>
          <ul className="list-none mb-4">
            <li className="mb-2">
              <span className="font-bold">Right to Access:</span> You have the right to access your personal data.
            </li>
            <li className="mb-2">
              <span className="font-bold">Right to Rectification:</span> You have the right to rectify any inaccuracies in your personal data.
            </li>
            <li className="mb-2">
              <span className="font-bold">Right to Erasure:</span> You have the right to request that we erase your personal data.
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p className="text-lg">
            We may make changes to this policy at any time. If we make any changes, we will notify you by posting a notice on our website.
          </p>
        </section>
      </main>
    </div>
  );
      }
