
"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, X } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 w-full z-10 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">RunAsh</span>
            <span>AI</span>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
            <source src="/api/video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to make text more readable */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-1 flex min-h-screen py-20 md:py-0">
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16">
            {/* Left side - Text content */}
            <div className="flex-1 text-white text-center md:text-left pt-16 md:pt-0">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Start Your Journey Today</h1>
              <p className="mt-6 text-lg sm:text-xl max-w-md mx-auto md:mx-0">
                Join thousands of users who have already transformed their experience with our platform.
              </p>
              <div className="mt-8 hidden md:block">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right side - Auth forms */}
            <div className="flex-1 w-full max-w-md">
              <div className="bg-card/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Get Started</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <LoginForm />
                  </TabsContent>
                  <TabsContent value="signup">
                    <SignupForm />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our platform offers everything you need to succeed in today's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Seamless Integration",
                description: "Connect with all your favorite tools and services without any hassle.",
              },
              {
                title: "Advanced Security",
                description: "Your data is protected with enterprise-grade security and encryption.",
              },
              {
                title: "24/7 Support",
                description: "Our dedicated team is always available to help you with any issues.",
              },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/50">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl mb-4 md:mb-0">
            <span className="text-primary">RunAsh</span>
            <span>AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RunAsh AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

    
