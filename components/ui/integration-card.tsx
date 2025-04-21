interface IntegrationCardProps {
  name: string
  description: string
  icon: string
  gradient: string
}

export default function IntegrationCard({ name, description, icon, gradient }: IntegrationCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      <div className="relative p-6 bg-white dark:bg-gray-900 rounded-xl border border-orange-200/50 dark:border-orange-800/30 transition-colors duration-300 h-full">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mr-4`}>
            <img src={icon || "/placeholder.svg"} alt={name} className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <a
            href="#"
            className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium text-sm flex items-center"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
