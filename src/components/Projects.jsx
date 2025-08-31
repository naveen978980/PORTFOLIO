import React from 'react'
import { projects } from '../data'

function Card({ p }) {
  return (
    <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 overflow-hidden hover:shadow-soft transition-shadow">
      <img src={p.image} alt={p.name} className="h-44 w-full object-cover bg-slate-200 dark:bg-slate-800" />
      <div className="p-5">
        <h3 className="font-semibold">{p.name}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {p.stack.map(s => <span key={s} className="px-2 py-1 rounded-full border border-slate-300 dark:border-slate-700">{s}</span>)}
        </div>
        {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm underline">View Repo</a>}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <Card key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  )
}
