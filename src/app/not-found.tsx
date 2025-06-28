import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tech-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-tech-orange">404</h1>
        <p className="text-xl text-tech-gray mb-4">Oops! Page not found</p>
        <Link href="/" className="text-tech-cyan hover:text-tech-orange underline transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  )
}