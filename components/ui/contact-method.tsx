import type { ReactNode } from "react"

interface ContactMethodProps {
  icon: ReactNode
  title: string
  description: string
  contact: string
  gradient: string
  action?: ReactNode
}

export default function ContactMethod({ icon, title, description, contact, gradient, action }: ContactMethodProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient} flex-shrink-0`}>{icon}</div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-1">{description}</p>
        <p className="text-white font-medium">{contact}</p>
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  )
}
