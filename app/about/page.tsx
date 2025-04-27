"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Globe, Layers, Shield, Zap } from "lucide-react"
import Link from "next/link"
import TeamMember from "@/components/team-member"
import TechStack from "@/components/tech-stack"
import Milestone from "@/components/milestone"
import ThemeToggle from "@/components/theme-toggle"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-white dark:from-gray-950 dark:via-orange-950/30 dark:to-gray-950"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 dark:opacity-10"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm">
              <span className="text-orange-600 dark:text-orange-400">About Our Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
              Revolutionizing Live Streaming with AI
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              We're building the future of content creation by combining cutting-edge AI technology with seamless
              streaming experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 text-transparent bg-clip-text">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                Founded in 2023, RunAsh was born from a simple idea: what if AI could make live streaming more engaging,
                accessible, and powerful for everyone?
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                Today, we're on a mission to democratize high-quality content creation by putting advanced AI tools in
                the hands of creators worldwide, regardless of their technical expertise or equipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Empower Creators</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Giving content creators AI tools that were once only available to large studios.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-gradient-to-br from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Global Reach</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Breaking down technical barriers to help creators connect with audiences worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Ethical Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Developing AI that respects privacy and promotes positive content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-orange-200 dark:border-orange-800/20 shadow-2xl shadow-orange-500/10">
                <div className="aspect-video bg-gradient-to-br from-orange-100 via-white to-yellow-100 dark:from-orange-900/80 dark:via-gray-900/80 dark:to-yellow-900/80 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 mb-6">
                      <Cpu className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AI-Powered Vision</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Transforming how creators connect with their audience
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-orange-500/10 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-yellow-500/10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white via-orange-50/50 to-white dark:from-gray-950 dark:via-orange-950/20 dark:to-gray-950 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
              Meet Our Team
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              We're a diverse group of engineers, designers, and AI specialists united by our passion for creating the
              future of live streaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Alex Chen"
              role="Founder & CEO"
              image="/placeholder.svg?height=300&width=300"
              bio="Former AI researcher with 10+ years experience in machine learning and computer vision."
              socialLinks={{
                twitter: "https://twitter.com/alexchen",
                linkedin: "https://linkedin.com/in/alexchen",
              }}
              gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
            />
            <TeamMember
              name="Sarah Johnson"
              role="CTO"
              image="/placeholder.svg?height=300&width=300"
              bio="Led engineering teams at major streaming platforms before joining to build our AI infrastructure."
              socialLinks={{
                twitter: "https://twitter.com/sarahjohnson",
                linkedin: "https://linkedin.com/in/sarahjohnson",
              }}
              gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
            />
            <TeamMember
              name="Michael Rodriguez"
              role="Head of Product"
              image="/placeholder.svg?height=300&width=300"
              bio="Product visionary with experience at leading tech companies focused on creator tools."
              socialLinks={{
                twitter: "https://twitter.com/michaelrodriguez",
                linkedin: "https://linkedin.com/in/michaelrodriguez",
              }}
              gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
            />
            <TeamMember
              name="Priya Patel"
              role="Lead AI Engineer"
              image="/placeholder.svg?height=300&width=300"
              bio="Specializes in real-time video processing and neural networks for content enhancement."
              socialLinks={{
                twitter: "https://twitter.com/priyapatel",
                linkedin: "https://linkedin.com/in/priyapatel",
              }}
              gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
            />
            <TeamMember
              name="David Kim"
              role="UX Director"
              image="/placeholder.svg?height=300&width=300"
              bio="Award-winning designer focused on creating intuitive interfaces for complex AI tools."
              socialLinks={{
                twitter: "https://twitter.com/davidkim",
                linkedin: "https://linkedin.com/in/davidkim",
              }}
              gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
            />
            <TeamMember
              name="Emma Wilson"
              role="Head of Community"
              image="/placeholder.svg?height=300&width=300"
              bio="Former content creator who understands the challenges streamers face every day."
              socialLinks={{
                twitter: "https://twitter.com/emmawilson",
                linkedin: "https://linkedin.com/in/emmawilson",
              }}
              gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-yellow-500/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-orange-500/20 to-transparent blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
              Our Technology
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              We've built a powerful AI ecosystem that works seamlessly in real-time to enhance every aspect of your
              live streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechStack
              icon={<Cpu className="h-8 w-8 text-orange-500 dark:text-orange-400" />}
              title="Neural Processing"
              description="Our custom neural networks analyze and enhance video and audio in real-time with minimal latency."
              gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
            />
            <TechStack
              icon={<Layers className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />}
              title="Multi-modal AI"
              description="Combines computer vision, natural language processing, and audio analysis for comprehensive stream enhancement."
              gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
            />
            <TechStack
              icon={<Code className="h-8 w-8 text-orange-500 dark:text-orange-400" />}
              title="Edge Computing"
              description="Distributed AI processing ensures smooth performance regardless of your internet connection."
              gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
            />
            <TechStack
              icon={<Shield className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />}
              title="Privacy-First Design"
              description="All processing happens on your device or in secure cloud environments with strict privacy controls."
              gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
            />
            <TechStack
              icon={<Zap className="h-8 w-8 text-orange-500 dark:text-orange-400" />}
              title="Real-time Optimization"
              description="Adaptive algorithms that adjust to your streaming conditions for consistent quality."
              gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
            />
            <TechStack
              icon={<Globe className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />}
              title="Global Infrastructure"
              description="Servers strategically located worldwide to ensure low-latency streaming for global audiences."
              gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white via-orange-50/50 to-white dark:from-gray-950 dark:via-orange-950/20 dark:to-gray-950 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
              Our Journey
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              From concept to cutting-edge platform, see how we've evolved to lead the AI streaming revolution.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500 dark:from-orange-400 dark:via-yellow-400 dark:to-orange-400 rounded-full"></div>

            <div className="space-y-24">
              <Milestone
                year="2023"
                title="Company Founded"
                description="Our founding team came together with a vision to revolutionize live streaming with AI technology."
                position="left"
                gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
              />
              <Milestone
                year="2023"
                title="Seed Funding"
                description="Secured $5M in seed funding to build our core AI technology and assemble our engineering team."
                position="right"
                gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
              />
              <Milestone
                year="2024"
                title="Beta Launch"
                description="Released our beta platform to select content creators, gathering valuable feedback and refining our technology."
                position="left"
                gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
              />
              <Milestone
                year="2024"
                title="Public Release"
                description="Launched our platform to the public, introducing our suite of AI-powered streaming tools to creators worldwide."
                position="right"
                gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
              />
              <Milestone
                year="2025"
                title="The Future"
                description="Expanding our AI capabilities and building new features to further empower content creators across the globe."
                position="left"
                gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
              Our Partners
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              We collaborate with industry leaders to bring you the best streaming experience possible.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800/30 rounded-xl hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-full h-12 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10 dark:from-orange-500/20 dark:via-yellow-500/20 dark:to-orange-500/20 rounded-md flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 font-semibold">Partner {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/70 via-yellow-100/70 to-orange-100/70 dark:from-orange-900/30 dark:via-yellow-900/30 dark:to-orange-900/30"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/80 to-orange-50/80 dark:from-gray-900/80 dark:to-orange-950/80 border border-orange-200/50 dark:border-orange-800/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
                Ready to Transform Your Streams?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Join thousands of content creators who are already using our AI-powered platform to create stunning live
                streams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
              >
                Start Streaming Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-gray-950 border-t border-orange-200/50 dark:border-orange-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 text-transparent bg-clip-text">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 text-transparent bg-clip-text">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 text-transparent bg-clip-text">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 text-transparent bg-clip-text">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} RunAsh AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
