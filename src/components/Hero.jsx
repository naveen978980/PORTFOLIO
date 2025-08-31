import React from 'react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm tracking-widest text-brand-700 dark:text-brand-300">PORTFOLIO</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">{profile.title}</p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-brand-600 text-white px-5 py-3 hover:bg-brand-700 shadow-soft">View Projects</a>
            <a href="#contact" className="rounded-xl border border-slate-300 dark:border-slate-700 px-5 py-3 hover:shadow-soft">Contact</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm">
            <a className="underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="underline" href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="aspect-square w-full max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-brand-500/20 via-brand-700/10 to-brand-900/20 p-1">
            <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid place-items-center">
              <span className="text-8xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
