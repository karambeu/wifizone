import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Connection from "@/libs/mongodb";
const {mUser} = require("@/models/user");
const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credential",
            credentials: {},
            async authorize(credentials) { 
                const { email, password } = credentials;
                try {
                    await Connection();
                    const user = await mUser.findOne({
                        $or: [
                            { email: email },
                            { username: email }
                          ]
                    });

                    if(!user){
                        return null
                    }
                    const matchPassword = await bcrypt.compare(password, user.password)
                    if(!matchPassword){
                        return null
                    }
                    return user
                } catch (error) {
                    console.log(error.message)
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user._id;
            token.username = user.username;
            token.email = user.email;
            token.createdAt = user.createdAt;
            token.role = user.role;
          }
          return token;
        },
        async session({ session, token }) {
          if (token) {
            session.userId = token.id;
            session.username = token.username;
            session.email = token.email;
            session.createdAt = token.createdAt;
            session.role = token.role;
          }
          return session;
        },
      },    
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };