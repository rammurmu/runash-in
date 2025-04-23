"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Building, Clock, Globe, Heart, MapPin, Search, Star, Check } from "lucide-react"
import Link from "next/link"
//... import ThemeToggle from "@/components/theme-toggle" ...//
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const JobCard = ({
  title,
  department,
  location,
  type,
  featured,
}: { title: string; department: string; location: string; type: string; featured: boolean }) => {
  return (
    <Card className="border-orange-200/50 dark:border-orange-900/30">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{department}</p>
          </div>
          {featured && (
            <div className="px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <MapPin className="h-4 w-4" />
          {location}
        </div>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
          <Briefcase className="h-4 w-4" />
          {type}
        </div>
        <Link
          href="/apply"
          className="inline-flex items-center mt-4 text-orange-600 dark:text-orange-400 hover:underline"
        >
          Apply Now <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

const BenefitCard = ({
  icon,
  title,
  description,
  gradient,
}: { icon: React.ReactNode; title: string; description: string; gradient: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className={`flex items-center justify-center p-6 bg-gradient-to-br ${gradient}`}>{icon}</div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default function CareersPage() {
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
              <span className="text-orange-600 dark:text-orange-400">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
              Build the Future of Live Streaming
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Join our team of innovators and help shape the next generation of AI-powered streaming technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
              >
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
              >
                Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-orange-200/50 dark:border-orange-900/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search positions"
                    className="pl-10 bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70"
                  />
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 dark:bg-gray-900/90 border-orange-200 dark:border-orange-800/30">
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 dark:bg-gray-900/90 border-orange-200 dark:border-orange-800/30">
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="sf">San Francisco</SelectItem>
                      <SelectItem value="nyc">New York</SelectItem>
                      <SelectItem value="london">London</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 text-transparent bg-clip-text">
              Open Positions
            </h2>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="bg-orange-100/50 dark:bg-orange-900/20">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  <JobCard
                    title="Senior AI Engineer"
                    department="Engineering"
                    location="San Francisco, CA"
                    type="Full-time"
                    featured={true}
                  />
                  <JobCard
                    title="Product Manager, AI Features"
                    department="Product"
                    location="Remote"
                    type="Full-time"
                    featured={true}
                  />
                  <JobCard
                    title="UX/UI Designer"
                    department="Design"
                    location="London, UK"
                    type="Full-time"
                    featured={false}
                  />
                  <JobCard
                    title="Growth Marketing Manager"
                    department="Marketing"
                    location="New York, NY"
                    type="Full-time"
                    featured={false}
                  />
                  <JobCard
                    title="Backend Engineer"
                    department="Engineering"
                    location="Remote"
                    type="Full-time"
                    featured={false}
                  />
                  <JobCard
                    title="DevOps Engineer"
                    department="Engineering"
                    location="San Francisco, CA"
                    type="Full-time"
                    featured={false}
                  />
                  <JobCard
                    title="Technical Support Specialist"
                    department="Operations"
                    location="Remote"
                    type="Full-time"
                    featured={false}
                  />
                </div>
              </TabsContent>

              <TabsContent value="engineering" className="mt-6">
                <div className="space-y-4">
                  <JobCard
                    title="Senior AI Engineer"
                    department="Engineering"
                    location="San Francisco, CA"
                    type="Full-time"
                    featured={true}
                  />
                  <JobCard
                    title="Backend Engineer"
                    department="Engineering"
                    location="Remote"
                    type="Full-time"
                    featured={false}
                  />
                  <JobCard
                    title="DevOps Engineer"
                    department="Engineering"
                    location="San Francisco, CA"
                    type="Full-time"
                    featured={false}
                  />
                </div>
              </TabsContent>

              <TabsContent value="product" className="mt-6">
                <div className="space-y-4">
                  <JobCard
                    title="Product Manager, AI Features"
                    department="Product"
                    location="Remote"
                    type="Full-time"
                    featured={true}
                  />
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-6">
                <div className="space-y-4">
                  <JobCard
                    title="UX/UI Designer"
                    department="Design"
                    location="London, UK"
                    type="Full-time"
                    featured={false}
                  />
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="mt-6">
                <div className="space-y-4">
                  <JobCard
                    title="Growth Marketing Manager"
                    department="Marketing"
                    location="New York, NY"
                    type="Full-time"
                    featured={false}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Don't see a position that matches your skills?</p>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
              >
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white via-orange-50/50 to-white dark:from-gray-950 dark:via-orange-950/20 dark:to-gray-950 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
              Why Work With Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              We offer competitive compensation and a comprehensive benefits package designed to support your wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Heart className="h-6 w-6 text-white" />}
              title="Health & Wellness"
              description="Comprehensive health, dental, and vision insurance for you and your dependents."
              gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
            />
            <BenefitCard
              icon={<Clock className="h-6 w-6 text-white" />}
              title="Flexible Work"
              description="Flexible working hours and remote work options to support your work-life balance."
              gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
            />
            <BenefitCard
              icon={<Star className="h-6 w-6 text-white" />}
              title="Competitive Compensation"
              description="Competitive salary, equity options, and performance bonuses."
              gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
            />
            <BenefitCard
              icon={<Building className="h-6 w-6 text-white" />}
              title="Learning & Development"
              description="Continuous learning opportunities, conference stipends, and career growth."
              gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
            />
            <BenefitCard
              icon={<Globe className="h-6 w-6 text-white" />}
              title="Remote-Friendly"
              description="Work from anywhere with our distributed team across multiple time zones."
              gradient="from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400"
            />
            <BenefitCard
              icon={<Briefcase className="h-6 w-6 text-white" />}
              title="Paid Time Off"
              description="Generous vacation policy, paid holidays, and parental leave."
              gradient="from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400"
            />
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
                Our Culture
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                At RunAsh, we're building a culture that values innovation, collaboration, and impact. We believe in
                empowering our team to do their best work in an environment that's supportive, inclusive, and fun.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 p-2 rounded-lg">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Innovation First</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We encourage creative thinking and bold ideas to solve complex problems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-gradient-to-br from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 p-2 rounded-lg">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Diverse & Inclusive</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We celebrate diversity and create an inclusive environment where everyone can thrive.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 p-2 rounded-lg">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">User-Focused</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We put our users at the center of everything we build and every decision we make.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">

            {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-yellow-500/50 to-orange-500/50 dark:from-orange-500/30 dark:via-yellow-500/30 dark:to-orange-500/30 rounded-xl p-[1px]">
                <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl"></div>
              </div>

              <div className="relative p-2 rounded-xl overflow-hidden">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="RunAsh team culture"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 via-yellow-500/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-500/20 via-orange-500/20 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
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
                Ready to Join Our Team?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Explore our open positions and take the next step in your career with RunAsh AI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
              >
                View All Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
              >
                Meet the Team
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
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Contact
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
                    href="/blog"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/help"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 text-transparent bg-clip-text">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://linkedin.com"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 text-transparent bg-clip-text">
                Subscribe
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Stay up to date with the latest news, articles, and resources.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70 rounded-r-none"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} RunAsh AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
        }
