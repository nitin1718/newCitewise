import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { headers } from 'next/headers'

export async function middleware(req) {


  const path = req.nextUrl.pathname

  const isPublicPath = path ==='/'

  if(!isPublicPath)
  {
    return NextResponse.redirect(new URL("/", req.url));
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/about',
    '/blog',
    '/blog-details',
    '/contact',
    '/signin',
    '/signup'
  ]
}