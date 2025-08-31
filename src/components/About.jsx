import React from 'react'
import { profile } from '../data'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{profile.summary}</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-6 text-sm">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40">
            <p><span className="font-medium">Location:</span> {profile.location}</p>
            <p className="mt-2"><span className="font-medium">Email:</span> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p className="mt-2"><span className="font-medium">Phone:</span> {profile.phone}</p>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40">
            <p className="font-medium">Links</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><a className="underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a className="underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
