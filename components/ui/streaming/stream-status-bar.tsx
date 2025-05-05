"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, Users, Signal, AlertCircle } from "lucide-react"

interface StreamStatusBarProps {
  isStreaming: boolean
  streamDuration: string
  viewerCount: number
  streamHealth: "Excellent" | "Good" | "Fair" | "Poor"
}

export default function StreamStatusBar({
  isStreaming,
  streamDuration,
  viewerCount,
  streamHealth,
}: StreamStatusBarProps) {
  const getHealthColor = () => {
    switch (streamHealth) {
      case "Excellent":
        return "text-green-500"
      case "Good":
        return "text-green-400"
      case "Fair":
        return "text-yellow-500"
      case "Poor":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  if (!isStreaming) {
    return (
      <div className="bg-white dark:bg-gray-900 border-t border-orange-100 dark:border-orange-900/20 p-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <AlertCircle className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Not streaming</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">0</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">00:00:00</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-900 border-t border-orange-100 dark:border-orange-900/20 p-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Badge
          variant="outline"
          className="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800"
        >
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse mr-2"></div>
          Live
        </Badge>
        <div className="flex items-center">
          <Signal className={`h-4 w-4 mr-2 ${getHealthColor()}`} />
          <span className="text-sm">
            Stream health: <span className={getHealthColor()}>{streamHealth}</span>
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Users className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
          <span className="text-sm">{viewerCount}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
          <span className="text-sm">{streamDuration}</span>
        </div>
      </div>
    </div>
  )
}
