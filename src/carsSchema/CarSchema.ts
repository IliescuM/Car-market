import { z as zod } from 'zod'
export const CarSchema = () => {
    const carSchema = zod.object({
        name: zod.string().min(3).max(200),
        year: zod.string().refine(val => Number(val) > 0, {
            message: "not a number",
        }),
        km_driven: zod.string().refine(val => Number(val) > 0, {
            message: "not a number",
        }),
        seller_type: zod.string().min(3).max(200),
        transmission: zod.string().min(3).max(200),
        owner: zod.string().min(3).max(200),
        selling_price: zod.string().refine(val => Number(val) > 0, {
            message: "not a number",
        }),
        fuel: zod.string().min(3).max(200),
    })

    return {
        carSchema

    }
}
