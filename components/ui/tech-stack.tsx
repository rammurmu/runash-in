import type { ReactNode } from "react"

interface TechStackProps {
  icon: ReactNode
  title: string
  description: string
  gradient: string
}

export default function TechStack({ icon, title, description, gradient }: TechStackProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      {/* Gradient border */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      <div className="relative p-8 bg-white dark:bg-gray-900 backdrop-blur-sm rounded-xl border border-orange-200/50 dark:border-orange-800/30 group-hover:border-orange-500/30 dark:group-hover:border-orange-500/30 transition-colors duration-300">
        <div className="mb-5 p-3 bg-white dark:bg-gray-900 rounded-lg inline-block">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
        }
        
