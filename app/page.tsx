import { Button } from "@/components/ui/button"
import { Play, Zap, Users, Shield, ArrowRight } from "lucide-react"
import VideoBackground from "@/components/ui/video-background"
import FeatureCard from "@/components/ui/feature-card"
import Navbar from "@/components/ui/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            RunAsh AI Live Streaming Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            The next generation of AI-powered live streaming for creators, gamers, and businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Start Streaming <Play className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950">
              Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight className="h-8 w-8 transform rotate-90 text-purple-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Powerful AI Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-purple-400" />}
              title="AI-Enhanced Streaming"
              description="Automatically enhance your video quality, reduce noise, and optimize bandwidth in real-time."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-400" />}
              title="Smart Audience Engagement"
              description="AI-powered chat moderation and audience analytics to boost engagement."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-purple-400" />}
              title="Content Protection"
              description="Advanced AI content monitoring to protect your brand and comply with platform guidelines."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">How RunAsh Works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-purple-900/30 aspect-video bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
              <Play className="h-20 w-20 text-white opacity-80" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sign Up & Connect</h3>
                  <p className="text-gray-300">Create your account and connect your streaming sources in minutes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customize Your Stream</h3>
                  <p className="text-gray-300">Set up AI enhancements, overlays, and engagement tools.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Go Live with AI</h3>
                  <p className="text-gray-300">Start streaming with real-time AI enhancements and analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Streams?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of content creators who are elevating their streaming with RunAsh AI.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
            Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">RunAsh</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} RunAsh AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
        }
        
