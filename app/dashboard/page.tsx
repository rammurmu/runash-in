"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, Play, Clock, Settings, Bell, Plus, ChevronRight, Zap, Shield, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
//... import ModeToggle from "@/components/ui/mode-toggle" ...//
//... import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts" ...//
//... import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart" .../
import { Sidebar } from "@/components/ui/sidebar"

// Sample data for charts
const viewerData = [
  { date: "Mon", viewers: 245 },
  { date: "Tue", viewers: 388 },
  { date: "Wed", viewers: 356 },
  { date: "Thu", viewers: 498 },
  { date: "Fri", viewers: 602 },
  { date: "Sat", viewers: 783 },
  { date: "Sun", viewers: 689 },
]

const engagementData = [
  { date: "Mon", engagement: 45 },
  { date: "Tue", engagement: 52 },
  { date: "Wed", engagement: 49 },
  { date: "Thu", engagement: 62 },
  { date: "Fri", engagement: 58 },
  { date: "Sat", engagement: 78 },
  { date: "Sun", engagement: 73 },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b border-orange-200/50 dark:border-orange-900/30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
                RunAsh
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </Button>
              {/* <ModeToggle /> */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 flex items-center justify-center text-white font-medium">
                  A
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Ram Murmu</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Pro Plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Ram!</h1>
          <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your streams this week.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Viewers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">3,561</div>
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <BarChart3 className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-2">+12.5% from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Followers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">1,248</div>
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">+7.2% from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Stream Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">24.5h</div>
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">+3.5h from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Engagement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">68%</div>
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <Zap className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">+5% from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="bg-orange-100/50 dark:bg-orange-900/20 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="streams">Streams</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="ai-tools">AI Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Charts */}
              {/* <Card className="lg:col-span-2 bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                <CardHeader>
                  <CardTitle>Viewer Analytics</CardTitle>
                  <CardDescription>Your stream performance over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartContainer
                      config={{
                        viewers: {
                          label: "Viewers",
                          color: "hsl(var(--chart-1))",
                        },
                        engagement: {
                          label: "Engagement",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={viewerData.map((item, i) => ({
                            ...item,
                            engagement: engagementData[i].engagement,
                          }))}
                        >
                          <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="viewers"
                            strokeWidth={2}
                            activeDot={{ r: 6 }}
                            stroke="var(--color-viewers)"
                          />
                          <Line
                            type="monotone"
                            dataKey="engagement"
                            strokeWidth={2}
                            activeDot={{ r: 6 }}
                            stroke="var(--color-engagement)"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card> */}

              {/* Upcoming Streams */}
              <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                <CardHeader>
                  <CardTitle>Upcoming Streams</CardTitle>
                  <CardDescription>Your scheduled streaming sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200/50 dark:border-orange-900/30">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Gaming Marathon</h3>
                      <span className="text-xs bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full">
                        Today
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">8:00 PM - 11:00 PM</p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"
                      >
                        <Play className="h-4 w-4 mr-1" /> Go Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-orange-200/50 dark:border-orange-900/30">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Q&A Session</h3>
                      <span className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                        Tomorrow
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">7:00 PM - 8:30 PM</p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-orange-200/50 dark:border-orange-900/30">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Tutorial Stream</h3>
                      <span className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                        Fri, Jun 28
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">6:00 PM - 7:30 PM</p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/50"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Schedule New Stream
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Streams */}
            <div className="mt-6">
              <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                <CardHeader>
                  <CardTitle>Recent Streams</CardTitle>
                  <CardDescription>Your past streaming sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-orange-200/50 dark:border-orange-900/30 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 flex items-center justify-center text-white">
                          <Play className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Weekend Gaming Session</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">June 24, 2023 • 3h 45m</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">783 viewers</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">52 new followers</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-orange-200/50 dark:border-orange-900/30 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 flex items-center justify-center text-white">
                          <Play className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">New Game First Look</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">June 22, 2023 • 2h 15m</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">602 viewers</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">38 new followers</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-orange-200/50 dark:border-orange-900/30 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 flex items-center justify-center text-white">
                          <Play className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Community Challenge</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">June 20, 2023 • 4h 10m</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">498 viewers</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">29 new followers</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-orange-200/50 dark:border-orange-900/30 px-6 py-4">
                  <Button
                    variant="ghost"
                    className="w-full text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/50"
                  >
                    View All Streams
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="streams">
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Your Streams</CardTitle>
                      <CardDescription>Manage your past and upcoming streams</CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white">
                      <Plus className="h-4 w-4 mr-1" /> New Stream
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Stream management content would go here */}
                    <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                      Stream management interface would be displayed here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Detailed Analytics</CardTitle>
                      <CardDescription>In-depth metrics about your streaming performance</CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
                    >
                      Export Data
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Analytics content would go here */}
                    <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                      Detailed analytics dashboard would be displayed here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-tools">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-orange-500 dark:text-orange-400" /> AI Video Enhancement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Automatically enhance your video quality in real-time.
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Enhancement Level</span>
                      <span className="text-sm font-medium">70%</span>
                    </div>
                    <Progress value={70} className="h-2 bg-orange-100 dark:bg-orange-900/30" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white">
                    Configure
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-orange-500 dark:text-orange-400" /> Content Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    AI-powered content moderation to keep your streams safe.
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Protection Level</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2 bg-orange-100 dark:bg-orange-900/30" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white">
                    Configure
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-500 dark:text-orange-400" /> Audience Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Smart tools to boost viewer interaction and growth.
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Engagement Level</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <Progress value={60} className="h-2 bg-orange-100 dark:bg-orange-900/30" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white">
                    Configure
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2 border-orange-200/50 dark:border-orange-900/30 hover:bg-orange-50 dark:hover:bg-orange-950/20"
            >
              <Play className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <span>Start Stream</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2 border-orange-200/50 dark:border-orange-900/30 hover:bg-orange-50 dark:hover:bg-orange-950/20"
            >
              <Settings className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <span>Stream Settings</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2 border-orange-200/50 dark:border-orange-900/30 hover:bg-orange-50 dark:hover:bg-orange-950/20"
            >
              <BarChart3 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <span>View Reports</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2 border-orange-200/50 dark:border-orange-900/30 hover:bg-orange-50 dark:hover:bg-orange-950/20"
            >
              <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <span>Community</span>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-orange-200/50 dark:border-orange-900/30 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} RunAsh AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a
                href="help"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Help Center
              </a>
              <a
                href="terms"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Terms
              </a>
              <a
                href="privacy"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
            
