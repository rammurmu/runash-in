"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8 h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1 shadow-lg">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
          <span className="text-7xl">😕</span>
        </div>
      </div>
      <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Something went wrong</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        We apologize for the inconvenience. An unexpected error has occurred. Our team has been notified and is working
        to fix the issue.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button onClick={reset} variant="default" size="lg">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try again
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return home
          </Link>
        </Button>
      </div>
      {error.digest && <p className="mt-8 text-sm text-muted-foreground">Error ID: {error.digest}</p>}
    </div>
  )
}
