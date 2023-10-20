import Image from "next/image";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]";
import LoginPage from "./LoginPage";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import { data } from "autoprefixer";

type HomeProps = {
  initialSession: any;
};

const inter = Inter({ subsets: ["latin"] });

async function getGithubUserId(username: any) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch GitHub user data");
  }

  return data.id;
}

// let githubId;
// if (session?.user?.name) {
//   try {
//     githubId = await getGithubUserId(session.user.name);
//     console.log("GitHub ID:", githubId);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Error fetching GitHub ID:", error.message);
//     }
//   }
// }




export default function Home() {
  const { data: session } = useSession()
  console.log('token in index', session?.accessToken);
  console.log('data in index', session)
  const router = useRouter();

  

  return (
    <>
      {session ? (
        router.push("/dashboard")
      ) : (
        <LoginPage />
      )}
    </>
  );
}

// Home.getInitialProps = async () => {
//   // Fetch the initial session data here
//   const initialSession = await getServerSession(options);

//   return {
//     initialSession,
//   };
// }

