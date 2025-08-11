import { FORM_VALIDATION_MESSAGES } from "@/features/auth/lib/constants";
import { z } from "zod";

export const LOGIN_SCHEMA = z.object({
  username: z.string().min(4, FORM_VALIDATION_MESSAGES.LOGIN_USERNAME_MIN),
  password: z.string().min(4, FORM_VALIDATION_MESSAGES.LOGIN_PASSWORD_MIN),
});

export type LOGIN_SCHEMA_TYPE = z.infer<typeof LOGIN_SCHEMA>;
