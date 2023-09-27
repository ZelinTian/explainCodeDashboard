import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";

declare module "next-auth" {
  interface Session {
    userId: string | number;
  }
}

// const options: NextAuthOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//   ],
// };

// const handler = NextAuth(options);

// export {handler as GET, handler as POST}


export const options: NextAuthOptions = {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
    ],
  };
  
  export default (req: NextApiRequest, res: NextApiResponse) => {
    return NextAuth(req, res, options);
  };