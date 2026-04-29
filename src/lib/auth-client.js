import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://image-generator-xi-blush.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()