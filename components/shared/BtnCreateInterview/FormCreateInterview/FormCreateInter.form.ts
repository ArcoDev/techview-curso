import { z } from "zod"
export const formSchema = z.object({
  name: z.string().min(2).max(50),
  rol: z.string({
    // required_error: "El camo es requerido"
  }),
  level: z.string({
    // requeired_error: "EL campo es requerido"
  })
})