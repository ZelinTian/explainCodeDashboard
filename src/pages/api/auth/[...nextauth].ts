import type { DefaultSession, NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";

declare module "next-auth" {
  interface Session {
    userId: any;
    accessToken: any & DefaultSession["user"];
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
      // async profile(profile, tokens) {
      //   // Include the accessToken in the user object
      //   return {
      //     id: profile.id,
      //     name: profile.login,
      //     email: profile.email,
      //     image: profile.avatar_url,
      //     accessToken: tokens.access_token, // Include the accessToken
      //   };
      // },
    }),
    
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      // console.log("account", account)
      // console.log("token", token)
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token}) {
      // Send properties to the client, like an access_token from a provider.
      console.log("session", session)
      console.log("token", token)
      session.accessToken = token.accessToken
      // session.userId = token.id
      console.log("session1", session)
      return session
    }
  }
};

// const callbacks = {};

// callbacks.jwt = async function jwt(token, user) {
//   if (user) {
//       token = { accessToken: user.accessToken }
//   }

//   return token
// }

// callbacks.session = async function session(session, token) {
//   session.accessToken = token.accessToken
//   return session
// }

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options);
};
