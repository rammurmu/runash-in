"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Sparkles } from "lucide-react"
import { useState } from "react"

interface AIFeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  defaultEnabled?: boolean
}

export default function AIFeatureCard({ title, description, icon, defaultEnabled = false }: AIFeatureCardProps) {
  const [isEnabled, setIsEnabled] = useState(defaultEnabled)

  return (
    <Card
      className={`border ${isEnabled ? "border-orange-300 dark:border-orange-700" : "border-gray-200 dark:border-gray-700"}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-md text-orange-600 dark:text-orange-400">
              {icon}
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="font-medium">{title}</h3>
                <Badge
                  variant="outline"
                  className="ml-2 bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 border-orange-200 dark:border-orange-800"
                >
                  <Sparkles className="mr-1 h-3 w-3" />
                  AI
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
            </div>
          </div>
          <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
        </div>
      </CardContent>
    </Card>
  )
}
