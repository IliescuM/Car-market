import { z as zod } from 'zod'
export const AuthUserSchema = () => {
    // const SELLERTYPE = ["First Owner", "Second Owner", "Third Owner"] as const
    const authUserSchema = zod.object({
        username: zod.string().min(8).max(200),
        email: zod.string().email(),
        password: zod.string().min(8).max(200),

    })

    return {
        authUserSchema
    }
}
