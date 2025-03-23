import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  secret: "e6380966905a9224b2a25abdbe32769c",
})