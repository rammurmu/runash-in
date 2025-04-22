"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Check, ChevronRight, Play, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
//... import ThemeToggle from "@/components/theme-toggle" ...//
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GetStartedPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setStep(step + 1)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-orange-300 dark:to-yellow-300 text-transparent bg-clip-text">
            RunAsh
          </span>
        </Link>
        
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 1
                      ? "bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {step > 1 ? <Check className="h-5 w-5" /> : 1}
                </div>
                <span className="text-sm mt-2">Account</span>
              </div>
              <div className="flex-1 h-1 mx-2 bg-gray-200 dark:bg-gray-800">
                <div
                  className={`h-full bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 ${
                    step > 1 ? "w-full" : "w-0"
                  } transition-all duration-300`}
                ></div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 2
                      ? "bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {step > 2 ? <Check className="h-5 w-5" /> : 2}
                </div>
                <span className="text-sm mt-2">Profile</span>
              </div>
              <div className="flex-1 h-1 mx-2 bg-gray-200 dark:bg-gray-800">
                <div
                  className={`h-full bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 ${
                    step > 2 ? "w-full" : "w-0"
                  } transition-all duration-300`}
                ></div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 3
                      ? "bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  3
                </div>
                <span className="text-sm mt-2">Complete</span>
              </div>
            </div>
          </div>

          {/* Step 1: Create Account */}
          {step === 1 && (
            <div className="relative">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-yellow-500/50 to-orange-500/50 dark:from-orange-500/30 dark:via-yellow-500/30 dark:to-orange-500/30 rounded-xl p-[1px]">
                <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl"></div>
              </div>

              <div className="relative p-8 rounded-xl">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">Create your account</h1>
                  <p className="text-gray-600 dark:text-gray-400">Start your streaming journey with RunAsh AI</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                      >
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
                  >
                    {isLoading ? "Creating account..." : "Continue"}{" "}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Profile Setup */}
          {step === 2 && (
            <div className="relative">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-yellow-500/50 to-orange-500/50 dark:from-orange-500/30 dark:via-yellow-500/30 dark:to-orange-500/30 rounded-xl p-[1px]">
                <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl"></div>
              </div>

              <div className="relative p-8 rounded-xl">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">Set up your profile</h1>
                  <p className="text-gray-600 dark:text-gray-400">Tell us a bit about yourself</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                  <div className="space-y-2">
                    <Label htmlFor="display-name">Display Name</Label>
                    <Input
                      id="display-name"
                      placeholder="Your display name"
                      required
                      className="bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-orange-200 dark:border-orange-800/30 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        runash.ai/
                      </span>
                      <Input
                        id="username"
                        placeholder="username"
                        required
                        className="rounded-l-none bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>I stream on</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="platform-twitch" />
                        <Label htmlFor="platform-twitch">Twitch</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="platform-youtube" />
                        <Label htmlFor="platform-youtube">YouTube</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="platform-tiktok" />
                        <Label htmlFor="platform-tiktok">TikTok</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="platform-other" />
                        <Label htmlFor="platform-other">Other</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Content type</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="content-gaming" />
                        <Label htmlFor="content-gaming">Gaming</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="content-irl" />
                        <Label htmlFor="content-irl">IRL</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="content-creative" />
                        <Label htmlFor="content-creative">Creative</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="content-other" />
                        <Label htmlFor="content-other">Other</Label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
                  >
                    {isLoading ? "Saving profile..." : "Continue"}{" "}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>
            </div>
          )}

          {/* Step 3: Complete */}
          {step === 3 && (
            <div className="relative">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-yellow-500/50 to-orange-500/50 dark:from-orange-500/30 dark:via-yellow-500/30 dark:to-orange-500/30 rounded-xl p-[1px]">
                <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl"></div>
              </div>

              <div className="relative p-8 rounded-xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold mb-2">You're all set!</h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your RunAsh AI account is ready. Let's start streaming with AI.
                  </p>
                </div>

                <div className="max-w-md mx-auto">
                  <Tabs defaultValue="explore" className="mb-8">
                    <TabsList className="grid grid-cols-3 bg-orange-100/50 dark:bg-orange-900/20">
                      <TabsTrigger value="explore">Explore</TabsTrigger>
                      <TabsTrigger value="setup">Quick Setup</TabsTrigger>
                      <TabsTrigger value="learn">Learn</TabsTrigger>
                    </TabsList>
                    <TabsContent value="explore" className="mt-4">
                      <div className="space-y-4">
                        <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                              <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                              <h3 className="font-medium">Explore AI Features</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Discover how AI can enhance your streams
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 ml-auto text-gray-400" />
                          </CardContent>
                        </Card>

                        <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                              <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                              <h3 className="font-medium">View Dashboard</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Check your streaming analytics and stats
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 ml-auto text-gray-400" />
                          </CardContent>
                        </Card>

                        <Card className="bg-white dark:bg-gray-900 border-orange-200/50 dark:border-orange-900/30">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                              <Play className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                              <h3 className="font-medium">Start Streaming</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Go live with AI-enhanced streaming
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 ml-auto text-gray-400" />
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    <TabsContent value="setup" className="mt-4">
                      <div className="space-y-4 text-center">
                        <p className="text-gray-600 dark:text-gray-400">Quick setup guide would be displayed here</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="learn" className="mt-4">
                      <div className="space-y-4 text-center">
                        <p className="text-gray-600 dark:text-gray-400">Learning resources would be displayed here</p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Button
                    onClick={() => (window.location.href = "/dashboard")}
                    className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
                  >
                    Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} RunAsh AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a
                href="/help"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Help Center
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Terms
              </a>
              <a
                href="/privacy"
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
