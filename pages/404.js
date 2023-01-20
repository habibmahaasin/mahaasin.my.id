import Link from 'next/link'

export default function PageNotFound() {
  return <>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      go back home
    </Link>
  </>
}