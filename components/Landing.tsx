// 'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const BRAND = {
  name: 'Grand Junction Truck Repair',
  phone: process.env.NEXT_PUBLIC_PRIMARY_PHONE || '9705892320',
  email: process.env.NEXT_PUBLIC_PRIMARY_EMAIL || 'jeremiahspelts@gjtrllc.com',
  yellow: '#FCD014',
  black: '#0B0B0B'
}

export default function Landing() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="font-semibold">{BRAND.name}</div>
          <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 rounded-lg px-4 py-2" style={{backgroundColor: BRAND.yellow, color: BRAND.black}}>
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div className="space-y-6">
            <span className="rounded-full px-3 py-1 text-sm" style={{backgroundColor: '#FCD01433'}}>24/7 SERVICE</span>
            <motion.h1 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-4xl font-bold md:text-5xl">
              24/7 Commercial Truck & Trailer Roadside Repair — Grand Junction, CO
            </motion.h1>
            <p className="text-lg text-neutral-600">Fast, professional roadside service from a certified diesel mechanic. Tires, air/brakes, jump starts, fuel delivery, diagnostics, mobile welding & more—wherever you’re stuck.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${BRAND.phone}`} className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium" style={{backgroundColor: BRAND.yellow, color: BRAND.black}}>
                <Phone className="mr-2 h-4 w-4"/> Call {BRAND.phone}
              </a>
              <a href="#request" className="inline-flex items-center justify-center rounded-lg border px-5 py-3 text-base font-medium">Request Roadside Service</a>
            </div>
          </div>
          <div className="aspect-video w-full rounded-2xl border bg-neutral-50" />
        </section>

        {/* Request Form */}
        <section id="request" className="bg-neutral-50 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Request Roadside Service</h2>
              <p className="mt-2 text-neutral-600">Submit this form to dispatch. You’ll review disclosures & sign via DocuSign immediately after.</p>
              <form className="mt-6 space-y-4" action="/api/request" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="rounded-md border p-3" name="name" placeholder="Full name" required />
                  <input className="rounded-md border p-3" name="phone" placeholder="Phone" required />
                </div>
                <input className="w-full rounded-md border p-3" name="email" placeholder="Email" />
                <input className="w-full rounded-md border p-3" name="vehicle" placeholder="Truck / Trailer info" />
                <input className="w-full rounded-md border p-3" name="location" placeholder="Location (GPS/address)" />
                <textarea className="w-full rounded-md border p-3" name="issue" rows={5} placeholder="Describe the issue" />
                <div className="flex items-center justify-between text-sm text-neutral-600">
                  <span>By submitting, you agree to our terms and disclosures.</span>
                  <button className="rounded-md px-5 py-3 font-medium" style={{backgroundColor: BRAND.yellow, color: BRAND.black}} type="submit">Submit & Continue</button>
                </div>
              </form>
              <p className="mt-3 text-sm text-neutral-600">Prefer phone? <a className="underline" href={`tel:${BRAND.phone}`}>Call now</a>.</p>
            </div>
            <div className="rounded-lg border p-6 text-sm">
              <div className="font-semibold">Dispatch Details</div>
              <div className="mt-2">Phone: <a className="underline" href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></div>
              <div>Email: <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div>
              <div>Area: Grand Junction, Mesa County & neighboring counties (~75 miles)</div>
              <div>Hours: 24/7</div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white p-3 shadow md:hidden">
        <a href={`tel:${BRAND.phone}`} className="block w-full rounded-lg px-5 py-3 text-center font-medium" style={{backgroundColor: BRAND.yellow, color: BRAND.black}}>
          Call Now
        </a>
      </div>
    </div>
  )
}
