import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import type { ReactNode } from "react"

interface FeatureShowcaseProps {
  title: string
  description: string
  image: string
  imageAlt: string
  features: string[]
  icon: ReactNode
  gradient: string
  direction: "left" | "right"
}

export default function FeatureShowcase({
  title,
  description,
  image,
  imageAlt,
  features,
  icon,
  gradient,
  direction,
}: FeatureShowcaseProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className={direction === "left" ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
        <div className="flex items-center mb-6">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient} mr-4`}>{icon}</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
            {title}
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">{description}</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`p-1 rounded-full bg-gradient-to-br ${gradient} mr-3 mt-1`}>
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className={`bg-gradient-to-r ${gradient} hover:opacity-90 transition-opacity text-white`}>
          Learn More
        </Button>
      </div>
      <div className={direction === "left" ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
        <div className="relative">
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-yellow-500/50 to-orange-500/50 dark:from-orange-500/30 dark:via-yellow-500/30 dark:to-orange-500/30 rounded-xl p-[1px]">
            <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl"></div>
          </div>

          <div className="relative p-2 rounded-xl overflow-hidden">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src={image || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover" />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 via-yellow-500/20 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-500/20 via-orange-500/20 to-transparent rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
  }
      
