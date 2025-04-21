import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Phone, Clock, HelpCircle, ArrowRight } from "lucide-react"
import ContactsForm from "@/components/ui/contacts-form"
import ContactMethod from "@/components/ui/contact-method"
import FaqItem from "@/components/ui/faq-item"
import OfficeLocation from "@/components/ui/office-location"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 left-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-purple-500/30 rounded-full bg-purple-900/10 backdrop-blur-sm">
              <span className="text-purple-300">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text">
              Contact Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our AI streaming platform? We're here to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-500/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/20 to-transparent blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-teal-500/50 rounded-xl p-[1px]">
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl"></div>
                </div>

                <div className="relative p-8 rounded-xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    Send Us a Message
                  </h2>
                  <ContactsForm />
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                How to Reach Us
              </h2>
              <div className="space-y-6">
                <ContactMethod
                  icon={<Mail className="h-6 w-6 text-purple-400" />}
                  title="Email Us"
                  description="Our team typically responds within 24 hours."
                  contact="support@runash.ai"
                  gradient="from-purple-500 to-blue-500"
                />
                <ContactMethod
                  icon={<Phone className="h-6 w-6 text-blue-400" />}
                  title="Call Us"
                  description="Available Monday-Friday, 9am-5pm PST."
                  contact="+1 (555) 123-4567"
                  gradient="from-blue-500 to-teal-500"
                />
                <ContactMethod
                  icon={<MessageSquare className="h-6 w-6 text-teal-400" />}
                  title="Live Chat"
                  description="Get immediate assistance from our support team."
                  contact="Available 24/7"
                  gradient="from-teal-500 to-purple-500"
                  action={
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700"
                    >
                      Start Chat
                    </Button>
                  }
                />
              </div>

              <div className="mt-12 pt-12 border-t border-purple-900/30">
                <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {["twitter", "instagram", "youtube", "discord"].map((platform) => (
                    <a
                      key={platform}
                      href={`https://${platform}.com/runash`}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-black border border-purple-500/30 flex items-center justify-center hover:border-purple-500/70 transition-colors"
                    >
                      <span className="text-purple-300 capitalize">{platform.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-950/20 to-black relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text">
              Our Offices
            </h2>
            <p className="text-gray-300 text-lg">
              Visit us at one of our global locations or schedule a virtual meeting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OfficeLocation
              city="San Francisco"
              address="123 Tech Avenue, San Francisco, CA 94107"
              phone="+1 (555) 123-4567"
              email="sf@runash.ai"
              image="/placeholder.svg?height=200&width=400"
              hours="Mon-Fri: 9am-5pm PST"
            />
            <OfficeLocation
              city="London"
              address="456 Innovation Street, London, UK EC2A 4BQ"
              phone="+44 20 1234 5678"
              email="london@runash.ai"
              image="/placeholder.svg?height=200&width=400"
              hours="Mon-Fri: 9am-5pm GMT"
            />
            <OfficeLocation
              city="Tokyo"
              address="789 Future Building, Shibuya, Tokyo 150-0002"
              phone="+81 3 1234 5678"
              email="tokyo@runash.ai"
              image="/placeholder.svg?height=200&width=400"
              hours="Mon-Fri: 9am-5pm JST"
            />
          </div>

          {/* World Map */}
          <div className="mt-16 relative">
            <div className="aspect-[21/9] rounded-xl overflow-hidden border border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-4xl">
                  {/* World map visualization - simplified for this example */}
                  <div className="relative w-full h-full">
                    {/* San Francisco marker */}
                    <div className="absolute left-[20%] top-[40%]">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-ping absolute"></div>
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 relative"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="text-sm font-medium text-purple-300">San Francisco</span>
                      </div>
                    </div>
                    {/* London marker */}
                    <div className="absolute left-[45%] top-[35%]">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 animate-ping absolute"></div>
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 relative"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="text-sm font-medium text-blue-300">London</span>
                      </div>
                    </div>
                    {/* Tokyo marker */}
                    <div className="absolute left-[80%] top-[40%]">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 animate-ping absolute"></div>
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 relative"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="text-sm font-medium text-teal-300">Tokyo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-500/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/20 to-transparent blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg">
              Find quick answers to common questions about our platform and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="How quickly can I get started with RunAsh AI?"
              answer="You can sign up and start streaming with our AI enhancements in less than 5 minutes. Our onboarding process is designed to be quick and intuitive."
            />
            <FaqItem
              question="What kind of hardware do I need to use your platform?"
              answer="Our platform works with standard streaming equipment. For basic streaming, you'll need a computer with a modern web browser, a webcam, and a microphone. For professional streaming, we recommend a dedicated camera and microphone setup."
            />
            <FaqItem
              question="Do you offer custom enterprise solutions?"
              answer="Yes, we offer tailored enterprise solutions for businesses with specific needs. Contact our sales team to discuss your requirements and get a custom quote."
            />
            <FaqItem
              question="How does your AI enhance my streams?"
              answer="Our AI technology enhances video quality, reduces background noise, optimizes bandwidth usage, provides real-time translations, and offers smart audience engagement tools, all without requiring technical expertise from you."
            />
            <FaqItem
              question="What platforms can I stream to using RunAsh?"
              answer="RunAsh integrates with all major streaming platforms including Twitch, YouTube, Facebook Live, Instagram Live, and TikTok. You can stream to multiple platforms simultaneously with our Professional and Enterprise plans."
            />
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-950/20 to-black relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text">
              Support Options
            </h2>
            <p className="text-gray-300 text-lg">Choose the support option that works best for you and your team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-teal-500/50 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 bg-black/80 backdrop-blur-sm rounded-xl border border-purple-500/10 group-hover:border-purple-500/30 transition-colors duration-300 h-full">
                <div className="mb-5 p-3 bg-gradient-to-br from-purple-900/50 to-black rounded-lg inline-block">
                  <HelpCircle className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Help Center</h3>
                <p className="text-gray-400 mb-6">
                  Browse our comprehensive knowledge base with tutorials, guides, and troubleshooting tips.
                </p>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/50 w-full">
                  Visit Help Center <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-teal-500/50 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 bg-black/80 backdrop-blur-sm rounded-xl border border-purple-500/10 group-hover:border-purple-500/30 transition-colors duration-300 h-full">
                <div className="mb-5 p-3 bg-gradient-to-br from-blue-900/50 to-black rounded-lg inline-block">
                  <MessageSquare className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community Forum</h3>
                <p className="text-gray-400 mb-6">
                  Connect with other creators, share tips, and get advice from our community experts.
                </p>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/50 w-full">
                  Join Community <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-teal-500/50 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 bg-black/80 backdrop-blur-sm rounded-xl border border-purple-500/10 group-hover:border-purple-500/30 transition-colors duration-300 h-full">
                <div className="mb-5 p-3 bg-gradient-to-br from-teal-900/50 to-black rounded-lg inline-block">
                  <Clock className="h-8 w-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Priority Support</h3>
                <p className="text-gray-400 mb-6">
                  Get dedicated support with faster response times and personalized assistance.
                </p>
                <Button className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 w-full">
                  Upgrade Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-teal-900/30"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-black border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text">
                Ready to Transform Your Streams?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Join thousands of content creators who are already using our AI-powered platform to create stunning live
                streams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 hover:from-purple-700 hover:via-blue-700 hover:to-teal-700 text-white"
              >
                Start Streaming Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/50">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-400 hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-400 to-teal-400 text-transparent bg-clip-text">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Discord
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





          
