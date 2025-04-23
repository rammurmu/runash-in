"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Mail,
  Briefcase,
  MapPin,
  Clock,
} from "lucide-react"
//... import ThemeToggle from "@/components/theme-toggle" ...//
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PressPage() {
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
            {/* <ThemeToggle /> */}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm">
              <span className="text-orange-600 dark:text-orange-400">Press & Media</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
              RunAsh AI in the News
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              The latest news, press releases, and media resources for RunAsh AI's live streaming platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
              >
                Press Releases <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
              >
                Media Kit <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Press Content */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="press-releases" className="mb-8">
              <TabsList className="bg-orange-100/50 dark:bg-orange-900/20">
                <TabsTrigger value="press-releases">Press Releases</TabsTrigger>
                <TabsTrigger value="news">News Coverage</TabsTrigger>
                <TabsTrigger value="media-kit">Media Kit</TabsTrigger>
                <TabsTrigger value="contact">Press Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="press-releases" className="mt-6">
                <div className="space-y-8">
                  <PressReleaseCard
                    title="RunAsh AI Raises $20M Series A to Transform Live Streaming with AI"
                    date="June 15, 2023"
                    excerpt="Funding will accelerate product development and global expansion of the AI-powered live streaming platform."
                    link="#"
                  />
                  <PressReleaseCard
                    title="RunAsh AI Launches Revolutionary Real-time Video Enhancement Technology"
                    date="May 3, 2023"
                    excerpt="New AI-powered features automatically enhance video quality, reduce noise, and optimize bandwidth in real-time."
                    link="#"
                  />
                  <PressReleaseCard
                    title="RunAsh AI Partners with Major Gaming Platforms to Enhance Streaming Experience"
                    date="April 12, 2023"
                    excerpt="Strategic partnerships will bring AI-powered streaming enhancements to millions of gamers worldwide."
                    link="#"
                  />
                  <PressReleaseCard
                    title="RunAsh AI Announces Public Beta Launch"
                    date="March 1, 2023"
                    excerpt="After months of private testing, RunAsh AI opens its platform to public beta users."
                    link="#"
                  />
                  <PressReleaseCard
                    title="RunAsh AI Founded to Revolutionize Live Streaming with Artificial Intelligence"
                    date="January 10, 2023"
                    excerpt="Tech industry veterans launch startup focused on bringing advanced AI capabilities to content creators."
                    link="#"
                  />
                </div>
              </TabsContent>

              <TabsContent value="news" className="mt-6">
                <div className="space-y-8">
                  <NewsCard
                    title="'RunAsh AI Is Changing How We Stream' - Tech Today"
                    publication="Tech Today"
                    date="June 20, 2023"
                    excerpt="An in-depth look at how RunAsh AI is transforming the streaming landscape with its innovative AI technology."
                    link="#"
                  />
                  <NewsCard
                    title="'The Future of Streaming: RunAsh AI's Innovative Approach' - Streaming Insider"
                    publication="Streaming Insider"
                    date="May 25, 2023"
                    excerpt="RunAsh AI's platform is setting new standards for video quality and audience engagement in live streaming."
                    link="#"
                  />
                  <NewsCard
                    title="'RunAsh AI Secures Major Funding to Expand AI Streaming Tools' - VentureBeat"
                    publication="VentureBeat"
                    date="June 16, 2023"
                    excerpt="The $20M Series A funding round positions RunAsh AI as a leader in the growing AI-enhanced streaming market."
                    link="#"
                  />
                  <NewsCard
                    title="'How RunAsh AI Is Making Professional-Quality Streaming Accessible to All' - Creator Economy"
                    publication="Creator Economy"
                    date="April 30, 2023"
                    excerpt="RunAsh AI's technology is democratizing high-quality streaming, allowing creators of all sizes to produce professional content."
                    link="#"
                  />
                </div>
              </TabsContent>

              <TabsContent value="media-kit" className="mt-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-orange-200/50 dark:border-orange-900/30">
                  <h2 className="text-2xl font-bold mb-6">Media Kit Resources</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    Download official RunAsh AI logos, product screenshots, founder photos, and brand guidelines for
                    media use.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <MediaKitCard
                      title="Logo Package"
                      description="RunAsh AI logos in various formats and colors"
                      icon={<FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />}
                    />
                    <MediaKitCard
                      title="Product Screenshots"
                      description="High-resolution screenshots of the RunAsh AI platform"
                      icon={<FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />}
                    />
                    <MediaKitCard
                      title="Founder Photos"
                      description="Professional headshots of RunAsh AI's founding team"
                      icon={<FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />}
                    />
                    <MediaKitCard
                      title="Brand Guidelines"
                      description="Official brand colors, typography, and usage guidelines"
                      icon={<FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />}
                    />
                  </div>

                  <div className="mt-8 text-center">
                    <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white">
                      Download Complete Media Kit <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contact" className="mt-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-orange-200/50 dark:border-orange-900/30">
                  <h2 className="text-2xl font-bold mb-6">Press Contact</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    For press inquiries, interview requests, or additional information about RunAsh AI, please contact
                    our media relations team.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                        <Mail className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-1">For press inquiries:</p>
                        <a
                          href="mailto:press@runash.ai"
                          className="text-orange-600 dark:text-orange-400 hover:underline"
                        >
                          press@runash.ai
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                        <Globe className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Social Media</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-1">Follow us for the latest updates:</p>
                        <div className="flex gap-3 mt-2">
                          <a href="#" className="text-orange-600 dark:text-orange-400 hover:underline">
                            Twitter
                          </a>
                          <a href="#" className="text-orange-600 dark:text-orange-400 hover:underline">
                            LinkedIn
                          </a>
                          <a href="#" className="text-orange-600 dark:text-orange-400 hover:underline">
                            Instagram
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                        <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Interview Requests</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-1">
                          For interview requests with our founders or team members, please email with the subject line
                          "Interview Request" and include your publication details and deadline.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800/30">
                    <h3 className="font-semibold text-lg mb-2">Press List Signup</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Join our press list to receive the latest news and updates from RunAsh AI.
                    </p>
                    <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white">
                      Subscribe to Press Updates
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* In The News */}
      <section className="py-20 bg-gradient-to-b from-white via-orange-50/50 to-white dark:from-gray-950 dark:via-orange-950/20 dark:to-gray-950 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
              Featured In
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              RunAsh AI has been featured in leading technology and business publications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800/30 rounded-xl hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-full h-12 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10 dark:from-orange-500/20 dark:via-yellow-500/20 dark:to-orange-500/20 rounded-md flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 font-semibold">Publication {i}</span>
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
                Experience RunAsh AI Today
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
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
              >
                Request Demo
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
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/press"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 text-transparent bg-clip-text">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/features"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/integrations"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 text-transparent bg-clip-text">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/docs"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/tutorials"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 text-transparent bg-clip-text">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Contact
                  </a>
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

// Component for Press Release Card
function PressReleaseCard({
  title,
  date,
  excerpt,
  link,
}: { title: string; date: string; excerpt: string; link: string }) {
  return (
    <div className="border border-orange-200/50 dark:border-orange-900/30 rounded-lg p-6 bg-white dark:bg-gray-900 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
      <a
        href={link}
        className="inline-flex items-center text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
      >
        Read Press Release <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  )
}

// Component for News Card
function NewsCard({
  title,
  publication,
  date,
  excerpt,
  link,
}: { title: string; publication: string; date: string; excerpt: string; link: string }) {
  return (
    <div className="border border-orange-200/50 dark:border-orange-900/30 rounded-lg p-6 bg-white dark:bg-gray-900 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-orange-600 dark:text-orange-400">{publication}</span>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
      <a
        href={link}
        className="inline-flex items-center text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
      >
        Read Article <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </div>
  )
}

// Component for Media Kit Card
function MediaKitCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="border border-orange-200/50 dark:border-orange-900/30 rounded-lg p-6 bg-white dark:bg-gray-900 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
          >
            Download <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Component for Job Card
function JobCard({
  title,
  department,
  location,
  type,
  featured,
}: { title: string; department: string; location: string; type: string; featured: boolean }) {
  return (
    <div
      className={`border ${featured ? "border-orange-500/50 bg-orange-50/50 dark:bg-orange-900/20" : "border-orange-200/50 dark:border-orange-900/30 bg-white dark:bg-gray-900"} rounded-lg p-6 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold">{title}</h3>
            {featured && (
              <span className="px-2 py-1 text-xs font-medium bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 rounded-full">
                Featured
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>{department}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{type}</span>
            </div>
          </div>
        </div>
        <Button
          className={`mt-4 md:mt-0 ${
            featured
              ? "bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
              : "border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
          }`}
        >
          Apply Now
        </Button>
      </div>
    </div>
  )
      }
      
    
