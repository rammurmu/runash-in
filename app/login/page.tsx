"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Github, Twitter } from "lucide-react"
import Link from "next/link"
//... import ThemeToggle from "@/components/theme-toggle" ...//

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    window.location.href = "/dashboard"
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
        <div className="w-full max-w-md">
          {/* Login Form Card */}
          <div className="relative">
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-yellow-500/50 to-orange-500/50 dark:from-orange-500/30 dark:via-yellow-500/30 dark:to-orange-500/30 rounded-xl p-[1px]">
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl"></div>
            </div>

            <div className="relative p-8 rounded-xl">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
                <p className="text-gray-600 dark:text-gray-400">Sign in to your RunAsh account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="bg-white/50 dark:bg-gray-900/50 border-orange-200 dark:border-orange-800/30 focus:border-orange-500/70"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-400">
                    Remember me for 30 days
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
                >
                  {isLoading ? "Signing in..." : "Sign in"} {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="border-orange-200 dark:border-orange-800/30 hover:bg-orange-50 dark:hover:bg-orange-950/50"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-200 dark:border-orange-800/30 hover:bg-orange-50 dark:hover:bg-orange-950/50"
                  >
                    <Twitter className="mr-2 h-4 w-4" /> Twitter
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    href="/get-started"
                    className="font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
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
