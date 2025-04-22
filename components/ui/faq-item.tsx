"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItemProps {
  question: string
  answer: string
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`border rounded-xl transition-all duration-300 ${
        isOpen
          ? "border-orange-500/50 bg-gradient-to-br from-orange-100/50 via-yellow-100/50 to-white/80 dark:from-orange-900/20 dark:via-yellow-900/20 dark:to-gray-900"
          : "border-orange-200/50 dark:border-orange-800/30 bg-white/80 dark:bg-gray-900/80"
      }`}
    >
      <button className="flex justify-between items-center w-full p-6 text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{question}</h3>
        <div
          className={`p-2 rounded-full transition-colors ${
            isOpen
              ? "bg-orange-200/70 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300"
              : "bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400"
          }`}
        >
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0">
          <div className="h-px bg-gradient-to-r from-orange-500/50 via-yellow-500/50 to-transparent mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  )
        }
      
