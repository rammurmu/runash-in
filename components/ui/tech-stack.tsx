import type { ReactNode } from "react"

interface TechStackProps {
  icon: ReactNode
  title: string
  description: string
}

export default function TechStack({ icon, title, description }: TechStackProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-teal-500/50 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative p-8 bg-black/80 backdrop-blur-sm rounded-xl border border-purple-500/10 group-hover:border-purple-500/30 transition-colors duration-300">
        <div className="mb-5 p-3 bg-black/50 rounded-lg inline-block">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
      }
