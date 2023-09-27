import Link from "next/link"

export default function LoginPage(){
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
          Welcome to CodeExplain dashboard, please sign in with GitHub.
          <Link href="/api/auth/signin?callbackUrl=/">
            sign in
          </Link>
        </div>
    )
}