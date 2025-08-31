import React from 'react'
import { certifications, participation, achievements } from '../data'

export default function Certs() {
  return (
    <section id="certs" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Certifications & Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
            <h3 className="font-medium">Certifications</h3>
            <ul className="mt-2 list-disc list-inside text-sm space-y-1">
              {certifications.map((c,i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
            <h3 className="font-medium">Participation</h3>
            <ul className="mt-2 list-disc list-inside text-sm space-y-1">
              {participation.map((c,i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
            <h3 className="font-medium">Achievements</h3>
            <ul className="mt-2 list-disc list-inside text-sm space-y-1">
              {achievements.map((c,i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
