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
          ? "border-purple-500/50 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"
          : "border-purple-500/20 bg-black/50"
      }`}
    >
      <button className="flex justify-between items-center w-full p-6 text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-bold text-lg">{question}</h3>
        <div
          className={`p-2 rounded-full transition-colors ${
            isOpen ? "bg-purple-900/50 text-purple-300" : "bg-black/50 text-gray-400"
          }`}
        >
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0">
          <div className="h-px bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent mb-4"></div>
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  )
        }
            
