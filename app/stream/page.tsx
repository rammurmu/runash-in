import type { Metadata } from "next"
import StreamingStudio from "@/components/ui/streaming/streaming-studio"

export const metadata: Metadata = {
  title: "AI Live Streaming Studio | RunAsh",
  description: "Enhance your live streams with AI-powered tools directly in your browser",
}

export default function StreamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 dark:from-gray-950 dark:to-gray-900">
      <StreamingStudio />
    </div>
  )
}
