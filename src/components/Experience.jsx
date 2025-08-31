import React from 'react'
import { experience } from '../data'

function Item({ e }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">{e.org}</h3>
        <span className="text-xs text-slate-500">{e.period}</span>
      </div>
      <p className="text-sm mt-1">{e.role}</p>
      <ul className="mt-3 list-disc list-inside text-sm space-y-1">
        {e.bullets.map((b,i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {experience.map(e => <Item key={e.org} e={e} />)}
        </div>
      </div>
    </section>
  )
}
