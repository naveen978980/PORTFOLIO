import React, { useState } from 'react'
import { profile } from '../data'

export default function Contact() {
  const [status, setStatus] = useState(null)

  function onSubmit(e) {
    e.preventDefault()
    setStatus("Thanks! Your message has been noted.")
    e.target.reset()
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form onSubmit={onSubmit} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
            <div className="grid grid-cols-1 gap-4">
              <input className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="Your name" required />
              <input className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" type="email" placeholder="Your email" required />
              <textarea className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 h-28" placeholder="Message" required />
              <button className="rounded-xl bg-brand-600 text-white px-4 py-2 hover:bg-brand-700">Send</button>
              {status && <p className="text-sm text-green-600">{status}</p>}
            </div>
          </form>
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
            <p><span className="font-medium">Email:</span> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p className="mt-2"><span className="font-medium">LinkedIn:</span> <a className="underline" href={profile.linkedin} target="_blank" rel="noreferrer">Profile</a></p>
            <p className="mt-2"><span className="font-medium">GitHub:</span> <a className="underline" href={profile.github} target="_blank" rel="noreferrer">naveen978980</a></p>
            <p className="mt-2"><span className="font-medium">Location:</span> {profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
