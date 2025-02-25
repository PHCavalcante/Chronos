import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Github],
});

// const result = NextAuth({
//   providers: [Github],
// });

// export const handlers: NextAuthResult["handlers"] = result.handlers;
// export const auth: NextAuthResult["auth"] = result.auth;
// export const signIn: NextAuthResult["signIn"] = result.signIn;
// export const signOut: NextAuthResult["signOut"] = result.signOut;