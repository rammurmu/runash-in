interface MilestoneProps {
  year: string
  title: string
  description: string
  position: "left" | "right"
  gradient: string
}

export default function Milestone({ year, title, description, position, gradient }: MilestoneProps) {
  return (
    <div className="relative">
      {/* Center dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-500 dark:from-orange-400 dark:via-yellow-400 dark:to-orange-400 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-900"></div>
      </div>

      {/* Content */}
      <div className={`flex ${position === "left" ? "flex-row" : "flex-row-reverse"} items-center`}>
        <div className={`w-1/2 ${position === "left" ? "pr-12 text-right" : "pl-12 text-left"}`}>
          <div
            className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${gradient} border border-orange-200/50 dark:border-orange-800/30 mb-3`}
          >
            <span className="text-sm font-semibold text-white">{year}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  )
                              }
                                 
