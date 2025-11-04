import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_PRIMARY_PHONE: z.string(),
  NEXT_PUBLIC_PRIMARY_EMAIL: z.string().email(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().optional(),
  RESEND_TO_EMAIL: z.string().email().optional(),
  TWILIO_ACCOUNT_SID: z.string().optional(),
  TWILIO_AUTH_TOKEN: z.string().optional(),
  TWILIO_FROM_NUMBER: z.string().optional(),
  TWILIO_TO_NUMBER: z.string().optional(),
})

export function getEnv() {
  const parsed = envSchema.safeParse(process.env)
  if (!parsed.success) {
    console.warn('Missing env vars (okay in dev until wiring Resend/Twilio).')
    return process.env as any
  }
  return parsed.data as any
}
