import type { ReactNode } from "react"

interface FeatureCardsProps {
  icon: ReactNode
  title: string
  description: string
  gradient: string
}

export default function FeatureCards({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-yellow-500/50 to-orange-500/50 dark:from-orange-500/30 dark:via-yellow-500/30 dark:to-orange-500/30 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-orange-200/50 dark:border-orange-800/30 transition-colors duration-300 h-full">
        <div className={`mb-5 p-3 bg-gradient-to-br ${gradient} rounded-lg inline-block`}>{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
                                     }
      
