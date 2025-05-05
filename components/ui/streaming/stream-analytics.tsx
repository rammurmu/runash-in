"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Clock, Users, Sparkles } from "lucide-react"

interface StreamAnalyticsProps {
  isStreaming: boolean
}

export default function StreamAnalytics({ isStreaming }: StreamAnalyticsProps) {
  const [activeTab, setActiveTab] = useState("realtime")

  if (!isStreaming) {
    return (
      <div className="p-4 h-full flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-2" />
          <h3 className="text-lg font-medium mb-1">No analytics yet</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Analytics will be available when you start streaming
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="realtime">Real-time</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="realtime" className="mt-0 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-orange-500 mr-2" />
                  <span className="text-sm font-medium">Viewers</span>
                </div>
                <span className="text-2xl font-bold">42</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>+12% from average</span>
                <span>Peak: 56</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-orange-500 mr-2" />
                  <span className="text-sm font-medium">Avg. Watch Time</span>
                </div>
                <span className="text-2xl font-bold">8:42</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>+23% from average</span>
                <span>Target: 10:00</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-orange-500 mr-2" />
                  <span className="text-sm font-medium">Engagement Rate</span>
                </div>
                <span className="text-2xl font-bold">7.8%</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>-2% from average</span>
                <span>Target: 10%</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="mt-0">
          <Card>
            <CardContent className="p-4">
              <h4 className="text-sm font-medium mb-3">AI Engagement Insights</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 p-1 rounded mr-2 flex-shrink-0">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  <span>Viewer engagement peaks when discussing AI features</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 p-1 rounded mr-2 flex-shrink-0">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  <span>Consider adding more interactive demos to increase retention</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 p-1 rounded mr-2 flex-shrink-0">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  <span>Chat activity increases when you respond to questions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
