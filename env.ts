import { z } from "zod"

const nodeEnv = z.enum(["development", "production", "test"]);

const EnvSchema = z.object({
  PORT: z.string().default("3000"),
  NODE_ENV: nodeEnv.default("development"),
  DATABASE_URL: z.string().nonempty(),
  REDIS_URL: z.string().nonempty(),
  SESSION_SECRET: z.string().nonempty(),
  CORS_ORIGIN: z.string().nonempty(),
});

export type Env = z.infer<typeof EnvSchema>;

export const env = EnvSchema.parse(process.env)