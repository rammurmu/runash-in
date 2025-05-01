import type { Metadata } from "next"
import { SupportSearch } from "@/components/support/support-search"
import { SupportCategoryCard } from "@/components/support/support-category-card"
import { SupportContactOptions } from "@/components/support/support-contact-options"

export const metadata: Metadata = {
  title: "Support - RunAsh AI",
  description: "Get help and support for RunAsh AI streaming platform",
}

export default function SupportPage() {
  // Sample categories - in a real app, these would come from your backend
  const categories = [
    {
      id: 1,
      title: "Getting Started",
      description: "Learn the basics of RunAsh AI and set up your account",
      icon: "Rocket",
      articles: 12,
    },
    {
      id: 2,
      title: "Account & Billing",
      description: "Manage your account settings and subscription",
      icon: "CreditCard",
      articles: 18,
    },
    {
      id: 3,
      title: "Streaming Setup",
      description: "Configure your streaming settings and integrations",
      icon: "Video",
      articles: 15,
    },
    {
      id: 4,
      title: "AI Features",
      description: "Learn how to use and customize AI features",
      icon: "Brain",
      articles: 20,
    },
    {
      id: 5,
      title: "Analytics & Growth",
      description: "Understand your audience and grow your channel",
      icon: "BarChart",
      articles: 14,
    },
    {
      id: 6,
      title: "Troubleshooting",
      description: "Solve common issues and technical problems",
      icon: "Wrench",
      articles: 22,
    },
  ]

  return (
    <div className="container max-w-7xl py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          How Can We Help?
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Find answers, get support, and resolve issues with RunAsh AI
        </p>

        {/* Search Bar */}
        <SupportSearch className="mt-8" />
      </div>

      {/* Categories */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <SupportCategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Contact Options */}
      <SupportContactOptions className="mt-16" />
    </div>
  )
}
