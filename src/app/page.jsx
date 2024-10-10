import Link from "next/link"

function HomePage() {
  return (
    <div className="w-full">
      <h1 className="text-white text-8xl font-bold text-center mt-12">Demo Next Auth</h1>

      <div className="flex justify-center mt-6 gap-2">
        <Link href={'/auth/login'} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</Link>
        <Link href={'/auth/register'} className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Register
        </Link>
        
      </div>
    </div>
  )
}

export default HomePage