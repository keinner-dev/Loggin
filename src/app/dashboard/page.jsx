"use client"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";


function DashboardPage() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login")
    }
  })

  if (status === "loading") {
    return "Loading..."
  }

  function handleLogout() {
    signOut({ callbackUrl: '/auth/login' })
  }

  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <h1 className="text-white text-5xl">Dashboard</h1>
        <button className="bg-white text-black px-4 py-2 rounded-md mt-4"
          onClick={() => handleLogout()}
        >
          Logout
        </button>



      </div>
    </section>
  )
}


export default DashboardPage