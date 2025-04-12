interface MilestoneProps {
  year: string
  title: string
  description: string
  position: "left" | "right"
}

export default function Milestone({ year, title, description, position }: MilestoneProps) {
  return (
    <div className="relative">
      {/* Center dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-black"></div>
      </div>

      {/* Content */}
      <div className={`flex ${position === "left" ? "flex-row" : "flex-row-reverse"} items-center`}>
        <div className={`w-1/2 ${position === "left" ? "pr-12 text-right" : "pl-12 text-left"}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 mb-3">
            <span className="text-sm font-semibold text-purple-300">{year}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  )
}
