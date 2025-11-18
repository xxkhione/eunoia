import NextAuth from "next-auth";
import {FacebookProvider} from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENTID,
            clientSecret: process.env.FACEBOOK_TOKEN
        }),
    ],
    secret: process.env.NEXTAUTH_KEY,
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
    },
    pages: {
        signIn: "/auth/signin",
    },
    debug: process.env.NODE_ENV === "development",
});