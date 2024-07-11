import { z } from "zod";
import "dotenv/config"

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default("development"),
    DATABASE_URL: z.string().url(),
    PORT: z.coerce.number().default(3000)
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    throw new Error("Invalid Environment Variables");
}

export const env = _env.data;