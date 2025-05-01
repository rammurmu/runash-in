import Link from "next/link"
import { ArrowLeft, ServerCrash } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServerErrorPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1 shadow-lg">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
          <ServerCrash className="h-20 w-20 text-orange-500" />
        </div>
      </div>
      <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Server Error</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        We're experiencing some technical difficulties on our servers. Our team has been notified and is working to
        resolve the issue as quickly as possible.
      </p>
      <Button variant="default" size="lg" asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return home
        </Link>
      </Button>
    </div>
  )
}
