import { NextRequest, NextResponse } from 'next/server'
import { getEnv } from '@/lib/env'
import { sendRequestEmail } from '@/lib/mail'
import twilio from 'twilio'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const payload = Object.fromEntries(form.entries()) as Record<string, string>

  // Email
  await sendRequestEmail(payload)

  // SMS
  const env = getEnv()
  if (env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && env.TWILIO_FROM_NUMBER && env.TWILIO_TO_NUMBER) {
    const client = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN)
    await client.messages.create({
      from: env.TWILIO_FROM_NUMBER,
      to: env.TWILIO_TO_NUMBER,
      body: `GJTR Request: ${payload.name || ''} ${payload.phone || ''} — ${payload.location || ''} — ${payload.issue || ''}`
    })
  }

  // DocuSign handoff (placeholder URL for now)
  const docusignUrl = '/api/docusign' // in real use, return session URL

  return NextResponse.redirect(docusignUrl, { status: 303 })
}
