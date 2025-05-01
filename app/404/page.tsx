import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1 shadow-lg">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
          <Search className="h-20 w-20 text-orange-500" />
        </div>
      </div>
      <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">404 - Page Not Found</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the
        homepage.
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
