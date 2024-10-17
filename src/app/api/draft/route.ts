import directus from '@/lib/directus'
import { readItem } from '@directus/sdk'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
 
export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const id = searchParams.get('slug')
 
  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== '1234' || !id) {
    return new Response('Invalid token', { status: 401 })
  }
 
  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const lecturer = await directus.request(readItem('lecturers', id));
 
  // If the slug doesn't exist prevent draft mode from being enabled
  if (!lecturer) {
    return new Response('Invalid ID', { status: 401 })
  }
 
  // Enable Draft Mode by setting the cookie
  draftMode().enable()
 
  // Redirect to the path from the fetched lecturer
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect("lektori/" + lecturer.id)
}