import Head from 'next/head';

export default function TOS() {
  return (
    <div>
      <Head>
        <title>Terms of Service | RunAsh AI</title>
        <meta name="description" content="Terms of Service for RunAsh AI" />
      </Head>
      <header className="bg-gray-900 py-12">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        </div>
      </header>
      <main className="container mx-auto p-4 pt-6">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-lg">
            These Terms of Service ("Terms") govern your use of the RunAsh AI platform, including all software, hardware, and services provided by RunAsh AI.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
          <p className="text-lg">
            By using the RunAsh AI platform, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the RunAsh AI platform.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Definitions</h2>
          <p className="text-lg">
            For the purposes of these Terms, the following definitions apply:
          </p>
          <ul className="list-none mb-4">
            <li className="mb-2">
              <span className="font-bold">"Platform"</span>: The RunAsh AI platform, including all software, hardware, and services provided by RunAsh AI.
            </li>
            <li className="mb-2">
              <span className="font-bold">"User"</span>: Any individual or organization that uses the RunAsh AI platform.
            </li>
            <li className="mb-2">
              <span className="font-bold">"Content"</span>: Any data, text, images, videos, or other materials uploaded to the RunAsh AI platform.
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Use of the Platform</h2>
          <p className="text-lg">
            You may use the RunAsh AI platform only for lawful purposes and in accordance with these Terms. You must not use the RunAsh AI platform in any way that:
          </p>
          <ul className="list-none mb-4">
            <li className="mb-2">
              infringes the intellectual property rights of any third party;
            </li>
            <li className="mb-2">
              is defamatory, obscene, or otherwise objectionable;
            </li>
            <li className="mb-2">
              constitutes a breach of any applicable law or regulation;
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <p className="text-lg">
            The RunAsh AI platform and all content uploaded to it are the property of RunAsh AI and its licensors. You agree not to reproduce, distribute, or display any content from the RunAsh AI platform without the prior written consent of RunAsh AI.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
          <p className="text-lg">
            The RunAsh AI platform is provided "as is" and "as available" without any warranties of any kind, express or implied.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-lg">
            In no event shall RunAsh AI be liable for any damages arising out of or related to the use of the RunAsh AI platform, including but not limited to any direct, indirect, incidental, special, consequential, or punitive damages.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
          <p className="text-lg">
            These Terms shall be governed by and construed in accordance with the laws of the state of California, without giving effect to any principles of conflicts of law.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Changes to the Terms</h2>
          <p className="text-lg">
            RunAsh AI reserves the right to modify or update these Terms at any time without notice. Your continued use of the RunAsh AI platform after any changes to these Terms shall constitute your acceptance of such changes.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Entire Agreement</h2>
          <p className="text-lg">
            These Terms constitute the entire agreement between you and RunAsh AI regarding the use of the RunAsh AI platform and supersede all prior or contemporaneous agreements or understandings.
          </p>
        </section>
      </main>
    </div>
  );
        }
