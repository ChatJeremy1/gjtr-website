import { Resend } from 'resend'
import { getEnv } from './env'

export async function sendRequestEmail(data: any) {
  const env = getEnv()
  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.RESEND_TO_EMAIL) return
  const resend = new Resend(env.RESEND_API_KEY)
  await resend.emails.send({
    from: env.RESEND_FROM_EMAIL,
    to: env.RESEND_TO_EMAIL,
    subject: `GJTR roadside request from ${data.name || 'Unknown'}`,
    text: JSON.stringify(data, null, 2)
  })
}
