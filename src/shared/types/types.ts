import { z } from "zod"
import { registrationSchema } from "../validation/schemas"

// Создаем тип на основе схемы
export type RegistrationFormData = z.infer<typeof registrationSchema>
