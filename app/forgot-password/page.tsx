"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
//... import ThemeToggle from "@/components/theme-toggle" ...//

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
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
          {/* Forgot Password Card */}
          <div className="relative">
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-yellow-500/50 to-orange-500/50 dark:from-orange-500/30 dark:via-yellow-500/30 dark:to-orange-500/30 rounded-xl p-[1px]">
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl"></div>
            </div>

            <div className="relative p-8 rounded-xl">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Enter your email and we'll send you instructions to reset your password
                    </p>
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

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
                    >
                      {isLoading ? "Sending..." : "Send Reset Instructions"}{" "}
                      {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold mb-2">Check your email</h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We've sent password reset instructions to your email address. Please check your inbox.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
                  >
                    Back to Reset Form
                  </Button>
                </div>
              )}

              <div className="mt-8 text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to login
                </Link>
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
