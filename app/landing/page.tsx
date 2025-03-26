import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image"

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Live streaming platform</title>
        <link rel="icon" href="/" />
       
      </Head>

      <main className="mt-16 flex w-full flex-1 flex-col items-center justify-centre px-20 p-12 text-center">
        <div className="mt-0 flex max-w-2xl flex-wrap items-center justify-around sm:w-full">
          <text className="mt-0 w-80 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white">
            <p className="text-1xl  font-normal"><button className="bg-orange-500 text-white font-n py-1 px-3 rounded mt-0">Latest</button> Introducing RunAsh rOS &rarr;</p>   
          </text>
          </div> 
        <h1 className="mt-14 text-6xl font-bold ">
          Live retail streaming<br />
          <a className="text-orange-500" href="https://login">
            platform
          </a>
        </h1>

        <p className="mt-12 text-2xl">
          Where the retailers build own live streaming
        </p>
        <div className="flex gap-4 mt-10 max-w-0xl flex-wrap items-center justify-around">
        <button className="mt-3 w-64 bg-black text-white hover:bg-orange-600 hover:text-white font-b py-4 px-8 border hover:border-orange-500 rounded-md text-centre">
          <Link href="/login">
            <a>Go live </a>
          </Link>
        </button>
        <button className="mt-3  w-64 bg-black text-white hover:bg-orange-500 hover:text-white font-b py-4 px-8 border hover:border-orange-500 rounded-md text-centre">
          <Link href="">
            <a>Get watch</a>
          </Link>
        </button>
        </div>
        <p className="mt-12 text-0xl bottom-2 animate-bounce">
            Get started free <Link href="/login"><a className='text-blue-600'>&rarr;</a></Link>
        </p>
           <h1 className="mt-2 text-2xl font-b">
                <a className="text-black-600 " href="https://login">
                Unique experience ✨
                </a>
            </h1>
            <p className="mt-2 text-1xl bottom-2 ">
                AI live streaming platform built specifically for automative sales experience 
            </p>
        <div className="mt-12 flex max-w-2xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white"
          >
            <h3 className="text-2xl font-bold">Real Selling</h3>
            <p className="mt-4 text-xl">
              Where retailers can meet to buyers & demonstrate their products
              <br />
                <Link href="/sell">
                <a className="text-blue-600">Sell Now &rarr;</a>
                </Link>
              </p>
          </a>

          <a
            href="https://sell"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Real Buying</h3>
            <p className="mt-4 text-xl">
              Where buyers can meet to sellers & buy their products by live
              <br />
                <Link href="/buy">
                <a className='text-blue-600'>Shop Now &rarr;</a>
                </Link>
            </p>
          </a>

          <a
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <code className="text-orange-700 bg-orange-50 rounded-xl text-n font-n p-6 px-2 py-2 text-centre"> New </code>
            <h3 className="text-2xl font-bold">RunAshChat</h3>
            <p className="mt-4 text-xl">
              RunAshChat is a custom-built conversational AI model
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Chat Now &rarr;</a>
                </Link>
            </p>
          </a>

          <a
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Live Stream</h3>
            <p className="mt-4 text-xl">
              Get schedule for a live streaming free
              <br />
                <Link href="/schedule">
                <a className='text-blue-600'>Schedule &rarr;</a>
                </Link>
            </p>
          </a>
          <a 
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
           <h3 className="text-2xl font-bold">Live Watch</h3>
            <p className="mt-4 text-xl">
              Watch previous live streaming free
              <br />
                <Link href="/watch">
                <a className='text-blue-600'>Watch &rarr;</a>
                </Link>
            </p>
          </a>
          <a
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Live Q & A</h3>
            <p className="mt-4 text-xl">
              Ask question & give answer for live sell & buy 
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
            </a>
            <a
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Influencers</h3>
            <p className="mt-4 text-xl">
              Find & follow live influencers & get support 
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
          </a>
          <a
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Live Insight</h3>
            <p className="mt-4 text-xl">
              Get live streaming insight overview 
              <br />
                <Link href="/login">
                <a className='text-blue-600'>View &rarr;</a>
                </Link>
            </p>
            </a>
            <a
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Votes & Polls</h3>
            <p className="mt-4 text-xl">
              Give instant feedback, opinion & polling for sell & buy
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Give feedback &rarr;</a>
                </Link>
            </p>
            </a>
            <a
            href="https://about"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="mt-4 text-xl">
              An AI live streaming platform built specifically for automative sales
              <br />
                <Link href="/about">
                <a className='text-blue-600'>Learn more &rarr;</a>
                </Link>
            </p>
            </a>
            <a
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Work@Startup</h3>
            <p className="mt-4 text-xl">
              Find the best startup jobs curated by runash team
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Apply &rarr;</a>
                </Link>
            </p>
          </a>
          <a
            href="https://login"
            className="mt-6 w-80 rounded-xl border p-6 text-left focus:text-blue-600"
          >
            <code className="text-green-700 bg-green-50 rounded-xl text-n font-n p-6 px-2 py-2 text-centre">Comeing soon</code>
            <h3 className="text-2xl font-bold">Mobile App</h3>
            <p className="mt-4 text-xl">
              Download the RunAsh app available for iSO & Android
              <br />
                <Link href="/login">
                <a className='text-blue-600'>Download &rarr;</a>
                </Link>
            </p>
          </a>
        </div>
        <p className="mt-8 text-1xl text-center text-black hover:text-black bottom-1">
          Explore features,benifits and experience <Link href="/blog"><a className='text-blue-600'>&rarr;</a></Link>
        </p>
        <div className='mt-8'>
        <h1 className="mt-12 text-2xl font-bold text-orange-500 bottom-2">
          BEGIN YOUR LIVE JOURNEY 
        </h1>

        <p className="mt-2 text-1xl text-centre text-black bottom-1">
          Lets building your live selling and shopping experience 
        </p>
        </div>
         
       
        <div className="flex gap-6 mt-10 max-w-0xl flex-wrap items-center justify-around">
        <button className="mt-3 w-64 bg-black text-white hover:bg-orange-600 hover:text-white font-b py-4 px-8 border hover:border-orange-500 rounded-md">
          <Link href="/login">
            <a>Get Started</a>
          </Link>
        </button>
        <button className="mt-3 w-64 bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-b py-4 px-8 border hover:border-orange-500 rounded-md">
          <Link href="/blog">
            <a>Learn More</a>
          </Link>
        </button>
        </div>

        <div className="mt-8 flex w-80 flex-wrap item-centre rounded-xl border justify-around bg-shadow-lg sm:w-full p-8">
          <p className="mt-3 text-1xl text-bold">
            Get live updates
          </p>
          <input className="mt-3 w-48 text-sm border hover:border-orange-500 rounded-md py-2 pl-10" type="text" aria-label="Email address" placeholder="Email address"></input>
          <button className="mt-3 w-48 bg-black text-white hover:bg-black hover:text-white font-b py-3 px-14 border hover:border-black rounded-md">Subscribe</button>
        </div>
      </main>
    </div>
  )
}

        
