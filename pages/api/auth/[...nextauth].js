import NextAuth from "next-auth"
import HubspotProvider from "next-auth/providers/hubspot";

export const authOptions = {
  providers: [
    HubspotProvider({
        clientId: process.env.HUBSPOT_CLIENT_ID,
        clientSecret: process.env.HUBSPOT_CLIENT_SECRET,
        secret:  process.env.JWT_SECRET,
      })
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
          return {
              ...token,
              accessToken: account.access_token,
              refreshToken: account.refresh_token,
              username: account.providerAccountId,
              accessTokenExpires: account.expires_at * 1000,
          }
      }

      if (Date.now() < token.accessTokenExpires) {
          console.log("Token is still valid, no need to refresh");
          return token;
      }

      console.log("Token is expired, refreshing");
        return await refreshAccessToken(token);
    },

    async session({ session, token }) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.username = token.username;

        return session;
    },
  },
}

export default NextAuth(authOptions)