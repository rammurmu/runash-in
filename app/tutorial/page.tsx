import type { Metadata } from "next"
import { TutorialCard } from "@/components/tutorials/tutorial-card"
import { TutorialFilter } from "@/components/tutorials/tutorial-filter"

export const metadata: Metadata = {
  title: "Tutorials - RunAsh AI",
  description: "Learn how to use RunAsh AI with step-by-step tutorials",
}

export default function TutorialsPage() {
  // Sample tutorials - in a real app, these would come from your backend
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with RunAsh AI",
      description: "Learn the basics of setting up your RunAsh AI account and first stream",
      image: "/placeholder.svg?height=200&width=400",
      category: "Beginner",
      difficulty: "beginner",
      duration: "15 min",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 2,
      title: "Setting Up OBS with RunAsh AI",
      description: "Configure Open Broadcaster Software to work with RunAsh AI's advanced features",
      image: "/placeholder.svg?height=200&width=400",
      category: "Integration",
      difficulty: "intermediate",
      duration: "20 min",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 3,
      title: "Advanced AI Translation Settings",
      description: "Customize your AI translation for optimal performance and accuracy",
      image: "/placeholder.svg?height=200&width=400",
      category: "AI Features",
      difficulty: "advanced",
      duration: "25 min",
      author: {
        name: "Elena Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 4,
      title: "Creating Custom Overlays",
      description: "Design and implement custom stream overlays with RunAsh AI integration",
      image: "/placeholder.svg?height=200&width=400",
      category: "Customization",
      difficulty: "intermediate",
      duration: "30 min",
      author: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 5,
      title: "Monetization Strategies",
      description: "Learn effective ways to monetize your streams using RunAsh AI tools",
      image: "/placeholder.svg?height=200&width=400",
      category: "Growth",
      difficulty: "intermediate",
      duration: "22 min",
      author: {
        name: "Jessica Patel",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 6,
      title: "Audience Analytics Deep Dive",
      description: "Master the analytics dashboard to understand and grow your audience",
      image: "/placeholder.svg?height=200&width=400",
      category: "Analytics",
      difficulty: "advanced",
      duration: "35 min",
      author: {
        name: "Thomas Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ]

  return (
    <div className="container max-w-7xl py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Learn RunAsh AI
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Step-by-step tutorials to help you master every feature of RunAsh AI
        </p>
      </div>

      {/* Filters */}
      <TutorialFilter className="mb-8" />

      {/* Tutorials Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  )
}
