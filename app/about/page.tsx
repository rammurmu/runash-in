import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us | RunAsh AI</title>
        <meta name="description" content="Learn more about RunAsh AI and our mission to revolutionize live streaming" />
      </Head>
      <header className="bg-gray-500 py-12">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-white">About Us</h1>
        </div>
      </header>
      <main className="container mx-auto p-4 pt-6">
        <section className="flex flex-wrap justify-center mb-12">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">At RunAsh AI, our mission is to revolutionize the live streaming industry by providing a platform that is fast, reliable, and easy to use.</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-lg">Our team is comprised of experienced professionals who are passionate about live streaming and committed to delivering the best possible experience for our users.</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <p className="text-lg">At RunAsh AI, we value innovation, transparency, and community. We believe that live streaming should be accessible to everyone, and we're committed to making that a reality.</p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 xl:w-1/4 p-6">
              <Image src="public/RAM MURMU PHOTO .jpg" alt="Team Member 1" width={200} height={200} />
              <h3 className="text-lg font-bold mb-2">Ram Murmu</h3>
              <p className="text-lg">CEO & Founder</p>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6">
              <Image src="public/vaibhav photo.jpg" alt="Team Member 2" width={200} height={200} />
              <h3 className="text-lg font-bold mb-2">Vaibhav Murmu</h3>
              <p className="text-lg">CFO & Co-Founder</p>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/4 p-6">
              <Image src="/public/vaibhav photo.jpg" alt="Team Member 3" width={200} height={200} />
              <h3 className="text-lg font-bold mb-2">Puja K Murmu</h3>
              <p className="text-lg">CMO & Co-Founder</p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg">If you have any questions or would like to learn more about RunAsh AI, please don't hesitate to contact us.</p>
          <ul className="list-none mb-4">
            <li className="mb-2">
              <Link href="mailto:admin@runash.in">
                <a className="text-lg text-blue-600 hover:text-blue-800">admin@runash.in</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://twitter.com/runashai">
                <a className="text-lg text-blue-600 hover:text-blue-800">X(Twitter)</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://www.linkedin.com/company/runashai">
                <a className="text-lg text-blue-600 hover:text-blue-800">LinkedIn</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://www.bluesky.com/company/runashai">
                <a className="text-lg text-blue-600 hover:text-blue-800">Bluesky</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://www.githun.com/company/runash">
                <a className="text-lg text-blue-600 hover:text-blue-800">GitHub</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://www.huggingface.com/company/runash-ai">
                <a className="text-lg text-blue-600 hover:text-blue-800">HuggingFace</a>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
      }
