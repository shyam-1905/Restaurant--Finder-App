import Link from 'next/link';

export default function notFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-blue-500">404</h1>
        <p className="mt-4 text-2xl font-semibold">Page Not Found</p>
        <p className="mt-2 text-gray-600">The page you're looking for doesn't exist.</p>
        <Link href="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
            Go Back Search
        </Link>
      </div>
    </div>
  );
}
