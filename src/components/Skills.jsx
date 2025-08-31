import React from 'react'
import { skills } from '../data'

function Pill({ children }) {
  return <span className="px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700 text-sm">{children}</span>
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
            <h3 className="font-medium">Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2">{skills.languages.map(s => <Pill key={s}>{s}</Pill>)}</div>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
            <h3 className="font-medium">Technologies</h3>
            <div className="mt-3 flex flex-wrap gap-2">{skills.technologies.map(s => <Pill key={s}>{s}</Pill>)}</div>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
            <h3 className="font-medium">Other</h3>
            <div className="mt-3 flex flex-wrap gap-2">{skills.other.map(s => <Pill key={s}>{s}</Pill>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
