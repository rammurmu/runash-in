"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, Mail } from "lucide-react"

// FAQ data structure
const faqData = [
  {
    category: "general",
    questions: [
      {
        id: "what-is",
        question: "What is RunAsh AI?",
        answer:
          "RunAsh AI is a comprehensive platform designed to help businesses streamline their operations, improve customer engagement, and drive growth through innovative digital solutions.",
      },
      {
        id: "how-works",
        question: "How does RunAsh AI work?",
        answer:
          "Our platform integrates with your existing systems to provide a seamless experience. After signing up, you'll be guided through a simple setup process. Our intuitive dashboard gives you access to all features and analytics in one place.",
      },
      {
        id: "get-started",
        question: "How do I get started?",
        answer:
          "Getting started is easy! Simply sign up for an account on our website, choose a subscription plan that fits your needs, and follow our step-by-step onboarding process. If you need assistance, our support team is available 24/7.",
      },
      {
        id: "supported-platforms",
        question: "Which platforms do you support?",
        answer:
          "We support all major platforms including Windows, macOS, iOS, Android, and web browsers. Our cloud-based solution ensures you can access your data from anywhere, on any device.",
      },
    ],
  },
  {
    category: "pricing",
    questions: [
      {
        id: "subscription-plans",
        question: "What subscription plans do you offer?",
        answer:
          "We offer flexible subscription plans to meet different needs and budgets. Our plans include Basic, Professional, and Enterprise tiers with monthly or annual billing options. Annual subscriptions come with a 20% discount.",
      },
      {
        id: "free-trial",
        question: "Do you offer a free trial?",
        answer:
          "Yes! We offer a 14-day free trial with full access to all features. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial period.",
      },
      {
        id: "refund-policy",
        question: "What is your refund policy?",
        answer:
          "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, contact our support team within 30 days of your purchase for a full refund.",
      },
      {
        id: "payment-methods",
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual subscriptions. All payments are processed securely through our payment partners.",
      },
    ],
  },
  {
    category: "features",
    questions: [
      {
        id: "key-features",
        question: "What are the key features of RunAsh AI?",
        answer:
          "Our key features include real-time analytics, automated reporting, team collaboration tools, customizable dashboards, API integrations, mobile access, and enterprise-grade security.",
      },
      {
        id: "data-security",
        question: "How do you ensure data security?",
        answer:
          "We take data security seriously. Our platform uses industry-standard encryption, regular security audits, and compliance with regulations like GDPR and CCPA. All data is backed up regularly and stored in secure, redundant data centers.",
      },
      {
        id: "integrations",
        question: "Can I integrate with other tools?",
        answer:
          "We offer seamless integrations with popular tools like Salesforce, HubSpot, Slack, Google Workspace, Microsoft 365, and many more. We also provide a robust API for custom integrations.",
      },
      {
        id: "customization",
        question: "Can I customize the platform to my needs?",
        answer:
          "Yes, our platform is highly customizable. You can configure dashboards, reports, notifications, and workflows to match your specific business processes. Enterprise customers also get access to custom development options.",
      },
    ],
  },
  {
    category: "support",
    questions: [
      {
        id: "support-hours",
        question: "What are your support hours?",
        answer:
          "Our customer support team is available 24/7 via chat and email. Phone support is available during business hours (9 AM - 8 PM EST, Monday through Friday).",
      },
      {
        id: "training-resources",
        question: "Do you provide training resources?",
        answer:
          "Yes, we offer comprehensive training resources including video tutorials, documentation, webinars, and a knowledge base. Enterprise customers also receive personalized onboarding and training sessions.",
      },
      {
        id: "technical-issues",
        question: "How do I report technical issues?",
        answer:
          "You can report technical issues through our in-app support chat, by emailing support@example.com, or by calling our technical support line. For critical issues, we guarantee a response within 1 hour.",
      },
      {
        id: "account-changes",
        question: "How do I make changes to my account?",
        answer:
          "You can manage your account settings, subscription, and billing information directly from your account dashboard. For assistance with complex changes, please contact our customer support team.",
      },
    ],
  },
]

// Category labels for display
const categoryLabels = {
  general: "General",
  pricing: "Pricing & Billing",
  features: "Features & Functionality",
  support: "Support & Training",
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("general")

  // Filter questions based on search query
  const filteredQuestions = faqData.flatMap((category) =>
    category.questions
      .filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .map((q) => ({ ...q, category: category.category })),
  )

  // Get questions for the active category (when not searching)
  const activeQuestions = searchQuery
    ? filteredQuestions
    : faqData.find((c) => c.category === activeCategory)?.questions || []

  return (
    <div className="container max-w-4xl py-12 px-4 md:py-24 md:px-6">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Find answers to common questions about our platform, pricing, features, and support.
        </p>
      </div>

      {/* Search bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search for questions..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 h-7 -translate-y-1/2"
            onClick={() => setSearchQuery("")}
          >
            Clear
          </Button>
        )}
      </div>

      {searchQuery ? (
        // Search results
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            {filteredQuestions.length === 0
              ? "No results found"
              : `Found ${filteredQuestions.length} result${filteredQuestions.length === 1 ? "" : "s"}`}
          </h2>

          {filteredQuestions.length > 0 && (
            <Accordion type="single" collapsible className="w-full">
              {filteredQuestions.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left">
                    <div>
                      <span>{item.question}</span>
                      <span className="ml-2 text-xs text-muted-foreground inline-block px-2 py-1 bg-muted rounded-full">
                        {categoryLabels[item.category as keyof typeof categoryLabels]}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      ) : (
        // Categorized FAQ tabs
        <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {Object.entries(categoryLabels).map(([value, label]) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(categoryLabels).map((category) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                {activeQuestions.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      )}

      {/* Still have questions section */}
      <div className="mt-16 p-6 border rounded-lg bg-muted/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold">Still have questions?</h2>
            <p className="text-muted-foreground mt-1">We're here to help. Contact our support team for assistance.</p>
          </div>
          <Button className="w-full md:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}

          
