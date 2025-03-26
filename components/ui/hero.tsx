import Image from 'next/image';

function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          RunAsh AI - Live Streaming for Sales
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Revolutionize your sales with AI-powered live streaming
        </p>
        <Image
          src="/hero-image.png"
          alt="RunAsh AI Hero Image"
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
