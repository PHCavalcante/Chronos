"use server";

import { signIn, signOut } from "../auth";

type ProviderProps = "google" | "github";

export const login = async (provider: ProviderProps) => {
    await signIn(provider, {redirectTo: "/"});
};
export const logout = async () => {
    await signOut({ redirectTo: "/" });
};