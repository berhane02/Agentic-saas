import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// This protects all routes except the public ones listed below.
// See https://clerk.com/docs/references/nextjs/clerk-middleware for more information about configuring your proxy
const isPublicRoute = createRouteMatcher(["/", "/api/webhook"]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
