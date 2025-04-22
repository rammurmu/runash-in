import { auth } from "@/auth"
import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

// Add paths that require authentication
const authRequiredPaths = ["/dashboard", "/profile", "/seller"]

// Add paths that should redirect authenticated users
const authRedirectPaths = ["/auth/login", "/auth/register"]

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthenticated = !!token
  const path = request.nextUrl.pathname
  const session = await auth()

  // Protected routes
  if (
    !session &&
    (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/admin"))
  ) {
    return NextResponse.redirect(new URL(`/login?callbackUrl=${request.nextUrl.pathname}`, request.url))
  }

  // Admin routes
  if (session && session.user?.role !== "ADMIN" && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Check if the path requires authentication
  const isAuthRequired = authRequiredPaths.some((authPath) => path === authPath || path.startsWith(`${authPath}/`))

  // Check if the path should redirect authenticated users
  const shouldRedirectAuth = authRedirectPaths.some((authPath) => path === authPath || path.startsWith(`${authPath}/`))

  // Redirect unauthenticated users from protected routes
  if (isAuthRequired && !isAuthenticated) {
    const url = new URL("/auth/login", request.url)
    url.searchParams.set("callbackUrl", encodeURI(request.url))
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users from auth pages
  if (shouldRedirectAuth && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Check seller routes
  if (path.startsWith("/seller") && isAuthenticated) {
    // If user is not a seller, redirect to unauthorized page
    if (token.role !== "SELLER") {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes that don't require auth
     */
    "/((?!_next/static|_next/image|favicon.ico|public|api/auth|dashboard/:path|admin/:path).*)",
  ],
}



  
